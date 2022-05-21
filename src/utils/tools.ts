/**
 * Capitalize string
 * @param  {string} str
 * @returns {string}
 */
const capitalizeText = (str: string): string => `${str.charAt(0).toUpperCase()}${str.substring(1)}`
export default capitalizeText
