const kata = require("./katas");
let katas6 = new kata.kata6();
let katas5 = new kata.kata5();

test("Kata 6: Ex1 - should find these numbers are narcissistic", () => {
    expect(katas6.narcissistic(7)).toBe(true);
    expect(katas6.narcissistic(371)).toBe(true);
})

test("Kata 6: Ex2 - should sum digits of given number until sum is a single digit", () => {
    expect(katas6.sumOfDigits(16)).toBe(7);
    expect(katas6.sumOfDigits(456)).toBe(6);
    expect(katas6.sumOfDigits(132189)).toBe(6);
    expect(katas6.sumOfDigits(493193)).toBe(2);
})

test("Kata 6: Ex3 - should return separated camel case", () => {
    expect(katas6.breakCamelCase("camelCasing")).toBe("camel Casing");
    expect(katas6.breakCamelCase("camelCasingTest")).toBe("camel Casing Test");
    expect(katas6.breakCamelCase("identifier")).toBe("identifier");
})

test("Kata 5: Ex1 - should return the first non repeating letter", () => {
    expect(katas5.firstNonRepeatingLetter("a")).toBe("a");
    expect(katas5.firstNonRepeatingLetter("stress")).toBe("t");
    expect(katas5.firstNonRepeatingLetter("moonmen")).toBe("e");
    expect(katas5.firstNonRepeatingLetter("sTreSS")).toBe("T");
})

test("Kata 6: Ex4 - should go back to starting position and return true", () => {
    expect(katas6.isValidWalk(['n','s','n','s','n','s','n','s','n','s'])).toBe(true);
})

test("Kata 6: Ex4 - should not go back to starting position and return false", () => {
    expect(katas6.isValidWalk(['w'])).toBe(false);
    expect(katas6.isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])).toBe(false);
    expect(katas6.isValidWalk(['n','n','n','s','n','s','n','s','n','s'])).toBe(false);
})

test("Kata 6: Ex5 - should sort only the odd numbers", () => {
    expect(katas6.sortTheOdd([5, 3, 2, 8, 1, 4])).toEqual([1, 3, 2, 8, 5, 4]);
    expect(katas6.sortTheOdd([5, 3, 1, 8, 0])).toEqual([1, 3, 5, 8, 0]);
    expect(katas6.sortTheOdd([])).toEqual([]);
    expect(katas6.sortTheOdd([7, 1])).toEqual([1, 7]);
    expect(katas6.sortTheOdd([5, 8, 6, 3, 4])).toEqual([3, 8, 6, 5, 4]);
    expect(katas6.sortTheOdd([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])).toEqual([1, 8, 3, 6, 5, 4, 7, 2, 9, 0]);
})

test("Kata 6: Ex6 - should return all elements in a not in b", () => {
    expect(katas6.arrayDiff([1,2],[1])).toEqual([2]);
    expect(katas6.arrayDiff([1,2,2], [1])).toEqual([2,2]);
    expect(katas6.arrayDiff([1,2,2], [2])).toEqual([1]);
    expect(katas6.arrayDiff([1,2,2], [])).toEqual([1,2,2]);
    expect(katas6.arrayDiff([], [1,2])).toEqual([]);
    expect(katas6.arrayDiff([1,2,3], [1,2])).toEqual([3]);
})

test("Kata 6: Ex7 - should return a list of all digits that can be raised to the consecutive powers (1,2,3,...)", () => {
    expect(katas6.sumDigPow(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(katas6.sumDigPow(1, 100)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 89]);
    expect(katas6.sumDigPow(10, 100)).toEqual([89]);
    expect(katas6.sumDigPow(90, 100)).toEqual([]);
    expect(katas6.sumDigPow(90, 150)).toEqual([135]);
    expect(katas6.sumDigPow(50, 150)).toEqual([89, 135]);
    expect(katas6.sumDigPow(10, 150)).toEqual([89, 135]);
})