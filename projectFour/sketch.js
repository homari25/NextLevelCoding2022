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
let flowerChanger = document.getElementById("flowerChanger");

//flower
// let randomX = random(100,400);
// let randomY = random(100,400);


function setup() {
  createCanvas(400, 400);
  angleMode(RADIANS);
  rectMode(CENTER);
  h = height + 16;
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}

flowerChanger.oninput = function() {
  c1 = flowerChanger.value;
  c1.setAlpha(125);
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
  

  for (let i = count; i > 0; i--) {
  push();
  translate(100,180);
  fill(255);
  ellipse(0,0,90,90,20);
  rotate(TWO_PI/count/2 * i);
  drawFlower();
  pop();

  push();
  translate(200,60);
  rotate(TWO_PI/count/2 * i);   
  drawFlowerTwo();
  pop();
    
  push();
  translate(300,180);
  rotate(TWO_PI/count/2 * i);   
  drawFlowerThree();
  pop();
  
  push();
  translate(120,300);
  rotate(TWO_PI/count/2 * i);   
  drawFlowerFour();
  pop();

  push();
  translate(200,240);
  rotate(TWO_PI/count/2 * i);   
  drawFlowerFour();
  pop();
  
  push();
  translate(280,400);
  rotate(TWO_PI/count/2 * i);   
  drawFlowerFour();
  pop();
  }
  
  // console.log(c1);
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
  fill(c1);
  rect(0,0,2,100);
}

function drawFlowerTwo(){
  noStroke();
  // fill(0,255,0,50);
  // ellipse(0,0,190,190);
  fill(c1);
  rect(0,0,2,150);
}

function drawFlowerThree(){
  noStroke();
  fill(c1);
  rect(0,0,2,100);
  // fill(c1);
  // ellipse(0,0,90,90);
}

function drawFlowerFour(){
  noStroke();
  fill(c1);
  rect(0,0,2,100);
//   fill(0,255,0,70);
//   ellipse(0,0,90,90);
}

function drawFlowerFive(){
  noStroke();
  fill(c1);
  rect(0,0,2,200);
  // fill(0,255,0,70);
  // ellipse(0,0,90,90);
}

function drawFlowerSix(){
  noStroke();
  fill(c1);
  rect(0,0,2,100);
  // fill(0,255,0,70);
  // ellipse(0,0,90,90);
}

