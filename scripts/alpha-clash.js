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

function continueGame(){
    //get random alphabet
  const alphabet = getRandomAlphabets();

  //set regenerated random alphabet
  const currentAlphabet = document.getElementById('current-alphabet');
  currentAlphabet.innerText = alphabet;

  //set Background color
  setBackgroundColor(alphabet);

}