/**
 * Compute the SHA-256 hash of a string and return its hexadecimal representation
 * @param string {String}
 * @returns {Promise<String>}
 */
export const digestToHex = (string) => new Promise((resolve, reject) => {
  if (typeof string !== 'string') {
    reject(Error('The provided argument is not a string.'));
  }

  const u8String = new TextEncoder().encode(string);
  crypto.subtle.digest('SHA-256', u8String).then((hashBuffer) => {
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((byte) => byte.toString(16).padStart(2, '0')).join('');
    resolve(hashHex);
  });
});

/**
 * Generate a UUID
 * @param seed {String}
 * @returns {string|*}
 */
export const genUUID = (seed=null) => {
  return seed ?
    (seed ^ Math.random() * 16 >> seed / 4).toString(16) :
    ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, genUUID);
}
