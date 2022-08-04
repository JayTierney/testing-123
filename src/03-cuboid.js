class Cuboid {

  constructor (width, height, depth) {
    this.width = width
    this.height = height
    this.depth = depth
    this.colour = 'blue'
  }

  volume () {
    return this.width * this.height * this.depth
  }

  paint (colour) {
    this.colour = colour
  }

}

module.exports = { Cuboid }