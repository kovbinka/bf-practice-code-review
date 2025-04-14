/** .........
 * Split an object into an array of objects.
 *
 * @param {object} obj - An object to split.
 * @returns {array} Returns new array with splited objects.
 */

export const separateObject = (obj) => {
    const res = [];
    const keys = Object.keys(obj);
    keys.forEach((key) => {
        res.push({
            key: obj[key],
        });
    });
    return res;
};
