/** .........
 * Find Common Elements Between Two Arrays
 *
 * @param {array} num1 - The first array to filter.
 * @param {array} num2 - The second array to find commons.
 * @returns {array} The new filtered array.
 */

export const filteredArray = (array1, array2) =>
    array1.filter((value) => array2.includes(value));
