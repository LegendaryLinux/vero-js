import React from 'react';
import {states} from '@veroproducts/data';

/**
 * Generate an optgroup of options for the selected states
 * @returns {JSX.Element} - The generated state options wrapped in an optgroup.
 */
export const getStateOptions = () => (
  <optgroup key="United States" label="United States">
    {
      Object.keys(states).map((abbr) => (
        <option value={abbr} key={abbr}>
          {states[abbr]}
        </option>
      ))
    }
  </optgroup>
);

/**
 * Retrieves an array of mini state options.
 * @returns {Array} An array of abbreviated state options.
 */
export const getMiniStateOptions = () => {
  return Object.keys(states).map((abbr) => (
    <option value={abbr} key={abbr}>
      {abbr}
    </option>
  ));
}
