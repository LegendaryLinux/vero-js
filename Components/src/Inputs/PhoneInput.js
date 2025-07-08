import React, {useState, useEffect} from 'react';

export const PhoneInput = ({value, defaultValue, onChange, onInput, onKeyDown, eventGivesRawDigits=false, ...props}) => {
  const [displayValue, setDisplayValue] = useState('');

  // Update the display value when the actual value changes
  useEffect(() => {
    if (defaultValue && value === undefined) {
      setDisplayValue(formatPhoneNumber(defaultValue));
    }
  }, [defaultValue, value]);

  // Update display value when value prop changes (for controlled component)
  useEffect(() => {
    if (value) {
      setDisplayValue(formatPhoneNumber(value));
    }
  }, [value]);

  const formatPhoneNumber = (phone) => {
    const digits = phone.replace(/\D/g, '');

    if (digits.length > 6) { return `(${digits.substring(0, 3)}) ${digits.substring(3, 6)} - ${digits.substring(6, 10)}`; }
    if (digits.length > 3) { return `(${digits.substring(0, 3)}) ${digits.substring(3, 6)}`; }
    if (digits.length > 0) { return `(${digits.substring(0, 3)}`; }
    return '';
  };

  const handleChange = (evt) => {
    const rawValue = evt.target.value.replace(/\D/g, '').slice(0, 10);
    const formattedValue = formatPhoneNumber(rawValue);
    setDisplayValue(formattedValue);

    // Create a synthetic event similar to the original
    const syntheticEvent = {
      ...evt,
      target: {
        ...evt.target,
        value: eventGivesRawDigits ? rawValue : formattedValue,
      }
    };

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

    // Extract only numeric characters and limit to 10 digits
    const rawValue = pasteData.replace(/\D/g, '').slice(0, 10);
    const formattedValue = formatPhoneNumber(rawValue);
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
      maxLength={16}
      defaultValue={undefined}
      {...props}
    />
  );
};
