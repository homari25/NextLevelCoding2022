let circle = document.getElementById("circle");

circle.addEventListener("click",myFunction);

function myFunction () {
let newCircle = document.createElement("div");

newCircle.style.width = 100 + "px";
newCircle.style.height = 100 + "px";
newCircle.classList.add("newCircles");
newCircle.style.position = "absolute"
newCircle.style.backgroundColor = "blue";
newCircle.style.borderRadius = 50 + "%";
newCircle.style.top = Math.random() * 500 + "px";
newCircle.style.left = Math.random() * 500 + "px";
  
document.body.appendChild(newCircle);
console.log(newCircle);
}