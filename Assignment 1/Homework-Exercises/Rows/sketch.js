//DAT405 / GAD405
//for P5.js projects

let size = 50;

//initialising function
function setup() {
  //create canvas
  createCanvas(500, 500);
  //noloop();
}

function draw() {
  //set background colour
  fill (215, 200, 170);
  for (let x = 0; x < 10; x++){
    //top row
    rect(size*x, height/100, size, size);
    //middle row
    rect(size*x, 450, size, size);
    //bottom row
    rect(size*x, 225, size, size);

  }
}
