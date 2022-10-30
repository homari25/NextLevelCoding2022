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

dragElement(document.getElementsByClassName("newyorkPic"));

function dragElement(elmnt) {
  let pos1, pos2, pos3, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }  
}

function dragMouseDown(e) {
  e = e || window.event;
  e.preventDefault();
  // get the mouse cursor position at startup:
  pos3 = e.clientX;
  pos4 = e.clientY;
  document.onmouseup = closeDragElement;
  // call a function whenever the cursor moves:
  document.onmousemove = elementDrag;
}

function elementDrag(e) {
  e = e || window.event;
  e.preventDefault();
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;
  elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
  elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
}

function closeDragElement() {
  document.onmouseup = null;
  document.onmousemove = null;
}

// newPic.style.top = Math.random() * 500 + "px";
// newPic.style.left = Math.random() * 500 + "px";
  
document.body.appendChild(newPic);
console.log(i);
i = i + 1;

}