let circle = document.getElementById("circle");
let text = document.getElementById("text");
let myPics = ["/cookie/sozai/ny1.png","/cookie/sozai/ny2.png","/cookie/sozai/ny3.png","/cookie/sozai/ny4.png","/cookie/sozai/ny5.png","/cookie/sozai/ny6.png","/cookie/sozai/ny7.png","/cookie/sozai/ny8.png","/cookie/sozai/ny9.png","/cookie/sozai/ny10.png","/cookie/sozai/ny11.png"]
let container = document.querySelector("#container");

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;


text.addEventListener("click",myFunction);

function myFunction () {
let newPic = document.createElement("div");
//how do I not repeat the same thing over again?
newPic.innerHTML = "<img src='" + myPics[Math.floor(Math.random() * myPics.length)] + "'>";

newPic.classList.add("newyorkPic");
// how do I make it small?

newPic.style.top = Math.random() * window.innerHeight + "px";
newPic.style.left = Math.random() * window.innerWidth + "px";
newPic.style.position = "absolute";
newPic.style.zIndex = 1;
  
document.body.appendChild(newPic);
}

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {
  if (e.type === "touchstart") {
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;
  } else {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
  }

  if (e.target === newPic) {
    active = true;
  }
}

function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;

  active = false;
}

function drag(e) {
  if (active) {
  
    e.preventDefault();
  
    if (e.type === "touchmove") {
      currentX = e.touches[0].clientX - initialX;
      currentY = e.touches[0].clientY - initialY;
    } else {
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
    }

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, dragItem);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}