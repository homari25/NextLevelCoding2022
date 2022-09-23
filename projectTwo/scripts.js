let usMap,usFlag,chinaFlag;
let pixelLevel = 8;
let inc = 0.02;

function preload(){
  usMap = loadImage('/projectTwo/map.png');
}

function setup() {
  createCanvas(800, 800);
  frameRate(120);
}

function draw(){

  pixelDensity(1);
  let yoff = 0;
 image(usMap,0,100,width,height/4*3);
  loadPixels();

  for (let y = 0; y < height; y+=pixelLevel) {
    let xoff = 0;
    for (let x = 0; x < width; x+=pixelLevel) {
      let index = (x + y * width) * 4
      let randomValue = random(100,250);
   //   let n = noise(xoff,yoff) * 255;
      let blueValue = noise(100);
      let r = pixels[index + 0] = frameCount * yoff;
      let g = pixels[index + 1];
      let b = randomValue - pixels[index + 2];
      let a = pixels[index + 3];
      fill(r, g, b, a);
      square(x + 10, y - 10, pixelLevel);
      xoff +=inc;
      }
    yoff+=inc;
    }
}