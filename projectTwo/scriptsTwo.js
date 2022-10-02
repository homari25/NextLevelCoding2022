let usMap,chinaFlag,usFlag,nofill;

function preload(){
  usMap = loadImage("map.png");
  chinaFlag = loadImage("china.png");
  usFlag = loadImage("us.png");
  nofill = loadImage("nofill.png")
}

function setup() {
  createCanvas(2048, 2048);
//  noLoop();
}

function draw() {
  image(usMap,0,0,usMap.width,usMap.height);
  usMap.loadPixels();
  let diameter = 10;
  pixelDensity(1);
  console.log(mouseX,mouseY);

  for (let y = 0; y < height; y++) {
   for (let x = 0; x < width; x++) {
    let index = (x + y * width) * 4;
    let r = usMap.pixels[index + 0];
    let g = usMap.pixels[index + 1];
    let b = usMap.pixels[index + 2];

    let pix = ((0.08 * r) + (0.54* g) + (0.11 * b));

      if (pix <= 12.5) {
        image(nofill,x,y,10,10); 
      } else if (pix > 12.5&& pix <= 25) {
        image(nofill,x,y,10,10); 
    
}
