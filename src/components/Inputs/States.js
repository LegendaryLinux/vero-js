/**
 * An object representing the US states
 * @type {Object<string, string>}
 */
export const states = {
  AL: 'Alabama',
  AK: 'Alaska',
  AS: 'American Samoa',
  AZ: 'Arizona',
  AR: 'Arkansas',
  CA: 'California',
  CO: 'Colorado',
  CT: 'Connecticut',
  DE: 'Delaware',
  FL: 'Florida',
  FM: 'Federated States of Micronesia',
  GA: 'Georgia',
  GU: 'Guam',
  HI: 'Hawaii',
  ID: 'Idaho',
  IL: 'Illinois',
  IN: 'Indiana',
  IA: 'Iowa',
  KS: 'Kansas',
  KY: 'Kentucky',
  LA: 'Louisiana',
  ME: 'Maine',
  MH: 'Marshall Islands',
  MD: 'Maryland',
  MA: 'Massachusetts',
  MI: 'Michigan',
  MN: 'Minnesota',
  MS: 'Mississippi',
  MO: 'Missouri',
  MT: 'Montana',
  NE: 'Nebraska',
  NV: 'Nevada',
  NH: 'New Hampshire',
  NJ: 'New Jersey',
  NM: 'New Mexico',
  NY: 'New York',
  NC: 'North Carolina',
  ND: 'North Dakota',
  MP: 'Northern Mariana Islands',
  OH: 'Ohio',
  OK: 'Oklahoma',
  OR: 'Oregon',
  PW: 'Palau',
  PA: 'Pennsylvania',
  PR: 'Puerto Rico',
  RI: 'Rhode Island',
  SC: 'South Carolina',
  SD: 'South Dakota',
  TN: 'Tennessee',
  TX: 'Texas',
  VI: 'U.S. Virgin Islands',
  UM: 'U.S. Minor Outlying Islands',
  UT: 'Utah',
  VT: 'Vermont',
  VA: 'Virginia',
  WA: 'Washington',
  WV: 'West Virginia',
  WI: 'Wisconsin',
  WY: 'Wyoming',
};

/**
 * Generate an optgroup of options for the selected states
 * @returns {JSX.Element} - The generated state options wrapped in an optgroup.
 */
export const getStateOptions = () => (
  <optgroup key="United States" label="United States">
    {
      Object.keys(this.states).map((abbr) => (
        <option value={abbr} key={abbr}>
          {this.states[abbr]}
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
  return Object.keys(this.states).map((abbr) => (
    <option value={abbr} key={abbr}>
      {abbr}
    </option>
  ));
}
