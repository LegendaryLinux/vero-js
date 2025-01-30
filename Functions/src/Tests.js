/**
 * Test if a provided string validates to an email address
 * @param email {String} The string to be tested
 * @returns {Boolean}
 */
export const testEmail = (email) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
};

/**
 * Test if a provided string or number validates to a phone number
 * @param phone {String} The string to be tested
 * @param withFormatting {Boolean} If true, look for traditional formatting as well: (xxx) xxx - xxxx
 * @returns {Boolean}
 */
export const testPhone = (phone, withFormatting=false) => {
  return withFormatting ?
    /^\(\d{3}\) \d{3} - \d{4}$/.test(phone) :
    /^\d{10}$/.test(phone)
};

/**
 * Test if a provided string validates to a US zip code
 * @param zip {String} The string to be tested
 * @param plusFour {Boolean} If true, look for a zip+4 xxxxx-xxxx
 * @returns {boolean}
 */
export const testZip = (zip, plusFour) => {
  return plusFour ?
    /^\d{5}(-?\d{4})?$/.test(zip) :
    /^\d{5}$/.test(zip);
};
