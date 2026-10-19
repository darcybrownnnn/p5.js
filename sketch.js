let beat;
let analyzer;

// purple/pink circle position and target
let sunX = 550;
let sunY = 50;
let targetX = 550;
let targetY = 50;

let wasLoud = false;      // was the last frame above the threshold?
let beatThreshold = 0.15; // lower = more sensitive, higher = only big hits

function preload() {
  // load the sound before the sketch starts
  beat = loadSound('beat.mp3');
}

function setup() {
  // Creates a canvas 600 pixels wide and 400 pixels high.
  let myCanvas = createCanvas(600, 400);
  // Only use this line if your page has an element with id="myContainer"
  // myCanvas.parent('myContainer');

  // listens to the volume of the beat
  analyzer = new p5.Amplitude();
  analyzer.setInput(beat);
}

function draw() {
  // sky blue background
  background(135, 206, 235);

  // current volume (root mean square amplitude)
  let rms = analyzer.getLevel();

  // detect a beat: volume crosses the threshold going up
  let isLoud = rms > beatThreshold;
  if (isLoud && !wasLoud) {
    // pick a new spot, keeping the circle on the canvas
    targetX = random(60, width - 60);
    targetY = random(60, height - 60);
  }
  wasLoud = isLoud;

  // glide smoothly toward the target
  sunX = lerp(sunX, targetX, 0.15);
  sunY = lerp(sunY, targetY, 0.15);

  // purple circle with large pink outline, size pulses with volume
  fill("purple");
  stroke("pink");
  strokeWeight(20);
  circle(sunX, sunY, 100 + rms * 150);

  // grey circle in the middle, size based on volume
  fill(127);
  stroke(0);
  strokeWeight(1);
  ellipse(width / 2, height / 2, 10 + rms * 200, 10 + rms * 200);
}

function mousePressed() {
  // click to start or stop the beat
  if (beat.isPlaying()) {
    beat.stop();
  } else {
    beat.loop();
  }
}
