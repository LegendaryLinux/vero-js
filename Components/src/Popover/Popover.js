import React, {useState, useEffect, useRef, useCallback} from 'react';
import './Popover.scss';

/**
 *
 * @param content {JSX.Element} The content to render inside the popover
 * @param placement {String} One of top, bottom, left, right
 * @param closeOnContentClick {Boolean} If true, clicking the content of the popover will close it. Default false
 * @param disableScrollWhileOpen {Boolean} If true, scrolling will be disabled while the popover is visible. Default false
 * @param distance {Number} Integer value of pixels to distance the popover from its trigger element. Default 5
 * @param zIndex {Number} Integer value to be used as the z-index of the overlay and popover. Default 10
 * @param children {JSX.Element} Object to render in the DOM. Clicking this will open the popover
 * @returns {JSX.Element}
 * @constructor
 */
export const Popover = ({content, placement='bottom', closeOnContentClick=false,
                              disableScrollWhileOpen=false, distance=5, zIndex=10, children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const childRef = useRef(null);
  const contentRef = useRef(null);

  // Cache the wheel event function across re-renders, allowing it to be removed from the window object when
  // the popover is closed
  const preventScroll = useCallback((evt) => evt.preventDefault(), []);

  useEffect(() => {
    if (isOpen) {
      updateContentPosition();

      // Update position on window resize
      window.addEventListener('resize', updateContentPosition);

      if (disableScrollWhileOpen) {
        // Prevent scrolling while the popover is open
        window.addEventListener('wheel', preventScroll, {passive: false});
      }

      // Show modal
      contentRef.current.style.visibility = 'unset';
    } else {
      // Remove event listener when popover is hidden
      window.removeEventListener('resize', updateContentPosition);

      if (disableScrollWhileOpen) {
        // Restore scrolling
        window.removeEventListener('wheel', preventScroll);
      }
    }
  }, [isOpen, preventScroll]);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const updateContentPosition = () => {
    // Determine size and position of child element relative to the viewport
    const childRect = childRef.current.getBoundingClientRect();

    // Account for scroll position of the viewport
    const childX = window.scrollX + childRect.left;
    const childY = window.scrollY + childRect.top;

    const childWidth = childRect.width;
    const childHeight = childRect.height;
    const childCenterX = Math.floor(childX + (childWidth / 2));
    const childCenterY = Math.floor(childY + (childHeight / 2));

    // Determine size of content (popover dimensions)
    const contentWidth = contentRef.current.offsetWidth;
    const contentHeight = contentRef.current.offsetHeight;

    // Pixel distances from the edge of the screen for content positioning
    let top = 0, left = 0;

    switch (placement) {
      case 'top':
        top = (childY - contentHeight - distance);
        left = (childCenterX - (Math.floor(contentWidth / 2)));
        break;

      case 'bottom':
        top = (childY + childHeight + distance);
        left = (childCenterX - (Math.floor(contentWidth / 2)));
        break;

      case 'left':
        top = (childCenterY - Math.floor(contentHeight / 2));
        left = (childX - contentWidth - distance);
        break;

      case 'right':
        top = (childCenterY - Math.floor(contentHeight / 2));
        left = (childX + childWidth + distance);
        break;

      default:
        throw Error(`Unexpected placement ${placement}. Must be one of: top, bottom, left, right.`);
    }

    // Adjust content to ensure it is not off-screen
    if (top < 1) {
      top = 1;
    }

    if ((top + contentHeight) > document.body.scrollHeight) {
      top = (window.scrollY + window.innerHeight - contentHeight - 1);
    }

    if (left < 1) {
      left = 1;
    }

    if ((left + contentWidth) > document.body.scrollWidth) {
      left = (window.scrollX + window.innerWidth - contentWidth - 1);
    }

    // Apply calculated distances to content element
    contentRef.current.style.top = top ? `${top}px` : 'unset';
    contentRef.current.style.left = left ? `${left}px` : 'unset';
  };

  return (
    <>
      <div className="vero-popover-trigger" onClick={openModal} ref={childRef}>
        {children}
      </div>
      {
        isOpen ? (
          <>
            <div className="vero-popover-overlay" onClick={closeModal} style={{zIndex}} />
            <div
              className="vero-popover-content"
              style={{zIndex}}
              ref={contentRef}
              onClick={closeOnContentClick ? closeModal : null}
            >
              {content}
            </div>
          </>
        ) : null
      }
    </>
  );
};
