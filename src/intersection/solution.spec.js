import { filteredArray } from './solution.js';

describe('filteredArray', () => {
    test('should return elements present in both arrays', () => {
        const array1 = [1, 2, 3, 4];
        const array2 = [2, 4, 6];
        expect(filteredArray(array1, array2)).toEqual([2, 4]);
    });

    test('should return empty array if no common elements', () => {
        const array1 = [1, 2, 3];
        const array2 = [4, 5, 6];
        expect(filteredArray(array1, array2)).toEqual([]);
    });

    test('should handle empty first array', () => {
        const array1 = [];
        const array2 = [1, 2, 3];
        expect(filteredArray(array1, array2)).toEqual([]);
    });

    test('should handle empty second array', () => {
        const array1 = [1, 2, 3];
        const array2 = [];
        expect(filteredArray(array1, array2)).toEqual([]);
    });

    test('should handle arrays with mixed types', () => {
        const array1 = [1, 'a', true, null];
        const array2 = ['a', null, false];
        expect(filteredArray(array1, array2)).toEqual(['a', null]);
    });

    test('should handle duplicate elements', () => {
        const array1 = [1, 1, 2, 2, 3];
        const array2 = [1, 2];
        expect(filteredArray(array1, array2)).toEqual([1, 1, 2, 2]);
    });

    test('should not modify original arrays', () => {
        const array1 = [1, 2, 3];
        const array2 = [2, 3];
        const original1 = [...array1];
        const original2 = [...array2];
        filteredArray(array1, array2);
        expect(array1).toEqual(original1);
        expect(array2).toEqual(original2);
    });
});
