var currentColumn = 0;
var currentRow = 0;

function keyInput(keyCode){
  if(keyCode == 72){
    if(selectedBlock.column>1){
      if(selectedBlock.column==2) op1 = null;
      if(selectedBlock.column==3) op2 = null;
      currentColumn--;
      currentRow=0;
      keyPressed("H");
    } else console.log("cant move left")
  }
  if(keyCode == 74){
    if(currentRow < allColumns[currentColumn].length-1){
      currentRow++;
      keyPressed("J");
    } else console.log("cant move down")
  }
  if(keyCode == 75){
    if(currentRow > 0){
      currentRow--;
      keyPressed("K");
    } else console.log("cant move up")
  }
  if(keyCode == 76){
    if(selectedBlock.sublist.length > 0){
      if(selectedBlock.column==1) op1 = selectedBlock;
      if(selectedBlock.column==2) op2 = selectedBlock;
      currentColumn++;
      currentRow=0;
      keyPressed("L");
    } else console.log("cant move right")
  }
}

function keyPressed(string){
  updateColumns(column1,column2,column3,allColumns);
  makeSelectedBlock(currentColumn,currentRow)
  update();
}

function makeSelectedBlock(column,row){
  selectedBlock = allColumns[column][row];
}

document.body.addEventListener('keyup', function (e) {
  keyInput(e.keyCode)
})
