let axis
let intSign

function action(){
  moveBox(axis, intSign)
  boxList = []
  for (box of newBoxList){
    boxList.push(new Box(box.x, box.y, box.num, box.hasMerged, box.isNew))
  }
  newBox()
}

function keyPressed(){
  if (failState == false){
    if (key == 'w' || key == 'ArrowUp'){
      axis = 'y'
      intSign = -1
      action()
    }
    else if (key == 'a' || key == 'ArrowLeft'){
      axis = 'x'
      intSign = -1
      action()
    }
    else if (key == 's' || key == 'ArrowDown'){
      axis = 'y'
      intSign = 1
      action()
    }
    else if (key == 'd' || key == 'ArrowRight'){
      axis = 'x'
      intSign = 1
      action()
    }
  }
}


//Touch screen implementation with hammerjs
function swiped(event){
  if (failState == false){
    switch(event.direction) {
      case 2:
        axis = 'x'
        intSign = -1
        action()
        break
      case 4:
        axis = 'x'
        intSign = 1
        action()
        break
      case 8:
        axis = 'y'
        intSign = -1
        action()
        break
      case 16:
        axis = 'y'
        intSign = 1
        action()
        break
    }
  }
}
