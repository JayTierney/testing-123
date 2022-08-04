const { Point } = require("../src/02-point")

describe("The point class", () => {
    test("should assign x and y correctly", () => {
        const p2 = new Point(5, 9)
        expect(p2.x).toBe(5)
        expect(p2.y).toBe(9)
    });

    test("should add x to dx and y to dy", () => {
        const p2 = new Point(5, 9)
        p2.move(5, 9)
        expect(p2).toEqual({x:10, y:18})
    });

    test("should reverse x and y", () => {
        const p2 = new Point(5, 9)
        p2.reflect(9, 5)
        expect(p2).toEqual({x:9, y:5})
    });

    test("should multiply x by k and y by k", () => {
        const p2 = new Point(5, 9)
        p2.stretch(2)
        expect(p2.x).toBe(10)
        expect(p2.y).toBe(18)
    })
})