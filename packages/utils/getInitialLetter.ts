/**
 * Retrieves a letter from a string.
 *
 * @param {string} str - The string to process (with removal of special characters + uppercase process).
 * @param {number} index - The index of the letter to retrieve.
 * @returns {string} The letter at the specified index.
 */
export const getInitialLetter = (str: string, index: number): string => {
  return str
    .replace(/[^a-zA-Z0-9]/g, '')
    .charAt(index)
    .toUpperCase();
};
