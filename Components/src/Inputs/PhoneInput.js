import React, {useState, useEffect} from 'react';

export const PhoneInput = ({value = '', onChange, onKeyDown, ...props}) => {
  const [displayValue, setDisplayValue] = useState('');

  // Update the display value when the actual value changes
  useEffect(() => {
    setDisplayValue(formatPhoneNumber(value));
  }, [value]);

  // Format a numeric string into phone format: (123) 456 - 7890
  const formatPhoneNumber = (phoneNumberString) => {
    // Strip non-numeric characters
    const purifiedValue = phoneNumberString.replace(/\D/g, '');

    // Apply formatting based on the length of the number
    if (purifiedValue.length === 0) {
      return '';
    } else if (purifiedValue.length <= 3) {
      return `(${purifiedValue}`;
    } else if (purifiedValue.length <= 6) {
      return `(${purifiedValue.slice(0, 3)}) ${purifiedValue.slice(3)}`;
    } else {
      return `(${purifiedValue.slice(0, 3)}) ${purifiedValue.slice(3, 6)} - ${purifiedValue.slice(6, 10)}`;
    }
  };

  const handleChange = (evt) => {
    // Call the onChange handler with the numeric value
    if (onChange) {
      // Create a synthetic event similar to the original
      const syntheticEvent = {
        ...evt,
        target: {
          ...evt.target,
          value: evt.target.value.replace(/\D/g, '').slice(0, 10),
        }
      };
      onChange(syntheticEvent);
    }
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

    // Call the onChange handler with the numeric value
    if (onChange) {
      const syntheticEvent = {
        ...evt,
        target: {
          ...evt.target,
          value: pasteData.replace(/\D/g, '').slice(0, 10),
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
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
      maxLength={16}
      {...props}
    />
  );
};


export const Demo = () => {
  const [phoneValue, setPhoneValue] = useState('');

  return (
    <div style={{ padding: '1rem' }}>
      <h3>Phone Input Demo</h3>

      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="phone-input" style={{ display: 'block', marginBottom: '0.5rem' }}>
          Phone Number:
        </label>
        <PhoneInput
          id="phone-input"
          value={phoneValue}
          onChange={(evt) => setPhoneValue(evt.target.value)}
          style={{ padding: '0.5rem', fontSize: '1rem' }}
        />
      </div>

      <div>
        <p><strong>Formatted Value:</strong> {phoneValue ? `(${phoneValue.slice(0, 3)}) ${phoneValue.slice(3, 6)} - ${phoneValue.slice(6)}` : ''}</p>
        <p><strong>Raw Value (numbers only):</strong> {phoneValue}</p>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <p><em>Note: The input only accepts numbers and formats them as (123) 456 - 7890</em></p>
        <p><em>The actual value stored contains only numbers: 1234567890</em></p>
      </div>
    </div>
  );
};
