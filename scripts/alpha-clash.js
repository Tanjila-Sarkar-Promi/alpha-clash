function play(){
    //hide home screen
    /* const homeScreen = document.getElementById('home-screen');
    homeScreen.classList.add('hidden');

    //show playground
    const playGroundScreen = document.getElementById('play-ground-screen')
    playGroundScreen.classList.remove('hidden'); */

    hideElement('home-screen');
    showElement('play-ground-screen');
    continueGame();
}

function keyPressedButtonHandler(event){
  //player pressed
  const playerPressed = event.key;

  //get expected alphabet to pressed
  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(playerPressed, expectedAlphabet);

  if(playerPressed == expectedAlphabet){

    
    removeBackgroundColor(expectedAlphabet);
    continueGame();
  }
  else{
    console.log('You missed. You lost a life');
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

