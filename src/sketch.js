import tokens from './tokens'

const sketch = (p) => {
  let xoff = 0
  let xincrement = 0.001

  let height
  let width

  p.setup = () => {
    height = p.windowHeight
    width = p.windowWidth
    p.createCanvas(width, height)
    p.pixelDensity(1)
    p.background(tokens.color1)
    p.noStroke()
  }

  p.draw = () => {
    p.loadPixels()
    // p.background(tokens.color1)
    // p.stroke(50)
    // p.noFill()
    // p.beginShape()
    for(var x=0; x < width; x++) {
      for(var y=0; y < height; y++) {
        const index = (x+y*width) * 4
        const r = p.random(255)
        p.pixels[index+0] = r
      }
    }
    // p.endShape();
    p.updatePixels();
  }

  //p.windowResized = () => {
  //  p.clear()
  //  p.resizeCanvas(p.windowwidth, p.windowheight)
  //  p.draw()
  //}
}

export default sketch
