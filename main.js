var canvas = document.getElementById("canvas");
canvas.width=800;
canvas.height=600;
var c = canvas.getContext("2d");


var column1 = []
var column2 = []
var column3 = []

var size = 30;
//Double xPos
const mainBlock = new VisualBlock(canvas.width/size,canvas.height/size,canvas.width*(size-2)/size,canvas.height*(size-2)/size,"black");
const previewBlock = new VisualBlock(canvas.width/(size/size*2),((canvas.width/size)*0.4)+canvas.height/size,canvas.width/(size/size*2)-((canvas.width/size)*2),canvas.height*(size-2)/size-((canvas.width/size)*0.8),"rgb(110, 110, 110)");
const visColomn1 = new VisualBlock(((canvas.width/size)*0.5)+canvas.width/size+((canvas.width/size)*0),((canvas.width/size)*0.4)+canvas.height/size,(canvas.width/size)*4,canvas.height*(size-2)/size-((canvas.width/size)*0.8),"rgb(50, 50, 50)");
const visColomn2 = new VisualBlock(((canvas.width/size)*0.5)+canvas.width/size+((canvas.width/size)*4),((canvas.width/size)*0.4)+canvas.height/size,(canvas.width/size)*4,canvas.height*(size-2)/size-((canvas.width/size)*0.8),"rgb(60, 60, 60)");
const visColomn3 = new VisualBlock(((canvas.width/size)*0.5)+canvas.width/size+((canvas.width/size)*8),((canvas.width/size)*0.4)+canvas.height/size,(canvas.width/size)*4,canvas.height*(size-2)/size-((canvas.width/size)*0.8),"rgb(70, 70, 70)");

//COLUMN 1          //COLOMN 2          //COLOMN 3
const aboutMeBlock = new Block(canvas.width/(size/2),canvas.height/(size/2),(canvas.width/size)*3,(canvas.height/size)*2,"black");

const gamesBlock = new Block(canvas.width/(size/2),canvas.height/(size/5),(canvas.width/size)*3,(canvas.height/size)*2,"black");
  const gamesBlock1 = new Block(canvas.width/(size/6),canvas.height/(size/2),(canvas.width/size)*3,(canvas.height/size)*2,"black");
    const gamesBlock11 = new Block(canvas.width/(size/10),canvas.height/(size/2),(canvas.width/size)*3,(canvas.height/size)*2,"black");
    gamesBlock1.sublist.push(gamesBlock11);
  const gamesBlock2 = new Block(canvas.width/(size/6),canvas.height/(size/5),(canvas.width/size)*3,(canvas.height/size)*2,"black");
  gamesBlock.sublist.push(gamesBlock1,gamesBlock2);

const archBlock = new Block(canvas.width/(size/2),canvas.height/(size/8),(canvas.width/size)*3,(canvas.height/size)*2,"black");

aboutMeBlock.canRender=true;
gamesBlock.canRender=true;
archBlock.canRender=true;
//column3.push()

//gamesBlock.sublist.push(gamesBlock1);
//gamesBlock.sublist[0].color="blue";

// const aboutMeBlock  = new Block(canvas.width/(size/2),canvas.height/(size/2),(canvas.width/size)*3,(canvas.height/size)*2,"black");
// const gamesBlock    = new Block(canvas.width/(size/2),canvas.height/(size/5),(canvas.width/size)*3,(canvas.height/size)*2,"black");
// const archBlock     = new Block(canvas.width/(size/2),canvas.height/(size/8),(canvas.width/size)*3,(canvas.height/size)*2,"black");
//
// //COLUMN 2
// const gamesBlock1 = new Block(canvas.width/(size/6),canvas.height/(size/2),(canvas.width/size)*3,(canvas.height/size)*2,"black");
// const gamesBlock2 = new Block(canvas.width/(size/6),canvas.height/(size/5),(canvas.width/size)*3,(canvas.height/size)*2,"black");
// const gamesBlock3 = new Block(canvas.width/(size/6),canvas.height/(size/8),(canvas.width/size)*3,(canvas.height/size)*2,"black");
//
// //COLUMN 3
// const gamesBlock11 = new Block(canvas.width/(size/10),canvas.height/(size/2),(canvas.width/size)*3,(canvas.height/size)*2,"black");
// const gamesBlock12 = new Block(canvas.width/(size/10),canvas.height/(size/5),(canvas.width/size)*3,(canvas.height/size)*2,"black");
// const gamesBlock13 = new Block(canvas.width/(size/10),canvas.height/(size/8),(canvas.width/size)*3,(canvas.height/size)*2,"black");

var selectedBlock = gamesBlock;


column1.push(aboutMeBlock,gamesBlock,archBlock);
// for(var i = 0; i < selectedBlock.sublist.length;i++){
//   column2.push(selectedBlock.sublist[i]);
// }

//get 1st column movement, then start to render 2nd column, then get cross coulmn movement

function update(){
  c.clearRect(0,0,canvas.width,canvas.height);
  c.fillStyle = "rgb(220, 0, 255)"
  c.fillRect(0,0,canvas.width,canvas.height);

  mainBlock.render();
  previewBlock.render();

  visColomn1.render();
  visColomn2.render();
  visColomn3.render();

  aboutMeBlock.render();
  gamesBlock.render();
  archBlock.render();

  gamesBlock1.render();
  gamesBlock2.render();
  // gamesBlock3.render();

  gamesBlock11.render();
  // gamesBlock12.render();
  // gamesBlock13.render();

  keyInput();
  console.log("Updated");
}

this.setInterval(update, 60);
//update();
