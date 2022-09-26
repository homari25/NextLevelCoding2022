let forbiddenCity,statueOfLiberty;
let pixelLevel = 3;
let pixelLevelTwo = 3;
let inc = 0.02;
let incTwo = 0.02;
let noiseScale = 0.2;
let n = 0.15;
let d = 0.5;

function preload(){
  forbiddenCity = loadImage('forbiddencity.png');
  statueOfLiberty = loadImage("statueofliberty.png");
}

function setup() {
  createCanvas(2048, 2048);
  angleMode(DEGREES);
  background(0);
  frameRate(120);
}

function draw(){


 pixelDensity(1);
 


drawStatueOfLiberty();
 drawForbiddenCity();
//background(0);
  // drawbg();
 

}


function drawStatueOfLiberty(){
  let yoff = 0;
 image(statueOfLiberty,width/2, height/2,600,700);
 loadPixels();
  for (let y1 = 0; y1 < height; y1+=pixelLevel) {
    let xoff = 0;
    for (let x1 = 0; x1 <  width; x1+=pixelLevel) {
    let i = (x1 + y1 * width) * 4
    let randomValue = random(250,255);
//  let n = noise(xoff,yoff) * 255;
    let blueValue = random(100,150);
    let r = pixels[i]  - blueValue ;
    let g = pixels[i + 1] ;
    let b = pixels[i + 2] = randomValue;
    let a = pixels[i + 3] ;
    fill(r,g,b,a);
     // // triangle(x-pixelLevel,y-10,x,y,x+10,y+10);
     ellipse(x1, y1 , pixelLevel);
      }
      noStroke();
            xoff +=inc;
      }
    yoff+=inc;
}

function drawForbiddenCity(){
    let yoffTwo = 0;
  image(forbiddenCity,0,0,1280,720);
  for (let y2 = 0; y2 < height; y2+=pixelLevelTwo) {
    let xoffTwo = 0;
   loadPixels();
    for (let x2 = 0; x2 < width; x2+=pixelLevelTwo) {
      let j = (x2 + y2 * width) * 4
      let randomValueTwo = random(200,250);
   //   let n = noise(xoff,yoff) * 255;
      let redValue = random()*100;
      let r2 = pixels[j + 0] = randomValueTwo;
      let g2 = pixels[j + 1];
      let b2 = pixels[j + 2] ;
      let a2 = pixels[j + 3] ;
      fill(r2, g2, 0, a2);
     // // triangle(x-pixelLevel,y-10,x,y,x+10,y+10);
     ellipse(x2, y2, pixelLevelTwo);
      }
      noStroke();
      xoffTwo +=incTwo;
      }
    yoffTwo +=incTwo;
}