let circle = document.getElementById("circle");
let text = document.getElementById("text");
let myPics = ["/cookie/sozai/ny1.png","/cookie/sozai/ny2.png","/cookie/sozai/ny3.png","/cookie/sozai/ny4.png","/cookie/sozai/ny5.png","/cookie/sozai/ny6.png","/cookie/sozai/ny7.png","/cookie/sozai/ny8.png","/cookie/sozai/ny9.png","/cookie/sozai/ny10.png",
"/cookie/sozai/ny11.png","/cookie/sozai/ny12.png","/cookie/sozai/ny13.png","/cookie/sozai/ny14.png","/cookie/sozai/ny15.png","/cookie/sozai/ny16.png","/cookie/sozai/ny17.png","/cookie/sozai/ny18.png","/cookie/sozai/ny19.png","/cookie/sozai/ny20.png",
"/cookie/sozai/ny21.png","/cookie/sozai/ny22.png","/cookie/sozai/ny23.png"]
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
console.log(newPic);
}

