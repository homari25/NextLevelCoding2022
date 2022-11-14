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
// let offset = Math.random() / 100;
//color
let c1 = "rgb(255,125,0)";
let c2 = "rgb(0,125,125)"
let changerElem = document.getElementById("backgroundChanger");
let flowerChanger = document.getElementById("flowerChanger");

//flower
// let randomX = random(100,400);
// let randomY = random(100,400);
let petalSize = 100;
let flowerSize = petalSize - 40;

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

let sheetID = "1BrindtQ8AOFVsbQWs8wH3W0S814nRVrnJRSnytv4ct0";
let tabName = 'Sheet1'

let opensheet_url = `https://opensheet.elk.sh/${sheetID}/${tabName}`

let dataArr = [];
let lushname = ["Outback Mate","Karma","Sleepy","Honey I washed the kids","Christmas Cranberry","Bohemian","Sandstone","Sea Vegetable","Baked Alaska","Snow Fairy","Lemon Zest","Golden Pear","Ro's Argan","Olive Tree","Goddess",""]

let soapNameInput = document.getElementById("soapName")


console.log(opensheet_url);

function submit () {

let soapName = soapNameInput.value;
fetch(opensheet_url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (let datapoint of data) {
        let sweetness = parseFloat(datapoint.Sweetness);
        let items = datapoint.Item;
        
        dataArr.push([items,sweetness])
        for (let i = 0; i < lushname.length; i++) {
            // if(item[itemNum] == lushname[itemNum]) {
        if(soapNameInput.value == items) {
        let count = map(sweetness,1,10,10,60);
        console.log(items,sweetness,count);
				//do something with the data here
                // }
            }
        }
        }
    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });
}

function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}


function draw() {
  background(c2);
  // count = countSlider.value;
  refresh = refreshSlider.value;
  calcWave();
  renderWave();
  submit();

// for (let j = 0; j < 9; j++) {
//   let flowerSize = [];
//   let petalSize = [];
//   flowerSize.push(Math.random(50,150));
//   petalSize[j] = flowerSize + 40;
  
  for (let i = count; i > 0; i--) {
  push();
  translate(80,40);
  rotate(TWO_PI/count * i);
  drawFlower();
  fill(c1);
  ellipse(0,0,flowerSize,flowerSize);
//ellipse(0,0,flowerSize[j],flowerSize[j]);
  pop();

  push();
  translate(200,60);
  rotate(TWO_PI/count * i);   
  drawFlowerTwo();
  fill(c1);
  ellipse(0,0,flowerSize,flowerSize);
//ellipse(0,0,flowerSize[j],flowerSize[j]);
  pop();
    
  push();
  translate(330,180);
  rotate(TWO_PI/count * i);   
  drawFlowerThree();
  fill(c1);
  ellipse(0,0,flowerSize,flowerSize);
//ellipse(0,0,flowerSize[j],flowerSize[j]);
  pop();
  
  push();
  translate(80,240);
  rotate(TWO_PI/count * i);   
  drawFlowerFour();
  fill(c1);
  ellipse(0,0,flowerSize,flowerSize);
//ellipse(0,0,flowerSize[j],flowerSize[j]);
  pop();

  push();
  translate(200,240);
  rotate(TWO_PI/count * i);   
  drawFlowerFive();
  fill(c1);
  ellipse(0,0,flowerSize,flowerSize);
//ellipse(0,0,flowerSize[j],flowerSize[j]);
  pop();
  
  push();
  translate(280,350);
  rotate(TWO_PI/count * i);   
  drawFlowerSix();
  fill(c1);
  ellipse(0,0,flowerSize,flowerSize);
//ellipse(0,0,flowerSize[j],flowerSize[j]);
  pop();

  push();
  translate(80,300);
  rotate(TWO_PI/count * i);   
  drawFlowerSeven();
  fill(c1);
  ellipse(0,0,flowerSize,flowerSize);
//ellipse(0,0,flowerSize[j],flowerSize[j]);
  pop();

  push();
  translate(120,180);
  rotate(TWO_PI/count * i);   
  drawFlowerEight();
  fill(c1);
  ellipse(0,0,flowerSize,flowerSize);
//ellipse(0,0,flowerSize[j],flowerSize[j]);
  pop();

  push();
  translate(250,360);
  rotate(TWO_PI/count * i);   
  drawFlowerNine();
  fill(c1);
  ellipse(0,0,flowerSize,flowerSize);
//ellipse(0,0,flowerSize[j],flowerSize[j]);
  pop();

  // }
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
    // yvalues[i] = sin(x) * refresh * offset;
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
    ellipse(height / 2 + yvalues[x] + 20 * rows - 300, x * xspacing, 3, 3);
    }
  }
}

function drawFlower(){
  noStroke();
  fill(255);
  rect(0,0,2,petalSize);
  // rect(0,0,2,petalSize[0]);
}

function drawFlowerTwo(){
  noStroke();
  // fill(0,255,0,50);
  // ellipse(0,0,190,190);
  fill(255);
  rect(0,0,2,petalSize);
  // rect(0,0,2,petalSize[1]);
}

function drawFlowerThree(){
  noStroke();
  fill(255);
  rect(0,0,2,petalSize);
  // rect(0,0,2,petalSize[2]);
  // fill(c1);
  // ellipse(0,0,90,90);
}

function drawFlowerFour(){
  noStroke();
  fill(255);
  rect(0,0,2,petalSize);
  // rect(0,0,2,petalSize[3]);
//   fill(0,255,0,70);
//   ellipse(0,0,90,90);
}

function drawFlowerFive(){
  noStroke();
  fill(255);
  rect(0,0,2,petalSize);
  // rect(0,0,2,petalSize[4]);
  // fill(0,255,0,70);
  // ellipse(0,0,90,90);
}

function drawFlowerSix(){
  noStroke();
  fill(255);
  rect(0,0,2,petalSize);
  // rect(0,0,2,petalSize[5]);
  // fill(0,255,0,70);
  // ellipse(0,0,90,90);
}

function drawFlowerSeven(){
  noStroke();
  fill(255);
  rect(0,0,2,petalSize);
  // rect(0,0,2,petalSize[6]);
  // fill(0,255,0,70);
  // ellipse(0,0,90,90);
}

function drawFlowerEight(){
  noStroke();
  fill(255);
  rect(0,0,2,petalSize);
  // rect(0,0,2,petalSize[7]);
  // fill(0,255,0,70);
  // ellipse(0,0,90,90);
}

function drawFlowerNine(){
  noStroke();
  fill(255);
  rect(0,0,2,petalSize);
  // rect(0,0,2,petalSize[8]);
  // fill(0,255,0,70);
  // ellipse(0,0,90,90);
}

