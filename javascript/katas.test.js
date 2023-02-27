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

test("Kata 6: Ex10 - should concatenate all odd items with all even items N times", () => {
    expect(katas6.encrypt("This is a test!", 0)).toBe("This is a test!");
    expect(katas6.encrypt("This is a test!", 1)).toBe("hsi  etTi sats!");
    expect(katas6.encrypt("This is a test!", 2)).toBe("s eT ashi tist!");
    expect(katas6.encrypt("This is a test!", 3)).toBe(" Tah itse sits!");
    expect(katas6.encrypt("This is a test!", 4)).toBe("This is a test!");
    expect(katas6.encrypt("This is a test!", -1)).toBe("This is a test!");
    expect(katas6.encrypt("This kata is very interesting!", 1)).toEqual("hskt svr neetn!Ti aai eyitrsig");
})

test("Kata 6: Ex10 - should decrypt the encrypted values by Kata6.encrypt", () => {
    expect(katas6.decrypt("This is a test!", 0)).toBe("This is a test!");
    expect(katas6.decrypt("hsi  etTi sats!", 1)).toBe("This is a test!");
    expect(katas6.decrypt("s eT ashi tist!", 2)).toBe("This is a test!");
    expect(katas6.decrypt(" Tah itse sits!", 3)).toBe("This is a test!");
    expect(katas6.decrypt("This is a test!", 4)).toBe("This is a test!");
    expect(katas6.decrypt("This is a test!", -1)).toBe("This is a test!");
    expect(katas6.decrypt("hskt svr neetn!Ti aai eyitrsig", 1)).toBe("This kata is very interesting!");
})

test("Kata 6: Ex10 - should return null, empty string or same string", () => {
    expect(katas6.encrypt("", 0)).toBe("");
    expect(katas6.decrypt("", 0)).toBe("");
    expect(katas6.encrypt(null, 0)).toBe(null);
    expect(katas6.decrypt(null, 0)).toBe(null);
})