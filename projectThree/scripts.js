// move the width
let frame = document.getElementById("frame");
let nal = document.getElementById("nal");
let ge = document.getElementById("ge");
let graphic = document.getElementById("graphic");
let sunrise,sunset,sunlength;
let widthChange,heightChange;
let lat,lng,place;
let dateInput = document.getElementById("date");
let Input = document.getElementById("latitude");
let longtitudeInput = document.getElementById("longtitude");
let placeInput = document.getElementById("place");
// let mysvg = document.getElementById("mysvg");
let info = document.getElementById("information");

function submit(){
console.log(placeInput.value);
place = placeInput.value;
date = dateInput.value;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key':'771845e547msh3cf2aeb936308e7p110648jsn9a26e17e8605',
		'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com'
	}
};

fetch(`https://forward-reverse-geocoding.p.rapidapi.com/v1/search?q=${place}&accept-language=en&polygon_threshold=0.0`, options)
	.then(response => response.json())
	.then(response => {
  console.log(response[0].lat,response[0].lon);
  lat = response[0].lat;
  lng = response[0].lon;

const optionsTwo = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '771845e547msh3cf2aeb936308e7p110648jsn9a26e17e8605',
		'X-RapidAPI-Host': 'sun-calculator.p.rapidapi.com'
	}
};

fetch(`https://sun-calculator.p.rapidapi.com/sunrise/?date=${date}&lat=${lat}&lng=${lng}`, optionsTwo)
	.then(response => response.json())
	.then(response => {
   console.log(response.sunrise, response.sunset);
   let sunrise = response.sunrise;
   let sunset = response.sunset;
   let sunlength = (sunset - sunrise)/3600;
   console.log(sunlength + "hours");
   info.innerHTML = "The length of the daylight is " + Math.round(sunlength * 100) / 100 + "hours"

function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}  
  
 let widthChange = map(sunlength,0,24,20,400); 
 let heightChange = map(lat,90,-90,20,300);
//  console.log(widthChange, heightChange + "please");
 
  frame.style.width = widthChange + "px";
  frame.style.height = 84 + heightChange + "px";
  nal.style.left = 250 + widthChange + "px";
  ge.style.top = 160 + heightChange + "px";
  graphic.style.top = 160 + heightChange + "px";
  graphic.style.left = 250 + widthChange + "px";

})
  .catch(err => console.error(err));
})
	.catch(err => console.error(err));
}

// function save(){
//      var link = document.createElement("a");
//     link.download = 'natgeo-logo.png';
//     link.href = document.getElementById('mysvg');
//     link.click();
// }