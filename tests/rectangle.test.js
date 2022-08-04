const { Rectangle } = require('../src/01-rectangle')

describe("The rectangle class", () => {
    test("Should assign height and width correctly", () => {
        const r1 = new Rectangle(5, 11)
        expect(r1.width).toBe(5)
        expect(r1.height).toBe(11)
    })

    test("Should calculate area correctly", () => {
        const r1 = new Rectangle(5, 11)
        expect(r1.area()).toBe(55)
    })

    test("Should calculate permimeter correctly", () => {
        const r1 = new Rectangle(5, 11)
        expect(r1.perimeter()).toBe(32)
    })
})