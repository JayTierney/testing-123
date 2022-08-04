class Book {

  constructor (title, ISBN, author) {
    this.title = title
    this.ISBN = ISBN
    this.author = author
    this.isAvailable = true
    this.currentOwner = null
  }

}

class User {

  constructor (username, password) {
    this.username = username
    this.password = password
    this.books = []
  }

  updateUsername (newUsername, password) {
    if (password !== this.password) return
    this.username = newUsername
  }

  checkoutBook (book) {
    book.isAvailable = false
    book.currentOwner = this.username
    this.books.push(book)
  }

  returnBook (book) {
    book.isAvailable = true
    book.currentOwner = null
    this.books = this.books.filter(b => b.ISBN !== book.ISBN)
  }

}

module.exports = {Book}