import React, {useRef} from 'react';
import './Modal.scss';

/**
 * Component to render a modal
 * @param trigger {JSX.Element} Element which will render the modal when clicked
 * @param closeClass {String} Give this class name to an element in the modal to cause the element to close the
 * modal when clicked
 * @param dialogClass {String} a class name to apply to the <dialog> element. Allows for custom styling
 * @param children {JSX.Element} Contents of the modal
 * @returns {JSX.Element}
 * @constructor
 */
export const Modal = ({trigger, closeClass='modal-close', dialogClass='', children}) => {
  const dialogRef = useRef(null);

  const openModal = () => {
    dialogRef.current.showModal();
  }

  const closeModal = () => dialogRef.current.close();
  const handleDialogClick = (event) => {
    const closeTarget = event.target.closest(`.${closeClass}`);
    if (closeTarget && dialogRef.current?.contains(closeTarget)) {
      closeModal();
    }
  };

  return (
    <>
      <span onClick={openModal}>{trigger}</span>
      <dialog
        ref={dialogRef}
        className={`modal-dialog ${dialogClass}`}
        onClick={handleDialogClick}
      >
        {children}
      </dialog>
    </>
  );
};
