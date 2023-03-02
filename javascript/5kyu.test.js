const kata = require("./5kyu");
let kyu5 = new kata.kata5();

test("Kata 5: Ex1 - should return the first non repeating letter", () => {
    expect(kyu5.firstNonRepeatingLetter("a")).toBe("a");
    expect(kyu5.firstNonRepeatingLetter("stress")).toBe("t");
    expect(kyu5.firstNonRepeatingLetter("moonmen")).toBe("e");
    expect(kyu5.firstNonRepeatingLetter("sTreSS")).toBe("T");
})

test("Kata 5: Ex2 - should return -1 when there are no winners", () => {
    expect(kyu5.tickTackToeChecker(
        [[0,0,1],
        [0,1,2],
        [2,1,0]]
    )).toBe(-1);
})

test("Kata 5: Ex2 - should return 1 when 'X' wins", () => {
    expect(kyu5.tickTackToeChecker(
        [[0,0,1],
        [0,1,2],
        [1,2,0]]
    )).toBe(1);
})

test("Kata 5: Ex2 - should return 2 when 'O' wins", () => {
    expect(kyu5.tickTackToeChecker(
        [[0,2,1],
        [1,2,0],
        [0,2,1]]
    )).toBe(2);
})

test("Kata 5: Ex2 - should return 0 when its a draw", () => {
    expect(kyu5.tickTackToeChecker(
        [[1,2,1],
        [1,2,2],
        [2,1,1]]
    )).toBe(0);
})

test("Kata 5: Ex3 - should return a bool when parentheses", () => {
    expect(kyu5.validParentheses("(")).toBe(false);
    expect(kyu5.validParentheses(")")).toBe(false);
    expect(kyu5.validParentheses("")).toBe(true);
    expect(kyu5.validParentheses("()")).toBe(true);
    expect(kyu5.validParentheses("())")).toBe(false);
    expect(kyu5.validParentheses(")(()))")).toBe(false);
    expect(kyu5.validParentheses("(())((()())())")).toBe(true);
    expect(kyu5.validParentheses(")()()()(")).toBe(false);
    expect(kyu5.validParentheses("())(")).toBe(false);
})