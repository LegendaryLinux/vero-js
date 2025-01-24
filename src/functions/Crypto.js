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
