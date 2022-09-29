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

   // image(usFlag,x,y,2,2);

   // if(mouseover)


    if (pix <= 12.5 && x < usMap.width && y < usMap.height) {
      fill(0);
    } else if (pix > 12.5&& pix <= 50) {
        image(chinaFlag,x,y,2,2); 
    } else if (pix >= 170 && pix <200) {
      image(usFlag,x,y,2,2);

    } else if (pix > 128 && pix <= 192 ) {
      text(" ",x,y);
    }
     else if (pix > 192 && pix <= 255 ) {
      text("🇨🇳",x,y);
    }

    // } else if (bright >= 50 && bright < 80) {
    //   text("🇹🇷",x,y);
    // } else if (bright >= 80 && bright < 110) {
    //   text("🇨🇳",x,y);
    // } else if (bright >= 110 && bright < 140) {
    //   text("🇺🇸",x,y);
    // } else if (bright >= 140 && bright <170) {
    //   text("🇨🇳",x,y);
    x = x + diameter - 1;
   }
   y = y + diameter - 1;
}

}
