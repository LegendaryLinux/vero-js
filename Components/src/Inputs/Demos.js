import React, {useState} from 'react';
import {PhoneInput} from './PhoneInput';
import {IntegerInput} from './IntegerInput';
import {NumericInput} from './NumericInput';
import {ZipInput} from "./ZipInput";

export const IntegerInputDemo = () => {
  const [value, setValue] = useState('');

  return (
    <div style={{padding: '1rem'}}>
      <h3>Integer Input Demo</h3>
      <IntegerInput onInput={(evt) => setValue(evt.target.value)} />
      <br />
      Current value: {value}
    </div>
  );
}

export const NumericInputDemo = () => {
  const [value, setValue] = useState('');

  return (
    <div style={{padding: '1rem'}}>
      <h3>Numeric Input Demo</h3>
      <NumericInput onInput={(evt) => setValue(evt.target.value)} />
      <br />
      Current value: {value}
    </div>
  );
}

export const PhoneInputDemo = () => {
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
          defaultValue="1234567890"
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

export const ZipInputDemo = () => {
  const [zipValue, setZipValue] = useState('');
  const [zipValue2, setZipValue2] = useState('');

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Zip Input Demo</h2>
      <h3>Event gives formatted value:</h3>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="zip-input" style={{ display: 'block', marginBottom: '0.5rem' }}>
          Zip Code:
        </label>
        <ZipInput
          id="zip-input"
          defaultValue="123456789"
          onChange={(evt) => setZipValue(evt.target.value)}
          style={{ padding: '0.5rem', fontSize: '1rem' }}
        />
      </div>

      <div>
        <p><strong>Raw Value (Taken from synthetic event):</strong> {zipValue}</p>
      </div>

      <h3 style={{marginTop: '3rem'}}>Event gives raw value:</h3>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="zip-input-2" style={{ display: 'block', marginBottom: '0.5rem' }}>
          Zip Code:
        </label>
        <ZipInput
          id="zip-input-2"
          defaultValue="12345"
          onChange={(evt) => setZipValue2(evt.target.value)}
          style={{ padding: '0.5rem', fontSize: '1rem' }}
          eventGivesRawDigits={true}
        />
      </div>

      <div>
        <p><strong>Raw Value (Taken from synthetic event):</strong> {zipValue2}</p>
      </div>
    </div>
  );
};