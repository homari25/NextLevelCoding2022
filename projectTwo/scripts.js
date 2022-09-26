let forbiddenCity,statueOfLiberty, backGround;
let pixelLevel = 3;
let pixelLevelTwo = 3;
let inc = 0.02;
let incTwo = 0.02;
let noiseScale = 0.2;
let n = 0.15;
let d = 0.5;

function preload(){
  backGround = loadImage("bg.png");
  forbiddenCity = loadImage("forbiddencity.png");
  statueOfLiberty = loadImage("statueofliberty.png");
}

function setup() {
  createCanvas(1200,1200);
  angleMode(DEGREES);
  // background(0);
  frameRate(120);
}

function draw(){
 pixelDensity(1);
 // drawbg();
  drawStatueOfLiberty();
 drawForbiddenCity();

}

// function drawbg() {
//   image(backGround,0,0,800,800);
//  loadPixels();
//   for (let y = 0; y < height; y+=pixelLevel) {
//     let xoff = 0;
//     for (let x = 0; x <  width; x+=pixelLevel) {
//     let k = (x + y * width) * 4
//     let randomValue = random(250,255);
// //  let n = noise(xoff,yoff) * 255;
//     let blueValue = random(100,150);
//     let r = 255 - pixels[k] ;
//     let g = 200 - pixels[k + 1] ;
//     let b = 150- pixels[k + 2] ;
//     let a = pixels[k + 3] ;
//     stroke();
//      // // triangle(x-pixelLevel,y-10,x,y,x+10,y+10);
//     // ellipse(x, y , pixelLevel);
//       }
//       }
  
  
// }


function drawStatueOfLiberty(){
  let yoff = 0;
 image(statueOfLiberty,width/2, 200,450,500);
 loadPixels();
  for (let y = 0; y < height; y+=pixelLevel) {
    let xoff = 0;
    for (let x = 0; x <  width; x+=pixelLevel) {
    let i = (x + y * width) * 4
    let randomValue = random(250,255);
//  let n = noise(xoff,yoff) * 255;
    let blueValue = random(100,150);
    let r = pixels[i]  - blueValue ;
    let g = pixels[i + 1] ;
    let b = pixels[i + 2] = randomValue;
    let a = pixels[i + 3] ;
    fill(r,g,b,a);
     // // triangle(x-pixelLevel,y-10,x,y,x+10,y+10);
     ellipse(x, y , pixelLevel);
      }
      noStroke();
            xoff +=inc;
      }
    yoff+=inc;
}

function drawForbiddenCity(){
    let yoffTwo = 0;
  image(forbiddenCity,0,0,640,360);
    loadPixels();
  for (let y = 0; y < forbiddenCity.height; y+=pixelLevelTwo) {
    let xoffTwo = 0;
 
    for (let x = 0; x < forbiddenCity.width; x+=pixelLevelTwo) {
      let j = (x + y * width) * 4
    //  let randomValueTwo = random(200,250);
     // let n = noise(xoffTwo,yoffTwo) * 255;
      let redValue = random(100,150);
      let r = pixels[j + 0] = redValue;
      let g = pixels[j + 1];
      let b = pixels[j + 2]  ;
      let a = pixels[j + 3] ;
      fill(r, 0, 0, a);
     // // triangle(x-pixelLevel,y-10,x,y,x+10,y+10);
     ellipse(x, y, pixelLevelTwo);
      }
      noStroke();
      xoffTwo +=incTwo;
      }
    yoffTwo +=incTwo;
}