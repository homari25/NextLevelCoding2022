function preload(){
    chinaFlag = loadImage("china.png");
    usFlag = loadImage("us.png");
  }
  
  function setup() {
    let cnv = createCanvas(windowWidth, windowHeight * 3.5);
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
        let distance = dist(mouseX, mouseY, width/2, height/2)
        let size = map(distance,0,1000, 5,30);
        if (mouseX <= width/2) {
        image(chinaFlag,mouseX,mouseY,size,size);
        } else if (mouseX > width/2) {
        image(usFlag,mouseX,mouseY,size,size);
        }
    }
