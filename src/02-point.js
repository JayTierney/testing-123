class Point {

  constructor (x, y) {
    this.x = x
    this.y = y
  }

  move(dx, dy) {
    this.x += dx
    this.y += dy
  }

  reflect () {
    [this.x, this.y] = [this.y, this.x]
  }

  stretch (k) {
    this.x *= k
    this.y *= k
  }
}


module.exports = { Point }