class Block{

  constructor(size,column,row,color="black"){
    this.column=column;
    this.row=row;
    this.x=canvas.width/(size/((this.column*4)-2));
    this.y=canvas.height/(size/((this.row*3)-1));
    this.width=(canvas.width/size)*3;
    this.height=(canvas.height/size)*2;
    this.color=color;
    this.sublist=[];
    this.canRender=false;
  }

  render(){
    this.canRender=false
    if(this.column==1) this.canRender=true;
    //first row render
    for(var i = 0; i < allColumns[selectedBlock.column-1].length;i++){
      allColumns[selectedBlock.column-1][i].canRender=true;
    }
    //backrender
    if(op1!=null){
      for(var i = 0; i < op1.sublist.length;i++){
        op1.sublist[i].canRender=true;
      }
    }
    //forerender
    if(selectedBlock.sublist.length>0){
      for(var i = 0; i < selectedBlock.sublist.length;i++){
        selectedBlock.sublist[i].canRender=true;
      }
    }
    //Color
    c.fillStyle = this.color;
    if(selectedBlock==this) c.fillStyle = "rgb(0, 147, 6)";
    if(op1==this||op2==this) c.fillStyle = "rgb(23, 64, 145)";
    if(this.canRender) c.fillRect(this.x,this.y,this.width,this.height);
  }

}

class VisualBlock{

  constructor(x,y,width,height,color){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.color=color;
  }

  render(){
    c.fillStyle = this.color;
    c.fillRect(this.x,this.y,this.width,this.height);
  }

}
