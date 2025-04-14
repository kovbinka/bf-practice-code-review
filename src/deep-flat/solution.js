/** .........
 * Unnesting the array.
 *
 * @param {array} array - Array to unnesting.
 * @returns {array} New unnested array.
 */

export const spreadFlatten = (array) => {
    let flatArray = []; 
    return flatArray.concat(...array); 
  };
