function hideElement(elementId){
    const homeScreen = document.getElementById(elementId);
    homeScreen.classList.add('hidden');
}
function showElement(elementId){
    const playGroundScreen = document.getElementById(elementId)
    playGroundScreen.classList.remove('hidden');
}

function setBackgroundColor(elementId){
    const backgroundColor = document.getElementById(elementId);
    backgroundColor.classList.add('bg-orange-400');
}
function removeBackgroundColor(elementId){
    const backgroundColor = document.getElementById(elementId);
    backgroundColor.classList.remove('bg-orange-400');
}

function getRandomAlphabets(){
    //get an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    
    // get a random index between 0 - 25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

   //pass index to random get random alphabet
    const alphabet = alphabets[index];
    return alphabet;
}