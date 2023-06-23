  /*----- constants -----*/
const wordBank = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
//colors ROYGBIV
const errorMax = 6;


  /*----- state variables -----*/
let word = wordBank[Math.floor(Math.random() * wordBank.length)];
let remainingLetters = word.length;
let errors = 0;
let answerArr = [];
//for (let i = 0; i < word.length //....resume here//)


/*to do
turn answerArr into an array of underscores, display in a div
accept userInput as a letter
check array if that letter exists in the word
if correct: slice/splice/push the correct letter into the underscore array
if incorrect: errors++

function gameOver(){
    if (errors = errorMax){
        innerText of "message" says you lose
    }
}
*/

  /*----- cached elements  -----*/
  let lossMessageEl = document.getElementById("message");
  let playAgainBtn = document.getElementById("play-again-btn");
  let submitBtn = document.getElementById("submit-btn");
  let inputLetter = document.getElementById("input-letter").value;
  //Hangman
  const hangmanEls = [...document.querySelectorAll("#hangman > div")]; //for iterating visibility
  const headEl = document.getElementById("head");
  const torsoEl = document.getElementById("torso");
  const leftLegEl = document.getElementById("left-leg");
  const rightLegEl = document.getElementById("right-leg");
  const leftArmEl = document.getElementById("left-arm");
  const rightArmEl = document.getElementById("right-arm");

  /*----- event listeners -----*/
playAgainBtn.addEventListener("click", init);
submitBtn.addEventListener("click", getLetter);

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

function getLetter(){
    console.log(inputLetter);
    // if (inputLetter !=""){
    //   inputLetter = "";
    //}
//    if (inputLetter != null) {
//        
//    }
//    while (errors != errorMax)

}


/* note: would this be better as a ternary? See Connect Four hideMarker, bottom of js:

hangmanEls.forEach(function(div, idx){
    const displayDiv = errors > 0; //???
    div.style.visibility = displayDiv ? "hidden" : "visible";
})

function toggleHangman(){
headEl.style.visibility = "hidden";
//if (errors = 1){headEl.style.visibility = visible}
torsoEl.style.visibility = "hidden";
//if (errors = 2){torsoEl.style.visibility = visible}
leftLegEl.style.visibility = "hidden";
//if (errors = 3){leftLegEl.style.visibility = visible}
rightLegEl.style.visibility = "hidden";
//if (errors = 4){rightLegEl.style.visibility = visible}
leftArmEl.style.visibility = "hidden";
//if (errors = 5){leftArmEl.style.visibility = visible}
rightArmEl.style.visibility = "hidden";
//if (errors = 6){rightArmEl.style.visibility = visible}
}
*/