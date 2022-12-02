//counter
let count = 12;
let refresh = 6;
let softness = 2.5;
let countSlider = document.getElementById("countSlider");
let refreshSlider = document.getElementById("refreshSlider");

//color
let c1 = "rgb(255,125,0)"; //flower
let c2 = "rgb(125)" //background
let c3 = "rgb(255)" //middle flower
let changerElem = document.getElementById("backgroundChanger");
let flowerChanger = document.getElementById("flowerChanger");

let myFlowers = [];

//flower


// let petalSize = Math.random() * 400 - 100;
// let flowerSize = petalSize - 60;
// let petalSize = 80;
// let flowerSize = petalSize - 40;
// let sizeFlower;
let sizeFlower = Math.random()* 30 + 70;
let coreFlower = sizeFlower - 60;
let midFlower = sizeFlower - 30;
let spacing = 120;

function setup() {
  createCanvas(1000,windowHeight);
  angleMode(RADIANS);
  rectMode(CENTER);
  s = new Scribble;
  // frameRate(10);
}

// flowerChanger.oninput = function() {
//   c1 = flowerChanger.value;
//   c1.setAlpha(125);
// }

// changerElem.oninput = function() {
//   c2 = changerElem.value;
// }


function draw() {

  background(c2);
  // count = countSlider.value;
  // refresh = refreshSlider.value;
  // submit();
  

  // noLoop();

// for (let k = 0; k < 9; k++) {
  // flowerSize.push(Math.random(50,150));
  // petalSize[j] = flowerSize + 40;

//   for (let i = count; i > 0; i--) {
//   push();
//   translate(20,80);
//   rotate(TWO_PI/count * i);



drawBG();
noStroke();



  drawFlower(randomX, randomY);
  drawFlower(randomX4, randomY4);

  drawFlower(randomX5, randomY5);
  drawFlower(randomX12, randomY12);
  drawFlower(randomX7, randomY7);
  drawFlower(randomX15, randomY15);

  drawFlower(randomX20, randomY20);

  
if (refresh > 5) {
  drawFlower(randomX9, randomY9);
  drawFlower(randomX10, randomY10);
  drawFlower(randomX11, randomY11);
  drawFlower(randomX14, randomY14);

  drawFlower(randomX3, randomY3);

}

if (refresh > 7) {
  drawFlower(randomX13, randomY13);

  drawFlower(randomX6, randomY6);
  drawFlower(randomX16, randomY16);
  drawFlower(randomX8, randomY8);
}

if (refresh > 9) {
  drawFlower(randomX17, randomY17);
  drawFlower(randomX18, randomY18);
  drawFlower(randomX19, randomY19);
  drawFlower(randomX2, randomY2);
}





// }

//   fill(c1);
// //   ellipse(0,0,flowerSize*flowerSizeMultiplier[0],flowerSize*flowerSizeMultiplier[0]);
// //ellipse(0,0,flowerSize[j],flowerSize[j]);
//   pop();
// }
// }


}

function drawFlower(x,y){
  frameRate(5);
  // noStroke();
  for (let i = count; i > 0; i--) {
    push();
    translate(x,y);
    rotate(TWO_PI/count * i);
    baseFlower(0,0);
    // noStroke();
    // blendMode(OVERLAY);
    // noFill();
    // fill(c1);
    pop();
  }
  noStroke();
  fill(c3);
  s.scribbleEllipse(x,y,midFlower,midFlower);
  // noLoop();
    fill(c1);
    noStroke();
  s.scribbleEllipse(x,y,coreFlower,coreFlower);

  // rect(0,0,2,petalSize[0]);

  fill(c2);
  // blendMode(SCREEN);
}

function baseFlower(x,y){
  // let flowerSizeMultiplier = random(0.5, 1.5)
  let curveFlower = sizeFlower+ float(softness);
  blendMode(OVERLAY);
  stroke(c1);
  strokeWeight(softness * 1.5);
  s.scribbleLine(10,10,10,10);
  noFill();
  beginShape();
  vertex(-refresh,sizeFlower );
  vertex(x,y);
  vertex(refresh,sizeFlower);
  bezierVertex(refresh,sizeFlower,x,curveFlower, -refresh);
  // vertex(0,150);
  endShape();

  //   ellipse(0,0,flowerSize*flowerSizeMultiplier[0],flowerSize*flowerSizeMultiplier[0]);
  //ellipse(0,0,flowerSize[j],flowerSize[j]);
}

function drawBG () {

  stroke(c1);
  strokeWeight(1.5);
  for (let j = 0; j < windowWidth; j+=20) {
  s.scribbleLine(10 + j, 0, 10 + j, windowHeight );
}
}

// function onKeyDown(event) {
//   if (event.key === "s") {
//     downloadAsSVG();
//   }
// }

// function keyTyped() {
//   if (key === 's') {
//    window.save('lush', 'png');
//   }
// }