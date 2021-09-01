//seting global variables
var msg = "swipe"
let failState = false
let boxList = []
let newBoxList = []

function setup () {
  newBox();newBox()
  createCanvas(length, height)
  var options = {
    preventDefault: true
  }
  //setting up touch screen support with hammerjs
  var hammer = new Hammer(document.body, options)
  hammer.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
  })
  hammer.on("swipe", swiped)
}

function draw () {
  noStroke()
  background(100)

  //drawing empty tiles
  for (let y = 0; y<= 3; y++){
    for (let x = 0; x<= 3; x++){
      fill(150)
      square(x*boxSize+5, y*boxSize+5, (boxSize)-10, 7)
    }
  }

  //rendering every box
  for (box of boxList){
    if (box.isStatic) {box.render()}

    if (box.hasMerged || box.isNew){
      box.popFrame = 1
      box.hasMerged = false
      box.isNew = false
    }
    if (box.popFrame >= 1 && box.popFrame < 10){
      box.tilePop(box.popFrame)
      box.popFrame ++
    }
  }
  if (failState){
    textSize(70)
    textAlign(CENTER, CENTER)
    text('You lost', length/2, height/2)
  }
}
keyPressed()
swiped(event)
