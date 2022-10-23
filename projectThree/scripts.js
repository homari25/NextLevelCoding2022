// move the width
let frame = document.getElementById("frame");
let nal = document.getElementById("nal");
let ge = document.getElementById("ge");
let graphic = document.getElementById("graphic");
// let geoframe = document.getElementById("geoframe");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '771845e547msh3cf2aeb936308e7p110648jsn9a26e17e8605',
		'X-RapidAPI-Host': 'stormglass.p.rapidapi.com'
	}
};

fetch('https://stormglass.p.rapidapi.com/forecast?lng=60&lat=5.114', options)
	.then(response => response.json())
	.then(response => {
      console.log(response)
      console.log(response.hours[0].waveHeight[0].value)
      myVar = response.hours[0].waveHeight[0].value; //If I want to get a value. Check from sources!!
  
      console.log(myVar);
  
  })
	.catch(err => console.error(err));

let heightChange = 10;
let widthChange = 10;
let moveLetter = widthChange - 10;
let moveVertical = heightChange - 10;

document.addEventListener('keydown',function(e) {
  if (e.which === 39) {
  widthChange = widthChange + 10;  
  moveLetter = widthChange;
  // console.log(moveLetter);
  } else if (e.which === 37) {
  widthChange = widthChange - 10;  
  moveLetter = widthChange;
  } else if (e.which === 38) {
    heightChange = heightChange - 10;
    moveVertical = heightChange;
  } else if (e.which === 40) {
    heightChange = heightChange + 10;
    moveVertical = heightChange;
  }
  // console.log(moveLetter);
  frame.style.width = widthChange + "px";
  frame.style.height = 84 + heightChange + "px";
  nal.style.left = 250 + widthChange + "px";
  ge.style.top = 160 + heightChange + "px";
  graphic.style.top = 160 + heightChange + "px";
  graphic.style.left = 250 + widthChange + "px";
  
})

console.log(widthChange);

let myVar;

// frame.style.width = widthChange + "px";
// //geoframe.style.width = widthChange + "px";

// nal.style.left = 260 + moveLetters + "px";
// graphic.style.left = 260 + moveLetters + "px";



// const lat = 60;
// const lng = 5.114;

// fetch(`https://api.stormglass.io/v2/tide/extremes/point?lat=${lat}&lng=${lng}&start=2019-03-15&end=2019-03-15`, {
//   headers: {
//     'Authorization': 'acba17b8-4dd2-11ed-92e6-0242ac130002-acba1812-4dd2-11ed-92e6-0242ac130002'
//   }
// }).then(response => response.json()).then((jsonData) => {
//   console.log(response.json()); 
// });