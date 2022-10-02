let usMap,chinaFlag,usFlag,nofill;
//let chinese = getElemen

function preload(){
  usMap = loadImage("map.png");
  chinaFlag = loadImage("china.png");
  usFlag = loadImage("us.png");
  nofill = loadImage("nofill.png")
}


function generarRandom(min, max) {
  return Math.random() * (max - min) + min
}

let cirColor = ["#FFFFF", "#FBD802"];

for(let i = 0;i <= 50;i++) {
    var el = document.createElement('div')
    var ran = generarRandom(5, 20)
    var ranCinco = generarRandom(4, 8)
    var ranSeis = generarRandom(0, 5)
    var ranDos = generarRandom(40, 50)
    var ranTres = generarRandom(5, 300)
    var ranCuatro = generarRandom(5, 110)
    
    el.style.marginLeft = ranDos + 'vw';
    el.style.marginRight = ranTres + 'vw';	
    el.style.marginTop = '-' + (parseInt(ran) + 10) + 'px';	
    el.style.background = '#'+i+i+i
    el.style.width = ran + 'px';
    el.style.height = ran + 'px';
    el.style.animationDuration = ranCinco + 's';
    el.style.animationDelay = ranSeis + 's';
    
    
    document.body.appendChild(el)
    el.classList.add('punto')
}

function generateCircle(min,max){
  return Math.random() * (max - min) + min 
  }

  

  for (j = 0; j <=500; j++) {
  let circle = document.createElement('div');
  let cirSize =  generateCircle(5, 20);
  let cirPlace = generateCircle(0,100);
  let cirPlaceHeight = generateCircle(0,50);


  circle.style.width = cirSize + 'px';
  circle.style.height = cirSize + 'px';
  circle.style.background = '#'+j+j+j
  circle.style.left = cirPlace + 'vw';
  circle.style.top =  cirPlaceHeight + 'vh';
  circle.style.opacity = j / 10;
  circle.style.backgroundColor = cirColor[Math.floor(Math.random() * cirColor.length)];
  document.body.appendChild(circle)
  circle.classList.add('circle')
  }


// function setup() {
//   createCanvas(2048, 2048);
// //  noLoop();
// }

// function draw() {
//   for (let y = 0; y < height; y++) {
//    for (let x = 0; x < width; x++) {
//         image(nofill,x,y,10,10); 
//         image(nofill,x,y,10,10); 
//     }
//   }
// }
