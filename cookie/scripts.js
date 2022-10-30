let circle = document.getElementById("circle");
let text = document.getElementById("text");
let myPics = ["/cookie/sozai/ny1.png","/cookie/sozai/ny2.png","/cookie/sozai/ny3.png","/cookie/sozai/ny4.png","/cookie/sozai/ny5.png","/cookie/sozai/ny6.png","/cookie/sozai/ny7.png","/cookie/sozai/ny8.png","/cookie/sozai/ny9.png","/cookie/sozai/ny10.png","/cookie/sozai/ny11.png"]


text.addEventListener("click",myFunction);

function myFunction () {
let newPic = document.createElement("div");
let i = 0;
//how do I not repeat the same thing over again?
newPic.innerHTML = "<img src='" + myPics[Math.floor(Math.random() * myPics.length)] + "'>";

newPic.classList.add("newyorkPic");
// how do I make it small?
newPic.style.width = 50 + "px";
newPic.style.position = "absolute";

let active = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

newyorkPic.addEventListener("touchstart", dragStart, false);
newyorkPic.addEventListener("touchend", dragEnd, false);
newyorkPic.addEventListener("touchmove", drag, false);

newyorkPic.addEventListener("mousedown", dragStart, false);
newyorkPic.addEventListener("mouseup", dragEnd, false);
newyorkPic.addEventListener("mousemove", drag, false);

function dragStart(e) {
  if (e.type === "touchstart") {
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;
  } else {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
  }

  if (e.target === dragItem) {
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


// newPic.style.top = Math.random() * 500 + "px";
// newPic.style.left = Math.random() * 500 + "px";
  
document.body.appendChild(newPic);
console.log(i);

}