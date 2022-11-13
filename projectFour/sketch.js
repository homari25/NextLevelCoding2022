//counter
let count = 6;
let refresh = 6;
let countSlider = document.getElementById("countSlider");
let refreshSlider = document.getElementById("refreshSlider");

//background
let xspacing = 1; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 70.0; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave

//color
let c1 = "rgb(255,125,0)";
let c2 = "rgb(0,125,125)"
let changerElem = document.getElementById("backgroundChanger");


function setup() {
  createCanvas(400, 400);
  angleMode(RADIANS);
  rectMode(CENTER);
  h = height + 16;
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}

changerElem.oninput = function() {
  c2 = changerElem.value;
}


function draw() {
  background(c2);
  count = countSlider.value;
  refresh = refreshSlider.value;
  calcWave();
  renderWave();
  // renderWaveTwo();
  
  for (let i = count; i > 0; i--) {
  push();
  translate(70,180);
  rotate(TWO_PI/count/2 * i);
  drawFlower();
  pop();

  push();
  translate(220,120);
  rotate(TWO_PI/count/2 * i);   
  drawFlowerTwo();
  pop();
    
  push();
  translate(100,300);
  rotate(TWO_PI/count/2 * i);   
  drawFlowerThree();
  pop();
  
  push();
  translate(320,280);
  rotate(TWO_PI/count/2 * i);   
  drawFlowerFour();
  pop();

  push();
  translate(100,300);
  rotate(TWO_PI/count/2 * i);   
  drawFlowerFour();
  pop();
  
  push();
  translate(100,300);
  rotate(TWO_PI/count/2 * i);   
  drawFlowerFour();
  pop();
  }
  
  console.log(c1);
}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * refresh;
    x += dx;
  }
}

function renderWave() {
  noStroke();
  fill(255);
  for (let rows = 0; rows < 30; rows++) {
  // A simple way to draw the wave with an ellipse at each location
    for (let x = 0; x < yvalues.length; x++) {
    ellipse(height / 2 + yvalues[x] + 20 * rows - 300, x * xspacing, 1, 1);
    }
  }
}

function drawFlower(){
  noStroke();
  fill(0);
  rect(0,0,5,100,10);
  fill(0,255,0,20);
  ellipse(0,0,90,90,20);
}

function drawFlowerTwo(){
  noStroke();
  fill(0,255,0,50);
  ellipse(0,0,190,190);
  fill(0);
  rect(0,0,5,200,10);
}

function drawFlowerThree(){
  noStroke();
  fill(0);
  rect(0,0,5,100,10);
  fill(0,255,0,70);
  ellipse(0,0,90,90);
}

function drawFlowerFour(){
  noStroke();
  fill(0);
  rect(0,0,5,100,10);
  fill(0,255,0,70);
  ellipse(0,0,90,90);
}

function drawFlowerFive(){
  noStroke();
  fill(0);
  rect(0,0,5,100,10);
  fill(0,255,0,70);
  ellipse(0,0,90,90);
}

function drawFlowerSix(){
  noStroke();
  fill(0);
  rect(0,0,5,100,10);
  fill(0,255,0,70);
  ellipse(0,0,90,90);
}

