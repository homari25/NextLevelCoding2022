let usMap,chinaFlag,usFlag,nofill;

function preload(){
  usMap = loadImage("map.png");
  chinaFlag = loadImage("china.png");
  usFlag = loadImage("us.png");
  nofill = loadImage("nofill.png")
}

function setup() {
  createCanvas(1200, 1200);
  noLoop();
}

function draw() {
  usMap.loadPixels();
  image(usMap,0,0,usMap.width,usMap.height);
  let diameter =10;
  pixelDensity(1);
  
  for (let y = 0; y < height; y++) {
   for (let x = 0; x < width; x++) {
    let index = (x + y * width) * 4;
    let r = usMap.pixels [index + 0];
    let g = usMap.pixels [index + 1];
    let b = usMap.pixels [index + 2];

    let pix = ((0.54* g) + (0.11 * b));

    if (pix <= 12.5 && x < usMap.width && y < usMap.height) {
      image(nofill,x,y,10,10); 
    } else if (pix > 12.5&& pix <= 25) {
      image(nofill,x,y,10,10); 
    } else if (pix > 25.0  && pix < 37.5) {
      image(nofill,x,y,10,10); 
    } else if (pix > 37.5 && pix <= 50 ) {
      image(nofill,x,y,10,10); 
    } else if (pix > 50 && pix <= 62.5 ) {
      image(nofill,x,y,10,10); 
    } else if (pix > 62.5 && pix <= 75) {
      image(usFlag,x,y,10,10);
    } else if (pix > 75 && pix <= 87.5) {
      image(usFlag,x,y,10,10); 
    } else if (pix > 87.5 && pix <= 100) {
      image(usFlag,x,y,10,10);
    } else if (pix > 100 && pix <=112.5) {
      image(usFlag,x,y,10,10); 
    } else if (pix > 112.5 && pix <=125) {
      image(usFlag,x,y,10,10); 
    } else if (pix > 125 && pix <=137.5) {
      image(usFlag,x,y,10,10); 
    } else if (pix > 137.5 && pix <=150) {
      image(usFlag,x,y,10,10); 
    } else if (pix > 150 && pix <=162.5) {
      image(usFlag,x,y,10,10); 
    } else if (pix > 162.5 && pix <=175) {
      image(usFlag,x,y,10,10); 
    } else if (pix > 175 && pix <=187.5) {
      image(usFlag,x,y,10,10); 
    } else if (pix > 200 && pix <= 212.5) {
      image(chinaFlag,x,y,10,10); 
    } else if (pix > 212.5 && pix <= 225) {
      image(chinaFlag,x,y,10,10); 
    } else if (pix > 225 && pix <= 237.5) {
      image(chinaFlag,x,y,10,10); 
    } else if (pix > 237.5 && pix <=250) {
      image(chinaFlag,x,y,10,10); 
    } else if (pix > 250 && pix <= 255) {
      image(nofill,x,y,10,10); 
    } else if (pix > 255 && pix <= 275 ) {
      image(nofill,x,y,10,10); 
    } else if (pix > 275 && pix <= 287.5) {
      image(nofill,x,y,10,10);
    } else if (pix > 287.5 && pix <= 300) {
      image(nofill,x,y,10,10);
    }
    x = x + diameter - 1;
  }
    y = y + diameter - 1;
  }
}
