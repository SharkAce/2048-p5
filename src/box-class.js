class Box{
  constructor(x, y, num){
    this.xPx = x*(boxSize)
    this.yPx = y*(boxSize)
    this.x = x
    this.y = y
    this.num = num
    this.hasMerged = false
    this.isStatic = true
  }
  render(){
    if (this.isStatic) {
      tileColor(this.num)
      this.xPx = this.x*(boxSize)
      this.yPx = this.y*(boxSize)
      square(this.xPx+5,this.yPx+5, (boxSize)-10, 7)
      this.num > 10000 ? textSize(40) : textSize(55)
      textAlign(CENTER, CENTER)

      this.num >= 8 ? fill(255) : fill(0)
      text(this.num, this.xPx+(boxSize*0.5), this.yPx+(boxSize*0.55))
    }  
  }
  tilePop(frame){
    this.xPx = this.x*(boxSize)
    this.yPx = this.y*(boxSize)
    if (frame >= 20){
      this.isStatic = true
    }
    this.isStatic = false
    tileColor(this.num)
    circle(50,50,50)
  }
}
