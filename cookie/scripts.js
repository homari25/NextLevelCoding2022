let image = document.getElementById("image");

let myPics = ["https://media.cntraveler.com/photos/611fc0aced1e8a109123ec48/master/w_3000,h_2001,c_limit/Broadway,-New-York_GettyImages-588653038.jpg", "https://blog-www.pods.com/wp-content/uploads/2019/04/MG_1_1_New_York_City-1.jpg", "https://media.tacdn.com/media/attractions-content--1x-1/0b/2d/dc/c2.jpg", "https://media-cdn.tripadvisor.com/media/photo-m/1280/25/14/2e/02/caption.jpg"];

document.addEventListener("click",myFunction);

function myFunction () {
image.innerHTML = "<img src='" + myPics[Math.floor(Math.random() * myPics.length)] + "'>";
image.style.height = 10 + "%"; 
}

// var img = document.createElement('img')
// img.src = 'images/aftersurprise.png';
// document.getElementById('surprise').appendChild(img);