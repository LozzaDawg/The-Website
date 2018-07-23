function keyInput(keyCode){
  if(keyCode == 72){
    console.log("pressed H");
    //selected left
  }
  if(keyCode == 74){
    console.log("pressed J");
    //selected down
  }
  if(keyCode == 75){
    console.log("pressed K");
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
