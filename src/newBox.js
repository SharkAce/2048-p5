function newBox(){
  let i = 0
  while(true){
    i++
    let isEmpty = true
    var tile = random(tiles)
    for (data of boxList){
      if (tile[0] == data.x && tile[1] == data.y){
        isEmpty = false
      }
    }
    if (isEmpty == true) {break}
    else if (i == 4096) {
      failState = true
      break
    }
  }
  let num
  0.1 >= Math.random() ? num = 4 : num = 2
  boxList.push(new Box(tile[0], tile[1], num))
}