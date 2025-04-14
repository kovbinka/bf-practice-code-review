* Sorts an array of numbers.
 *
 * @param {array} array - An array to sort.
 * @returns {array} Returns new sorted array without NaN, Infinity, -Infinity.
 */

export const sortWithoutSpecialNumbers = (array) => {
    return array
        .filter((item) => Number.isFinite(item) && !isNaN(item))
        .sort((a, b) => a - b);
};
