function preload(){
    chinaFlag = loadImage("china.png");
    usFlag = loadImage("us.png");
  }
  
  function setup() {
    let cnv = createCanvas(windowWidth, windowHeight * 3);
    // noLoop();
   // let canvasX = (windowWidth - width) / 2;
   // let canvasY = (windowHeight - height) / 2;
    cnv.position(0,0);
    background(255,255,255,0);
  }
  
  function draw() {
  
    for (let y = 0; y < height; y+=10) {
      for (let x = 1; x < 15; x++) {
     image(chinaFlag, x * 20 - 10,y,10,10); 
     image (usFlag, width - x * 20, y, 10, 10);
      }
    }
    console.log(mouseX,mouseY);
    }

    function mouseDragged () {
        if (mouseX <= width/2) {
        image(chinaFlag,mouseX,mouseY,10,10);
        } else if (mouseX > width/2) {
        image(usFlag,mouseX,mouseY,10,10);
        }
    }
