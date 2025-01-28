import React, {useState, useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

/**
 * BannerMessage component
 * @param message {String} Message to display in the banner
 * @param isWarning {Boolean} If true, will make the banner background yellow
 * @param isError {Boolean} If true, will make the banner background red. Takes precedence over isWarning
 * @param alwaysOnTop {Boolean} If true, will use position: fixed. False uses position: static. Default false
 * @param errorColor {String} Default #ff0000
 * @param warningColor {String} Default #fbd913
 * @param successColor {String} Default #5ebf72
 * @param textColor {String} Default #ffffff
 * @returns {JSX.Element|null}
 * @constructor
 */
export const BannerMessage = ({message, isWarning=false, isError=false, alwaysOnTop=false, textColor='#ffffff',
                               errorColor='#ff0000', warningColor='#fbd913', successColor='#5ebf72' }) => {
  const [hidden, setHidden] = useState(false);

  const baseStyle = {
    position: alwaysOnTop ? 'fixed' : 'static',
    top: 0,
    left: 0,
    width: '100vw',
    height: '50px',
    lineHeight: '50px',
    textAlign: 'center',
    zIndex: 50,
    boxShadow: '0 3px 4px 0 rgba(0,0,0,0.15)',
    color: textColor,
    backgroundColor: isError ? errorColor : (isWarning ? warningColor : successColor),
  };

  const closeStyle = {
    display: 'inline-block',
    float: 'right',
    marginRight: '0.75em',
    cursor: 'pointer',
  };

  useEffect(() => {
    // Leave error messages open until the user closes them
    if (isError) {return;}

    // Automatically close success and warning messages after ten seconds
    setTimeout(() => setHidden(true), 10000)
  }, []);

  // Don't show the banner if it's supposed to be hidden
  if (hidden) {
    resetBannerMessage(false);
  }

  return (
    <div style={baseStyle}>
      {message}
      <div className="fidelis-banner-close-container" onClick={() => setHidden(true)} style={closeStyle}>
        <FontAwesomeIcon icon={faTimes}/>
      </div>
    </div>
  );
};

/**
 * Destroys any existing batter message
 * @param replace {Boolean} If false, do not create a div for a new banner
 * @return {void}
 */
export const resetBannerMessage = (replace=true) => {
  // Delete any previous banner message's parent div
  const oldBanner = document.getElementById('fidelis-banner-message-container');
  if (oldBanner){
    document.body.removeChild(oldBanner);
  }

  if (!replace) {
    return;
  }

  // Create a new div for our banner message
  const bannerParent = document.createElement('div');
  bannerParent.id = 'fidelis-banner-message-container';
  document.body.prepend(bannerParent);
}

/**
 * Displays a success banner with the given message.
 * @param {string} message - The message to display
 * @param alwaysOnTop {Boolean} If true, stays on top with position fixed. Default false for position static
 */
export const showSuccessBanner = (message, alwaysOnTop=false) => {
  resetBannerMessage();
  const root = createRoot(document.getElementById('fidelis-banner-message-container'));
  root.render(<BannerMessage message={message} alwaysOnTop={alwaysOnTop} />);
}

/**
 * Displays a warning banner with the given message.
 * @param {string} message - The message to display
 * @param alwaysOnTop {Boolean} If true, stays on top with position fixed. Default false for position static
 */
export const showWarningBanner = (message, alwaysOnTop=false) => {
  resetBannerMessage();
  const root = createRoot(document.getElementById('fidelis-banner-message-container'));
  root.render(<BannerMessage message={message} isWarning={true} alwaysOnTop={alwaysOnTop} warningColor="#000000" />);
}

/**
 * Displays an error banner with the given message.
 * @param {string} message - The message to display
 * @param alwaysOnTop {Boolean} If true, stays on top with position fixed. Default false for position static
 */
export const showErrorBanner = (message, alwaysOnTop=false) => {
  resetBannerMessage();
  const root = createRoot(document.getElementById('fidelis-banner-message-container'));
  root.render(<BannerMessage message={message} isError={true} alwaysOnTop={alwaysOnTop} />);
}
