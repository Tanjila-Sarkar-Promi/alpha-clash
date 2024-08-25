function hideElement(elementId){
    const homeScreen = document.getElementById(elementId);
    homeScreen.classList.add('hidden');
}
function showElement(elementId){
    const playGroundScreen = document.getElementById(elementId)
    playGroundScreen.classList.remove('hidden');
}