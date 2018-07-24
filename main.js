var canvas = document.getElementById("canvas");
canvas.width=800;
canvas.height=600;
var c = canvas.getContext("2d");

var size = 30;

//VisualBlocks
const mainBlock = new VisualBlock(canvas.width/size,canvas.height/size,canvas.width*(size-2)/size,canvas.height*(size-2)/size,"black");
const previewBlock = new VisualBlock(canvas.width/(size/size*2),((canvas.width/size)*0.4)+canvas.height/size,canvas.width/(size/size*2)-((canvas.width/size)*2),canvas.height*(size-2)/size-((canvas.width/size)*0.8),"rgb(110, 110, 110)");
const visColomn1 = new VisualBlock(((canvas.width/size)*0.5)+canvas.width/size+((canvas.width/size)*0),((canvas.width/size)*0.4)+canvas.height/size,(canvas.width/size)*4,canvas.height*(size-2)/size-((canvas.width/size)*0.8),"rgb(50, 50, 50)");
const visColomn2 = new VisualBlock(((canvas.width/size)*0.5)+canvas.width/size+((canvas.width/size)*4),((canvas.width/size)*0.4)+canvas.height/size,(canvas.width/size)*4,canvas.height*(size-2)/size-((canvas.width/size)*0.8),"rgb(60, 60, 60)");
const visColomn3 = new VisualBlock(((canvas.width/size)*0.5)+canvas.width/size+((canvas.width/size)*8),((canvas.width/size)*0.4)+canvas.height/size,(canvas.width/size)*4,canvas.height*(size-2)/size-((canvas.width/size)*0.8),"rgb(70, 70, 70)");

//ActiveBlocks
const aboutMeBlock = new Block(size,1,1,"black");

const gamesBlock = new Block(size,1,2,"black");
  const gamesBlock1 = new Block(size,2,1,"black");
    const gamesBlock11 = new Block(size,3,1,"black");
    gamesBlock1.sublist.push(gamesBlock11);
  const gamesBlock2 = new Block(size,2,2,"black");
  gamesBlock.sublist.push(gamesBlock1,gamesBlock2);

const archBlock = new Block(size,1,3,"black");
  const archBlock1 = new Block(size,2,1,"red");
  archBlock.sublist.push(archBlock1);

var column1 = [];
var column2 = [];
var column3 = [];
var allColumns = [];

var op1;
var op2;

var selectedBlock = aboutMeBlock;

function updateColumns(Tcolumn1,Tcolumn2,Tcolumn3,TallColumns){

  for(var i = 0; i < TallColumns.length; i++){
    TallColumns.splice(i)
  }
  for(var i = 0; i < Tcolumn1.length; i++){
    Tcolumn1.splice(i)
  }
  for(var i = 0; i < Tcolumn2.length; i++){
    Tcolumn2.splice(i)
  }
  for(var i = 0; i < Tcolumn3.length; i++){
    Tcolumn3.splice(i)
  }
  Tcolumn1.push(aboutMeBlock,gamesBlock,archBlock);
  if(op1!=null && op1.sublist.length > 0 && op1.column==1){
    for(var i = 0; i < op1.sublist.length; i++){
      Tcolumn2.push(op1.sublist[i]);
    }
  }
  if(op2!=null && op2.sublist.length > 0 && op2.column==2){
    for(var i = 0; i < op2.sublist.length; i++){
      Tcolumn3.push(op2.sublist[i]);
    }
  }
  allColumns[0]
  TallColumns.push(column1,column2,column3);
}

function update(){
  c.clearRect(0,0,canvas.width,canvas.height);
  c.fillStyle = "rgb(220, 0, 255)"
  c.fillRect(0,0,canvas.width,canvas.height);

  keyInput();

  //Visual Blocks
  mainBlock.render();
  previewBlock.render();
  visColomn1.render();
  visColomn2.render();
  visColomn3.render();

  //Active Blocks
  aboutMeBlock.render();

  gamesBlock.render();
    gamesBlock1.render();
      gamesBlock11.render();
    gamesBlock2.render();

  archBlock.render();
    archBlock1.render();
}

updateColumns(column1,column2,column3,allColumns);
update();
