import React from 'react';

export const IntegerInput = ({onKeyDown, ...props}) => {
  const handleKeyDown = (evt) => {
    if (evt.ctrlKey || evt?.key?.length > 1 || /[0-9]/.test(evt.key)) {
      if (onKeyDown) { onKeyDown(evt); }
      return;
    }
    evt.preventDefault();
  };

  const handlePaste = (evt) => {
    let pasteData = (evt.clipboardData || window.clipboardData).getData('text');
    evt.target.value = pasteData.replace(/[^0-9]/g, '');
    handleKeyDown(evt);
  };

  // Ensure the input is always type=number
  delete props.type;

  return (
    <input
      type="number"
      inputMode="numeric"
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
      {...props}
    />
  )
};
