let beat;
let analyzer;

function preload() {
  beat = loadSound('beat.mp3');
}

function setup() {
  let myCanvas = createCanvas(600, 400);
  // Only keep this line if your page has an element with id="myContainer"
  // myCanvas.parent('myContainer');

  analyzer = new p5.Amplitude();
  analyzer.setInput(beat);
}

function draw() {
  // sky blue background
  background(135, 206, 235);

  // sun in top right
  fill("purple");
  stroke("pink");
  strokeWeight(20);
  circle(550, 50, 100);

  // circle that pulses with the music's volume
  let rms = analyzer.getLevel();
  fill(127);
  stroke(0);
  strokeWeight(1);
  ellipse(width / 2, height / 2, 10 + rms * 200, 10 + rms * 200);
}

function mousePressed() {
  if (beat.isPlaying()) {
    beat.stop();
  } else {
    beat.loop();
  }
}
