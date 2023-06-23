  /*----- constants -----*/
const wordBank = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
//colors ROYGBIV
const errorMax = 6;


  /*----- state variables -----*/
let word = wordBank[Math.floor(Math.random() * wordBank.length)];
let remainingLetters = word.length;
let answerArr = [];
let errors = 0;
let inputLetter = prompt("Guess a letter: ")



  /*----- cached elements  -----*/
  const lossMessageEl = document.getElementById("message")
  const playAgainBtn = document.getElementById("play-again-btn")
  //Hangman
  const headEl = document.getElementById("head");
  const torsoEl = document.getElementById("torso");
  const leftLegEl = document.getElementById("left-leg");
  const rightLegEl = document.getElementById("right-leg");
  const leftArmEl = document.getElementById("left-arm");
  const rightArmEl = document.getElementById("right-arm");

  /*----- event listeners -----*/
playAgainBtn.addEventListener("click", init);

  /*----- functions -----*/
init();
function init(){

    
    render();
}

function render(){

}

function renderMessage(){
    loss();
    win();
}

function toggleHangman(){
headEl.style.visibility = "hidden";
//if (errors = 1){headEl.style.visibility = visible}
torsoEl.style.visibility = "hidden";
//if (errors = 1){torsoEl.style.visibility = visible}
leftLegEl.style.visibility = "hidden";
//if (errors = 1){leftLegEl.style.visibility = visible}
rightLegEl.style.visibility = "hidden";
//if (errors = 1){rightLegEl.style.visibility = visible}
leftArmEl.style.visibility = "hidden";
//if (errors = 1){leftArmEl.style.visibility = visible}
rightArmEl.style.visibility = "hidden";
//if (errors = 1){rightArmEl.style.visibility = visible}
}