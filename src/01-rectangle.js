class Rectangle {

  constructor (width, height) {
    this.width = width
    this.height = height
  }

  area () {
    return this.height * this.width
  }

  perimeter () {
    return 2 * (this.height + this.width)
  }

}

module.exports = { Rectangle }