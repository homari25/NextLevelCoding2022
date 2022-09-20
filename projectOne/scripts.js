let quiz = document.getElementById("quiz");
let score = document.getElementById("score");
let time = document.getElementById("time");
let scoreCount = 0;
let timeCount = 20;
let quizFood = ['okonomiyaki','takoyaki','care-raisu','sushi','omuraisu','hitsumabushi','monjayaki','nattou','tempura','sukiyaki','misoshiru','kaisendon'];
let textInput = document.getElementById("textbox");
let enter = document.getElementById("enter");
let message = document.getElementById('message');
let picture = document.getElementById("picture");
let myPics = ["okonomiyaki.jpg","takoyaki.jpg","care-raisu.jpg","sushi.jpg","omuraisu.jpg","hitsumabushi.jpeg","monjayaki.jpeg","nattou.jpeg","tempura.jpeg","sukiyaki.jpg","misoshiru.jpg","kaisendon.jpg"];


// picture.innerHTML = "<img src='" + myPics[Math.floor(Math.random() * myPics.length)] + "'>";
textbox.innerHTML = textInput.value;
let i = 0;

enter.onclick = function(){ 

  quiz.innerHTML = quizFood[i];

  if (quizFood[i - 1] == textInput.value ) {
    scoreCount+=1;
    message.innerHTML = "Yay! :)";

  } else {
      scoreCount +=0;
      message.innerHTML = "";
  }
  console.log(myPics[i])
  // myPics[i].style.width = 200 + "px";
  // myPics[i].style.height = 200 + "px";
  picture.innerHTML = "<img src='" + myPics[i] + "'>" ;

  quiz.innerHTML = quizFood[i];

  i++;
  // let answer = Math.floor(Math.random() * quizFood.length);

  // console.log(quizFood[answer] + "," + textInput.value)
  // quiz.innerHTML = quizFood[answer];

  // if (quizFood[answer] == textInput.value ) {
  //   scoreCount+=1;
  //   message.innerHTML = "CORRECT!";
  // } else {
  //     scoreCount +=0;
  // }

  // quiz.innerHTML = quizFood[answer];
  score.innerHTML = "SCORE " + scoreCount;
  textInput.value = "";
}

// Pick & show random word


//time goes down
setInterval(timer,1000);

function timer(){
time.innerHTML = "TIME " + timeCount;



if (timeCount > 0) {
  timeCount--;
} else {
  timeCount == 0;
//when time is up 
  message.innerHTML= "GAME OVER!!";
}
}

