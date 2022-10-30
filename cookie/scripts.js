let circle = document.getElementById("circle");
let text = document.getElementById("text");
let myPics = ["/cookie/sozai/ny1.png"]

text.addEventListener("click",myFunction);

function myFunction () {
let newPic = document.createElement("div");
newPic.innerHTML = "<img src='" + myPics[Math.floor(Math.random() * myPics.length)] + "'>";
newPic.classList.add("newyorkPic");
newPic.style.position = "absolute"
newPic.style.top = Math.random() * 500 + "px";
newPic.style.left = Math.random() * 500 + "px";
  
document.body.appendChild(newPic);
console.log(newPic);
}