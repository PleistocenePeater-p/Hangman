  /*----- constants -----*/
const wordBank = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
//colors ROYGBIV
const errorMax = 6;


  /*----- state variables -----*/
let word = wordBank[Math.floor(Math.random() * wordBank.length)];
let errors = 0;
let wordArray = [];
console.log(word);


/*----- cached elements  -----*/
let wordDisEl = document.getElementById("word-display");
let lossMessageEl = document.getElementById("message");
let playAgainBtn = document.getElementById("play-again-btn");
let submitBtn = document.getElementById("submit-btn");
//  let inputLetter = document.getElementById("input-letter").value;
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
  // renderMessage();
  // renderHangman();
}

function renderMessage(){
  loss();
  win();
}

function getLetter(){
  let inputLetter = document.getElementById("input-letter").value;
  console.log(inputLetter)
  
  
  
  //    if (inputLetter != null) {
    //        
    //    }
    //    while (errors != errorMax)
    
  }
  
  for (let i = 0; i < word.length; i++) {
    wordArray[i] = "_";
    let wordArrayJoin = wordArray.join(" ");
    wordDisEl.innerText = wordArrayJoin;
  }

  
  
  // let underscores = word.length;
  // while (underscores > 0){
  //   document.getElementById("word-display").innerText = wordArray.join()
  //   let inputLetter = document.getElementById("input-letter").value;
  //   if (inputLetter == null){
  //     break;
  //   } else {
  //     for (let j = 0; j < word.length; j++){
  //       if (word[j] === inputLetter){
  //         wordArray[j] = inputLetter;
  //         underscores--;
  //       }
  //     }
  //   }
  // }
  
  
  /*to do
  grab a random word from wordbank
  turn that random word into an array
  turn that array into an array of underscores
  display the underscore array in a div
  
  accept userInput as a letter
  check the random word array if that letter exists in the word - .some()
  if correct: splice the correct letter into the underscore array
  if incorrect: errors++
  
  function gameOver(){
      if (errors = errorMax){
          innerText of "message" says you lose
      }
  }
  */
  
  /* note: would this be better as a ternary? See Connect Four hideMarker, bottom of js:
  
  hangmanEls.forEach(function(div, idx){
    const displayDiv = errors > 0; //???
    div.style.visibility = displayDiv ? "hidden" : "visible";
  })
  
  function renderHangman(){
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