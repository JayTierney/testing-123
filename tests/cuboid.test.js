const { Cuboid } = require("../src/03-cuboid")  

describe("the cuboid class", () => {
    test('should assign all values correctly', () => {
        const c2 = new Cuboid(3, 5, 9)
        expect(c2.width).toBe(3)
        expect(c2.height).toBe(5)
        expect(c2.depth).toBe(9)
        expect(c2.colour).toBe('blue')
    })

    test("should return the volume of cuboid", () => {
        const c2 = new Cuboid(3, 5, 9)
        expect(c2.volume()).toBe(135)
    })

    test("colour should be the same as colour value", () => {
        const c2 = new Cuboid(3, 5, 9, 'blue')
        expect(c2.colour).toBe('blue')
    })
})