function keyPressed(){

  if (failState == false){
    if (key == 'w' || key == 'ArrowUp'){
      moveBox('y', -1)
      newBox()
    }
    else if (key == 'a' || key == 'ArrowLeft'){
      moveBox('x', -1)
      newBox()
    }
    else if (key == 's' || key == 'ArrowDown'){
      moveBox('y', 1)
      newBox()
    }
    else if (key == 'd' || key == 'ArrowRight'){
      moveBox('x', 1)
      newBox()
    }
  }
}



function swiped(event){
  switch(event.direction) {
    case 2:
      moveBox('x', -1)
      newBox()
      break
    case 4:
      moveBox('x', 1)
      newBox()
      break
    case 8:
      moveBox('y', -1)
      newBox()
      break
    case 16:
      moveBox('y', 1)
      newBox()
  }
}
