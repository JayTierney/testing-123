const { default: test } = require('node:test')
const {Book} = require('../src/04-library')

describe("the Book class", () => {
    test("should accept title, ISBN and auther values", () =>{
        const b2 = new Book("IT", 57, "Stephen King")
        expect(b2.title).toBe("IT")
        expect(b2.ISBN).toBe(57)
        expect(b2.author).toBe("Stephen King")
        expect(b2.isAvailable).toBe(true)
        expect(b2.currentOwner).toBe(null)
    })

    test()
})