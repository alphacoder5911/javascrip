const number_guessed=document.getElementById("guessField")
const noleft=document.getElementById('noOfGuessesleft')
const noguessed=document.getElementById('noOfGuesses')
const hint=document.getElementById('loworhigh')
const sub=document.getElementById('subtn');
const rannom=parseInt(Math.random()*100+1)
console.log(rannom)

let a=[];
var numGuess=0;

noleft.innerText=numGuess;
let playGame=true;
if(playGame){
    sub.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(number_guessed.value)
        console.log(guess)
        a.push(guess);
        validateRepsonse(guess);
    });
}else{
    hint.innerHTML="All chances over";
}

function validateRepsonse(guess){
    if (isNaN(guess)) {
        alert('PLease enter a valid number');
      } else if (guess < 1) {
        alert('PLease enter a number more than 1');
      } else if (guess > 100) {
        alert('PLease enter a  number less than 100');
      } else {
        a.push(guess);
        if (numGuess === 11) {
         noleft.innerText=0;
          displayMessage(`Game Over. Random number was ${rannom}`);
          endGame();
        } else {
         
          checkGuess(guess);
        }
      }
}
function checkGuess(guess){
    if(guess==rannom){
        hint.innerText="Correct guess";
        endGame();

    }else if(guess>rannom){
        hint.innerHTML="The number u Guessed is greater than Ans";
        decreguesses()

    }
    else{
        hint.innerHTML="The number u Guessed is smaller than Ans";
        decreguesses()
    }
}



function decreguesses(){
    numGuess=numGuess+1;
    noleft.innerText=numGuess;
    if(numGuess==11){
      noleft.innerText=0;
       endGame();
    }
}

function endGame(){
  number_guessed.value='';
  number_guessed.setAttribute('disabled','');
  hint.innerHTML= `<h2 id="setatt">Start New Game</h2>`
  playGame=false;
  sub.setAttribute('disabled','');
  newgame();
}

function newgame(){
  const cli=document.getElementById('setatt');
  cli.addEventListener('click',function(e){
    e.preventDefault();
    const rannom=parseInt(Math.random()*100+1);
    const a=[];
    numGuess=1;
    number_guessed.innerHTML='';
    noleft.innerHTML=`${11-numGuess}`;
    number_guessed.removeAttribute('disabled');
    sub.removeAttribute('disabled')
    playGame=true;

  });
}

