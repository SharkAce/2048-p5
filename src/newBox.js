function newBox(){
  let emptyTiles = []
  for (let y = 0; y<= 3; y++){
    for (let x = 0; x<= 3; x++){
      let isUnique = true
      for (box of boxList){
        //checking if the tile is empty
        if (box.x == x && box.y == y){isUnique = false}
      }
      //adding the empty tiles an array
      if (isUnique){emptyTiles.push([x,y])}
    }
  }
  let newBox = random(emptyTiles)
  //boxes have 10% chance of starting with a 4 and 90% of starting a 2
  let num; 0.1 >= Math.random() ? num = 4 : num = 2
  if (newBox == undefined) {
    failState = true
  }else{
    //adding the new box to the array of boxes
    boxList.push(new Box(newBox[0], newBox[1], num))
  }
}
