import { cleanInput } from './repl';
import { describe, expect, test  } from 'vitest';

describe.each([
    {
        input: "  ",
        expected: []
    },
    {
        input: "  Hello  worlD  ",
        expected: ["hello", "world"]
    },
    {
        input: "HELLO WORLD",
        expected: ["hello", "world"]
    },
    {
        input: "  Hello  World   3 ",
        expected: ["hello", "world", "3"]
    }
])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        const actual = cleanInput(input);
        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            expect(actual[i]).toBe(expected[i])
        }
    })
});