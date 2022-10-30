let circle = document.getElementById("circle");
let text = document.getElementById("text");
let myPics = ["/cookie/sozai/ny1.png","/cookie/sozai/ny2.png","/cookie/sozai/ny3.png","/cookie/sozai/ny4.png","/cookie/sozai/ny5.png","/cookie/sozai/ny6.png","/cookie/sozai/ny7.png","/cookie/sozai/ny8.png","/cookie/sozai/ny9.png","/cookie/sozai/ny10.png","/cookie/sozai/ny11.png"]


text.addEventListener("click",myFunction);

function myFunction () {
let newPic = document.createElement("div");
// let i = 0;
// let isMouseDown = true;
//how do I not repeat the same thing over again?
newPic.innerHTML = "<img src='" + myPics[Math.floor(Math.random() * myPics.length)] + "'>";

newPic.classList.add("newyorkPic");
// how do I make it small?
// newPic.style.width = 50 + "px";
newPic.style.top = Math.random() * window.innerHeight;
newPic.style.left = Math.random() * window.innerWidth;

// newPic.onmouseDown = function(event) {
//   newPic.style.position = "absolute";
//   document.body.append(newPic);
// ;
//   function moveAt(pageX, pageY) {
//     newPic.style.left = pageX - ball.offsetWidth / 2 + "px";
//     newPic.style.top = pageY - ball.offsetHeight / 2 + "px";
//   }

//   moveAt(event.pageX, event.pageY);

//   function onMouseMove(event) {
//     moveAt(event.pageX, event.pageY);
//   }

//   document.addEventListener('mousemove', onMouseMove);
//   newPic.onmouseup = function () {
//     document.removeEvenetListener('mousemove', onMouseMove);
//     newPic.onmouseup = null;
//   };

//   newPic.ondragstart = function() {
//     return false;
//   }
// }

newPic.style.zIndex = 1;
  
document.body.appendChild(newPic);
}