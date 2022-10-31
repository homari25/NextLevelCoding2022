// let circle = document.getElementById("circle");
let text = document.getElementById("text");
let myPics = ["/cookie/sozai/ny1.png","/cookie/sozai/ny2.png","/cookie/sozai/ny3.png","/cookie/sozai/ny4.png","/cookie/sozai/ny5.png","/cookie/sozai/ny6.png","/cookie/sozai/ny7.png","/cookie/sozai/ny8.png","/cookie/sozai/ny9.png","/cookie/sozai/ny10.png",
"/cookie/sozai/ny11.png","/cookie/sozai/ny12.png","/cookie/sozai/ny13.png","/cookie/sozai/ny14.png","/cookie/sozai/ny15.png","/cookie/sozai/ny16.png","/cookie/sozai/ny17.png","/cookie/sozai/ny18.png","/cookie/sozai/ny19.png","/cookie/sozai/ny20.png",
"/cookie/sozai/ny21.png","/cookie/sozai/ny22.png","/cookie/sozai/ny23.png"]
let container = document.querySelector("#container");

console.log(document.cookie);


var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;


text.addEventListener("click",function() {
let newPic = document.createElement("div");
//how do I not repeat the same thing over again?
newPic.innerHTML = "<img src='" + myPics[Math.floor(Math.random() * myPics.length)] + "'>";
let positionPic = getCookie("newPic_position") || Math.random() * window.innerWidth;
newPic.classList.add("newyorkPic");
// how do I make it small?
newPic.draggable = true;



newPic.style.top = positionPic + "px";
newPic.style.left = positionPic+ "px";
newPic.style.position = "absolute";
newPic.style.zIndex = 1;
  
document.body.appendChild(newPic);

setCookie("newPic_position", positionPic, 999);

//I can't drag... Is it because I'm appendChild-ing?

// for (let piece of newPic) {
//   let randomX = Math.floor(Math.random() * 800).toString();
//   let randomY = Math.floor(Math.random() * 800).toString();

//   newPic.style.left = randomX + "px";
//   newPic.style.top = randomY + "px";

//   document.documentElement.style.setProperty("--posx", randomX + "px");
//   document.documentElement.style.setProperty("--posy", randomY + "px");
// }

// console.log(randomPos(randomX, randomY));
// console.log(newPic);
});

const deleteAllCookies = () => {
    const cookies = document.cookie.split(";");
  
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

