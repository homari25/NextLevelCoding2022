let body = document.querySelectorAll("body")[0];
// let weeknum = document.querySelectorAll("weeknum")[0];

// function changeColoring() {
 
//   let myColors = ["#E8A365", "#E78A66", "#D06E6E","#81B29A","#F2CC8F","#3D405B"]
//   body.style.backgroundColor = myColors[Math.floor(Math.random() * myColors.length)];
//   weeknum.style.color = myColors[Math.floor(Math.random() * myColors.length)];


// // console.log(myColors[Math.floor(Math.random() * myColors.length)])

// }

let projectTwo = document.querySelector(".projectTwo");
let projectTwoPres = document.querySelector(".projectTwoPres");
let projectTwoDig = document.querySelector(".projectTwoDig");
let projectTwoArt = document.querySelector(".projectTwoArt");
let counterTwo = 0;

let projectThree = document.querySelector(".projectThree");
let projectThreePres = document.querySelector(".projectThreePres");
let projectThreeGen = document.querySelector(".projectThreeGen");
let counterThree = 0;

let projectFour = document.querySelector(".projectFour");
let projectFourPres = document.querySelector(".projectFourPres");
let projectFourGen = document.querySelector(".projectFourGen");
let counterFour = 0;

let description = document.querySelectorAll(".description");

projectTwo.onclick = function () {
  counterTwo +=1;

  if (counterTwo %2 == 1) {
    projectTwoPres.style.display = "block";
    projectTwoDig.style.display = "block";
    projectTwoArt.style.display = "block";  
  } else {
    projectTwoPres.style.display = "none";
    projectTwoDig.style.display = "none";
    projectTwoArt.style.display = "none";  
  }

}


projectThree.onclick = function () {
  counterThree +=1;

  if (counterThree %2 == 1) {
    projectThreePres.style.display = "block";
    projectThreeGen.style.display = "block";
  } else {
    projectThreePres.style.display = "none";
    projectThreeGen.style.display = "none";
  }

}

projectFour.onclick = function () {
  counterFour +=1;

  if (counterFour %2 == 1) {
    projectFourPres.style.display = "block";
    projectFourGen.style.display = "block";
  } else {
    projectFourPres.style.display = "none";
    projectFourGen.style.display = "none";
  }

}

