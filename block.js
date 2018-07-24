class Block{

  constructor(x,y,width,height,color="black"){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.color=color;
    this.sublist=[];
    this.canRender=false;
    this.main = false;
  }

  render(){
    if(this.main==true) this.canRender=true;
    c.fillStyle = this.color;
    if(selectedBlock==this){
      c.fillStyle = "rgb(0, 147, 6)";
      for(var i = 0; i < this.sublist.length;i++){
        this.sublist[i].canRender=true;
      }
    }

    if(this.canRender) c.fillRect(this.x,this.y,this.width,this.height);
    this.canRender = false;
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
