/**
 * Fetch a GET parameter from the URL
 * @param param
 * @returns {String|null}
 */
export const getParam = (param) => {
  let thisParam = [];
  for (let item of location.search.substring(1).split('&')) {
    thisParam = item.split('=');
    if (thisParam[0] === param) {
      return decodeURIComponent(thisParam[1]);
    }
  }
  return null;
}
