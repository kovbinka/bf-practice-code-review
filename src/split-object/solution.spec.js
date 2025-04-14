import { separateObject } from './solution.js';

describe('separateObject', () => {
    test('should convert object to array of objects with key property', () => {
        const input = { a: 1, b: 2 };
        const expected = [{ key: 1 }, { key: 2 }];
        expect(separateObject(input)).toEqual(expected);
    });

    test('should handle empty object', () => {
        expect(separateObject({})).toEqual([]);
    });

    test('should handle object with mixed value types', () => {
        const input = { x: 'hello', y: true, z: null };
        const expected = [{ key: 'hello' }, { key: true }, { key: null }];
        expect(separateObject(input)).toEqual(expected);
    });

    test('should handle object with one property', () => {
        const input = { single: 42 };
        expect(separateObject(input)).toEqual([{ key: 42 }]);
    });

    test('should not modify original object', () => {
        const input = { a: 1, b: 2 };
        const original = { ...input };
        separateObject(input);
        expect(input).toEqual(original);
    });
});
