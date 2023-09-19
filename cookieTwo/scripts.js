let coookie = document.cookie;

console.log(coookie);
// let cookieSize = 150;
// let cookieSize = getCookie("cookie_size") || 200;
let cookiePosX = getCookie("cookiePosX");
let cookiePosY = getCookie("cookiePosY");

let cookieElement = document.getElementById("cookie");

document.addEventListener("mousedown", function(e){
    // cookieSize++;
  let cookieImg = document.createElement("img");
  cookieImg.src = "https://pngimg.com/uploads/cookie/cookie_PNG13656.png";
  cookieImg.style.width = 100 + "px";


  // const maxX = window.innerWidth - 100; // Subtract the image width
  // const maxY = window.innerHeight - 100; // Subtract the image height

  // const randomX = Math.random() * maxX;
  // const randomY = Math.random() * maxY;

  cookiePosX = e.clientX;
  cookiePosY = e.clientY;


  cookieImg.style.position = "absolute";
  cookieImg.style.top = cookiePosY+ "px";
  cookieImg.style.left = cookiePosX + "px";
  // cookieImg.style.top = randomY + "px";
  // cookieImg.style.left = randomX + "px";
    
    // cookieContainer = document.createElement("div");
  console.log(cookieImg.style.top, cookieImg.style.left);
  document.body.appendChild(cookieImg);

    setCookie('cookiePosX', cookiePosX, 999);
    // cookieElement.style.width = cookieSize + "px";
    // cookieElement.style.height = cookieSize + "px";
})



function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  console.log(document.cookie)
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
    return "null";
  }



  function checkCookie(cname) {
    if (!getCookie(cname) === undefined) {
        return true;
    } else {
        return false;
    }
  }


  const deleteAllCookies = () => {
    const cookies = document.cookie.split(";");
  
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }
  