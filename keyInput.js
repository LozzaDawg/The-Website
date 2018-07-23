function keyInput(keyCode){
  if(keyCode == 72){
    console.log("pressed H");
    //selected left
  }
  if(keyCode == 74){
    console.log("pressed J");
    if(currentRow < allColumns[currentColumn].length-1) currentRow++;
    //selected down
  }
  if(keyCode == 75){
    console.log("pressed K");
      if(currentRow > 0) currentRow--;
    //selected up
  }
  if(keyCode == 76){
    console.log("pressed L");
    //selected right
  }
}

// document.body.addEventListener('keydown', function (e) {
//
// })

document.body.addEventListener('keyup', function (e) {
  keyInput(e.keyCode)
})
