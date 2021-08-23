class Box{
  constructor(x, y, num){
    this.xPx = x*(boxSize)
    this.yPx = y*(boxSize)
    this.x = x
    this.y = y
    this.num = num
    this.hasMerged = false
  }
  render(){
    if (this.num == 2){fill(230, 230, 225)}
    else if (this.num == 4){fill(230, 230, 200)}
    else if (this.num == 8){fill(232, 167, 110)}
    else if (this.num == 16){fill(240, 140, 90)}
    else if (this.num == 32){fill(245, 120, 100)}
    else if (this.num == 64){fill(255, 0, 0)}
    else if (this.num == 128){fill(240, 240, 50)}
    else if (this.num == 256){fill(240, 230, 45)}
    else if (this.num == 512){fill(240, 220, 40)}
    else if (this.num == 1024){fill(240, 210, 35)}
    else if (this.num == 2048){fill(240, 200, 30)}

    else{fill(0, 180, 0)}
    this.xPx = this.x*(boxSize)
    this.yPx = this.y*(boxSize)
    square(this.xPx+5,this.yPx+5, (boxSize)-10, 7)
    this.num > 10000 ? textSize(40) : textSize(55)
    textAlign(CENTER, CENTER)

    this.num >= 8 ? fill(255) : fill(0)
    text(this.num, this.xPx+(boxSize*0.5), this.yPx+(boxSize*0.55))
  }
}
