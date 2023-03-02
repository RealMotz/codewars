const kata = require("./4kyu");
let kyu4 = new kata.kata4();

test("Kata 4: Ex1 - should return the length of all intervals", () => {
    expect(kyu4.sumIntervals([[1,5]])).toBe(4);
    expect(kyu4.sumIntervals([[1,5],[6,10]])).toBe(8);
    expect(kyu4.sumIntervals([[1,5],[1,5]])).toBe(4);
    expect(kyu4.sumIntervals([[1,4],[7, 10],[3, 5]])).toBe(7);
    expect(kyu4.sumIntervals([[0, 20],[-100000000, 10],[30, 40]])).toBe(100000030);
    expect(kyu4.sumIntervals([[1, 5],[10, 20],[1, 6],[16, 19],[5, 11]])).toBe(19);
    expect(kyu4.sumIntervals([[-1e9, 1e9]])).toBe(2e9);
    expect(kyu4.sumIntervals([[0, 20],[-1e8, 10],[30, 40]])).toBe(1e8 + 30);
})