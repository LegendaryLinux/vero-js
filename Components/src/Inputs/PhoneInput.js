import React, {useState, useEffect} from 'react';

export const PhoneInput = ({value='', onChange, onKeyDown, eventGivesRawDigits=false, ...props}) => {
  const [displayValue, setDisplayValue] = useState('');

  // Update the display value when the actual value changes
  useEffect(() => {
    setDisplayValue(formatPhoneNumber(value));
  }, [value]);

  const formatPhoneNumber = (phone) => {
    const digits = phone.replace(/\D/g, '');

    if (digits.length > 6) { return `(${digits.substring(0, 3)}) ${digits.substring(3, 6)} - ${digits.substring(6, 10)}`; }
    if (digits.length > 3) { return `(${digits.substring(0, 3)}) ${digits.substring(3, 6)}`; }
    if (digits.length > 0) { return `(${digits.substring(0, 3)}`; }
    return '';
  };

  const handleChange = (evt) => {
    if (onChange) {
      // Create a synthetic event similar to the original
      const syntheticEvent = {
        ...evt,
        target: {
          ...evt.target,
          value: eventGivesRawDigits ?
            evt.target.value.replace(/\D/g, '').slice(0, 10) :
            evt.target.value,
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
  const [phoneValue2, setPhoneValue2] = useState('');

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Phone Input Demo</h2>

      <h3>Event gives formatted value:</h3>
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
        <p><strong>Raw Value (Taken from synthetic event):</strong> {phoneValue}</p>
      </div>

      <h3 style={{marginTop: '3rem'}}>Event gives raw value:</h3>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="phone-input" style={{ display: 'block', marginBottom: '0.5rem' }}>
          Phone Number:
        </label>
        <PhoneInput
          id="phone-input"
          value={phoneValue2}
          onChange={(evt) => setPhoneValue2(evt.target.value)}
          style={{ padding: '0.5rem', fontSize: '1rem' }}
          eventGivesRawDigits={true}
        />
      </div>

      <div>
        <p><strong>Raw Value (Taken from synthetic event):</strong> {phoneValue2}</p>
      </div>
    </div>
  );
};