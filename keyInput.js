function keyInput(keyCode){
  if(keyCode == 72){
    currentColumn--;
    keyPressed("H");
  }
  if(keyCode == 74){
    if(currentRow < allColumns[currentColumn].length-1) currentRow++;
    keyPressed("J");
  }
  if(keyCode == 75){
      if(currentRow > 0) currentRow--;
      keyPressed("K");
  }
  if(keyCode == 76){
    currentColumn++;
    keyPressed("L");
  }
}

function keyPressed(string){
  updateColumns();
  update();
  console.log("Pressed : " +string);
}

// document.body.addEventListener('keydown', function (e) {
//
// })

document.body.addEventListener('keyup', function (e) {
  keyInput(e.keyCode)
})
