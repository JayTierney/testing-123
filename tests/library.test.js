const {Book, User} = require("../src/04-library")

describe("the Book class", () => {
    test("should accept title, ISBN and auther values", () =>{
        const b2 = new Book("IT", 57, "Stephen King")
        expect(b2.title).toBe("IT")
        expect(b2.ISBN).toBe(57)
        expect(b2.author).toBe("Stephen King")
        expect(b2.isAvailable).toBe(true)
        expect(b2.currentOwner).toBe(null)
    })

describe("the user class", () => {
    test("Should display username and password", () => {
        const u2 = new User("James", "Password")
        expect(u2.username).toBe("James")
        expect(u2.password).toBe("Password")
        })
    })

    test("username should be updated", () => {
        const u2 = new User("James", "Password")
        u2.updateUsername("John", "Password")
        expect(u2.username).toBe("John")
        expect(u2.password).toBe("Password")
    })

    test("change isAvailable value", () => {
        const u2 = new User("James", "Password")
        const b2 = new Book("IT", 57, "Stephen King")
        u2.checkoutBook(b2)
        expect(b2.isAvailable).toBe(false)
        expect(b2.currentOwner).toBe(u2.username)
        expect(u2.books.includes(b2)).toBe(true)
    })

    test("book to be returned", () => {
        const u2 = new User("James", "Password")
        const b2 = new Book("IT", 57, "Stephen King")
        u2.returnBook(b2)
        expect(b2.isAvailable).toBe(true)
        expect(b2.currentOwner).toBe(null)
        expect(u2.books.includes(b2)).toBe(false)
    })
})