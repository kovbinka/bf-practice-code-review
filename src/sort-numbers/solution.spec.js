import { sortWithoutSpecialNumbers } from './solution.js';

describe('sortWithoutSpecialNumbers', () => {
    test('should sort array and exclude NaN, Infinity, -Infinity', () => {
        const input = [5, NaN, 2, Infinity, -Infinity, 3, 0];
        const expected = [0, 2, 3, 5];
        expect(sortWithoutSpecialNumbers(input)).toEqual(expected);
    });

    test('should handle array with only special numbers', () => {
        const input = [NaN, Infinity, -Infinity];
        expect(sortWithoutSpecialNumbers(input)).toEqual([]);
    });

    test('should handle empty array', () => {
        expect(sortWithoutSpecialNumbers([])).toEqual([]);
    });

    test('should handle array with no special numbers', () => {
        const input = [4, 1, 3, 2];
        const expected = [1, 2, 3, 4];
        expect(sortWithoutSpecialNumbers(input)).toEqual(expected);
    });

    test('should handle mixed types', () => {
        const input = [1, '2', NaN, Infinity, 3, -Infinity, null];
        const expected = [1, 3];
        expect(sortWithoutSpecialNumbers(input)).toEqual(expected);
    });

    test('should not modify original array', () => {
        const input = [3, NaN, 1, Infinity];
        const original = [...input];
        sortWithoutSpecialNumbers(input);
        expect(input).toEqual(original);
    });

    test('should handle negative numbers', () => {
        const input = [-1, NaN, -5, Infinity, 0, -Infinity];
        const expected = [-5, -1, 0];
        expect(sortWithoutSpecialNumbers(input)).toEqual(expected);
    });
});
