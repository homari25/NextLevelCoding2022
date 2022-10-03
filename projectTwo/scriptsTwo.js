function preload(){
    chinaFlag = loadImage("china.png");
    usFlag = loadImage("us.png");
  }
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    // noLoop();
      background(255);
  }
  
  function draw() {
  
    for (let y = 0; y < windowHeight; y+=10) {
      for (let x = 1; x < 4; x++) {
     image(chinaFlag,x * 20 - 10,y,10,10); 
     image (usFlag, windowWidth - x * 20, y, 10, 10);
      }
    }
    if (mouseX <= width/2) {
    image(chinaFlag,mouseX,mouseY,10,10);
    } else if (mouseX > width/2) {
    image(usFlag,mouseX,mouseY,10,10);
    }
    console.log(mouseX,mouseY);
  }