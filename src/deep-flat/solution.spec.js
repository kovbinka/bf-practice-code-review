const spreadFlatten = (array) => {
    let flatArray = []; 
    return flatArray.concat(...array); 
};

describe('spreadFlatten', () => {
    test('should flatten a nested array by one level', () => {
        const input = [1, [2, 3], [4, [5, 6]]];
        const expected = [1, 2, 3, 4, [5, 6]];
        expect(spreadFlatten(input)).toEqual(expected);
    });

    test('should handle an empty array', () => {
        expect(spreadFlatten([])).toEqual([]);
    });

    test('should handle a flat array', () => {
        const input = [1, 2, 3];
        expect(spreadFlatten(input)).toEqual([1, 2, 3]);
    });

    test('should handle an array with empty arrays', () => {
        const input = [[], [], [1, 2]];
        const expected = [1, 2];
        expect(spreadFlatten(input)).toEqual(expected);
    });

    test('should handle an array with mixed types', () => {
        const input = [1, ['a', 'b'], [true, [null]]];
        const expected = [1, 'a', 'b', true, [null]];
        expect(spreadFlatten(input)).toEqual(expected);
    });
});