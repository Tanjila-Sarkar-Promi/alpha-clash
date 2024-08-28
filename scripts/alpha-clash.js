function play(){
    //hide home screen
    /* const homeScreen = document.getElementById('home-screen');
    homeScreen.classList.add('hidden');

    //show playground
    const playGroundScreen = document.getElementById('play-ground-screen')
    playGroundScreen.classList.remove('hidden'); */

    //hide all screen except playground screen
    hideElement('home-screen');
    hideElement('final-score')
    showElement('play-ground-screen');
    //reset score and life event
    setTextElementById('current-score',0);
    setTextElementById('current-life-event', 5);
    //continue game
    continueGame();

}

function keyPressedButtonHandler(event){
  //player pressed
  const playerPressed = event.key;
  //console.log(playerPressed);

  //stop the game if pressed 'Esc'
  if(playerPressed == 'Escape'){
    gameOver();
  }


  //get expected alphabet to pressed
  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  //console.log(playerPressed, expectedAlphabet);

  if(playerPressed == expectedAlphabet){
   //update score board
   const currentScore = getTextElementById('current-score');
   const newScore = currentScore + 1;
 
   setTextElementById('current-score',newScore );
// ....................................................
 /*    //update score board
    //1. get the current score
    const currentScoreElement = document.getElementById('current-score');
   const currentScoreText = currentScoreElement.innerText;
   const currentScore = parseInt(currentScoreText);
    //2. increase the score by 1

    const newScore = currentScore + 1;
    //3. show the updated score
    currentScoreElement.innerText = newScore; */

    //start a new round
    removeBackgroundColor(expectedAlphabet);
    continueGame();
  }
  else{

    //update life event
    const currentLifeEvent = getTextElementById('current-life-event'); 
    const newLifeEvent = currentLifeEvent - 1;

    setTextElementById('current-life-event', newLifeEvent);

    if(newLifeEvent == 0){
      gameOver();
    }

   /*  //update life event
    //1. get the current life event
    const currentLifeEventElement = document.getElementById('current-life-event');
    const currentLifeEventText = currentLifeEventElement.innerText;
    const currentLifeEvent = parseInt(currentLifeEventText);
    //2. decrement by 1
    const newLifeEvent = currentLifeEvent - 1;
    //3. show the updated event
    currentLifeEventElement.innerText = newLifeEvent; */

    // console.log('You missed. You lost a life');
  }
  
}
document.addEventListener('keyup', keyPressedButtonHandler);

function continueGame(){
    //get random alphabet
  const alphabet = getRandomAlphabets();

  //set regenerated random alphabet
  const currentAlphabet = document.getElementById('current-alphabet');
  currentAlphabet.innerText = alphabet;

  //set Background color
  setBackgroundColor(alphabet);

}
function gameOver(){
  hideElement('play-ground-screen');
  showElement('final-score');
 //update game score
  const lastScore = getTextElementById('current-score');
  setTextElementById('game-score', lastScore);

//clear the last selected alphabet
const currentAlphabet = getElementTextById('current-alphabet');
removeBackgroundColor(currentAlphabet);
}

