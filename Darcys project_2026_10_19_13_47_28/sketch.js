let beat;
// Load sound file before canvas loads so it is ready
function preload() {
  beat = loadSound('beat.mp3');
}

function setup() {
  // Creates a canvas 560 pixels wide
   // and 360 pixels high.
  createCanvas(560, 360);
  
}

function draw() {
  createCanvas(600, 400);

  //sky blue background
  background(135, 206, 235);
  //sun in top right
  fill("purple"); //purple

  stroke("pink"); //pink outline 

  strokeWeight(20); //large outline    

  circle(550, 50, 100);
}


