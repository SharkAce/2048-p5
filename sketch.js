var msg = "swipe"
let failState = false
let boxList = []
let tiles = []
for (let y = 0; y<= 3; y++){
  for (let x = 0; x<= 3; x++){
    tiles.push([x, y])
  }
}
function setup () {
  createCanvas(length, height)
  var options = {
    preventDefault: true
  }
  var hammer = new Hammer(document.body, options)
  hammer.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
  })
  hammer.on("swipe", swiped)
}

function draw () {
  noStroke()
  if (boxList.length == 17) {failState = true}
  background(100)


  for (data of tiles){
    fill(150)
    square(data[0]*boxSize+5, data[1]*boxSize+5, (boxSize)-10, 7)
  }


  for (box of boxList){
    if (box.isStatic) {box.render()}

    if (box.hasMerged || box.isNewBox){
      box.popFrame = 1
      box.hasMerged = false
      box.isNewBox = false
    }
    if (box.popFrame >= 1 && box.popFrame < 10){  //&& moveAnimation == false
      box.tilePop(box.popFrame)
      box.popFrame ++
    }
  }
}
keyPressed()
swiped(event)
