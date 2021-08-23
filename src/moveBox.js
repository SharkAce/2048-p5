//axis is either 'x' or 'y' and intSing, 1 or -1
function moveBox(axis, intSign){
  let i
  for (intSign == 1 ? i = 2 : i = 1;
  intSign == 1 ? i>=0 : i<=3;
  intSign == 1 ? i-- : i++){
    for (j = 0; j<grid; j++){
      for (box of boxList){
        if ((axis == 'x' ? box.x : box.y) == i){
          while((axis == 'x' ? box.x : box.y) != (intSign == 1 ? 3 : 0)){
            let collision = false
            for (data of boxList){
              if (axis == 'x' ? (box.x + intSign == data.x) && (box.y == data.y) :
              (box.y + intSign == data.y) && (box.x == data.x)){
                collision = true
                if (box.num == data.num && data.hasMerged == false){
                  boxList.splice(boxList.indexOf(box), 1)
                  data.num *= 2
                  data.hasMerged = true
                }
              }
            }
            if (collision == true) {break}
            axis == 'x' ? box.x += intSign : box.y += intSign
          }
        }
      }
    }
  }
}
