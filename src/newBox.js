function newBox(){
  let emptyTiles = []
  for (let y = 0; y<= 3; y++){
    for (let x = 0; x<= 3; x++){
      let isUnique = true
      for (box of boxList){
        if (box.x == x && box.y == y){isUnique = false}
      }
      if (isUnique){emptyTiles.push([x,y])}
    }
  }
  let newBox = random(emptyTiles)
  let num; 0.1 >= Math.random() ? num = 4 : num = 2
  if (newBox == undefined) {
    failState = true
  }else{
    boxList.push(new Box(newBox[0], newBox[1], num))
  }
}
