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


  for (box of boxList)
  box.render()
}
function keyPressed(){
  if (failState == false){
    if (key == 'w'){
      moveBox('y', -1)
      newBox()
    }
    if (key == 'a'){
      moveBox('x', -1)
      newBox()
    }
    if (key == 's'){
      moveBox('y', 1)
      newBox()
    }
    if (key == 'd'){
      moveBox('x', 1)
      newBox()
    }
  }
  for (box of boxList){
    box.hasMerged = false
  }
}
function swiped(event) {
  console.log(event);
  if (event.direction == 4) {
    moveBox('x', 1)
    newBox()
  } else if (event.direction == 8) {
    moveBox('y', -1)
    newBox()
  } else if (event.direction == 16) {
    moveBox('y', 1)
    newBox()
  } else if (event.direction == 2) {
    moveBox('x', -1)
    newBox()
  }
  for (box of boxList){
    box.hasMerged = false
  }
}