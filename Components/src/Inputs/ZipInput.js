import React, {useState, useEffect} from 'react';

export const ZipInput = ({value, defaultValue, onChange, onInput, onKeyDown, eventGivesRawDigits=false, ...props}) => {
  const [displayValue, setDisplayValue] = useState('');

  // Initialize with defaultValue if provided and no value is set
  useEffect(() => {
    if (defaultValue && value === undefined) {
      setDisplayValue(formatZipCode(defaultValue));
    }
  }, [defaultValue, value]);

  // Update display value when value prop changes (for controlled component)
  useEffect(() => {
    if (value !== undefined) {
      setDisplayValue(formatZipCode(value));
    }
  }, [value]);

  const formatZipCode = (zip) => {
    const digits = zip.replace(/\D/g, '');

    if (digits.length > 5) { 
      return `${digits.substring(0, 5)} - ${digits.substring(5, 9)}`;
    }
    return digits.substring(0, 5);
  };

  const handleChange = (evt) => {
    const rawValue = evt.target.value.replace(/\D/g, '').slice(0, 9);
    const formattedValue = formatZipCode(rawValue);
    setDisplayValue(formattedValue);

    // Create a synthetic event similar to the original
    const syntheticEvent = {
      ...evt,
      target: {
        ...evt.target,
        value: eventGivesRawDigits ? rawValue : formattedValue,
      }
    };

    // Hand off synthetic event to provided event handlers
    if (onChange) { onChange(syntheticEvent); }
    if (onInput) { onInput(syntheticEvent); }
  };

  const handleKeyDown = (evt) => {
    // Allow control keys (backspace, delete, arrows, etc.)
    if (evt.ctrlKey || evt?.key?.length > 1) {
      if (onKeyDown) { onKeyDown(evt); }
      return;
    }

    // Allow only numeric keys
    if (/[0-9]/.test(evt.key)) {
      if (onKeyDown) { onKeyDown(evt); }
      return;
    }

    // Prevent any other key
    evt.preventDefault();
  };

  const handlePaste = (evt) => {
    // Get paste data
    let pasteData = (evt.clipboardData || window.clipboardData).getData('text');

    // Prevent default paste behavior
    evt.preventDefault();

    // Extract only numeric characters and limit to 9 digits
    const rawValue = pasteData.replace(/\D/g, '').slice(0, 9);
    const formattedValue = formatZipCode(rawValue);
    setDisplayValue(formattedValue);

    // Call the onChange handler with the numeric value
    if (onChange) {
      const syntheticEvent = {
        ...evt,
        target: {
          ...evt.target,
          value: eventGivesRawDigits ? rawValue : formattedValue,
        }
      };
      onChange(syntheticEvent);
    }
  };

  // Ensure the input is not type=number since we're handling formatting
  delete props.type;

  return (
    <input
      inputMode="numeric"
      value={displayValue}
      onChange={handleChange}
      onInput={handleChange}
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
      maxLength={12}
      defaultValue={undefined}
      {...props}
    />
  );
};
