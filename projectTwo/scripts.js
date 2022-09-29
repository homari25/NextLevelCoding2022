let usMap,chinaFlag,usFlag;

function preload(){
  usMap = loadImage("map.png");
  chinaFlag = loadImage("china.png");
  usFlag = loadImage("us.png");
}

function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  usMap.loadPixels();
  let diameter =10;
  pixelDensity(1);
//  background(255,0,0);
  
  for (let y = 0; y < height; y++) {
   for (let x = 0; x < width; x++) {
    //  var pix = blue(usMap.get(x,y));
    let index = (x + y * width) * 4;
    let r = usMap.pixels [index + 0];
    let g = usMap.pixels [index + 1];
    let b = usMap.pixels [index + 2];

    let pix = ((0.3 * r) + (0.59* g) + (0.11 * b));

    if (pix <= 12.5 && x < usMap.width && y < usMap.height) {
      image(usFlag,x,y,5,5);
    } else if (pix > 12.5&& pix <= 25) {
      image(chinaFlag,x,y,5,5); 
    } else if (pix > 25.0  && pix < 37.5) {
      image(usFlag,x,y,5,5);
    } else if (pix > 37.5 && pix <= 50 ) {
      image(usFlag,x,y,5,5);
    } else if (pix > 50 && pix <= 62.5 ) {
      image(chinaFlag,x,y,5,5); 
    } else if (pix > 62.5 && pix <= 75) {
      image(usFlag,x,y,5,5);
    } else if (pix > 75 && pix <= 87.5) {
      image(chinaFlag,x,y,5,5); 
    } else if (pix > 87.5 && pix <= 100) {
      image(usFlag,x,y,5,5);
    } else if (pix > 100 && pix <=112.5) {
      image(chinaFlag,x,y,5,5); 
    } else if (pix > 112.5 && pix <=125) {
      image(chinaFlag,x,y,5,5); 
    } else if (pix > 125 && pix <=137.5) {
      image(chinaFlag,x,y,5,5); 
    } else if (pix > 137.5 && pix <=150) {
      image(chinaFlag,x,y,5,5); 
    } else if (pix > 150 && pix <=162.5) {
      image(chinaFlag,x,y,5,5); 
    } else if (pix > 162.5 && pix <=175) {
      image(chinaFlag,x,y,5,5); 
    } else if (pix > 175 && pix <=187.5) {
      image(chinaFlag,x,y,5,5); 
    } else if (pix > 187.5 && pix <200) {
      image(chinaFlag,x,y,5,5); 
    } else if (pix > 187.5 && pix <200) {
      image(chinaFlag,x,y,5,5); 
    } else if (pix > 187.5 && pix <200) {
      image(chinaFlag,x,y,5,5); 
    }
    x = x + diameter - 1;
  }
    y = y + diameter - 1;
  }
}
