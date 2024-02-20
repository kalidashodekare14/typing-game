
function hideElementById(elementId){
    const hideElement = document.getElementById(elementId);
    hideElement .classList.add('hidden');
}

function showElementById(elementId){
    const showElement = document.getElementById(elementId);
    showElement.classList.remove('hidden');
}

function getBackgroundColorSet(elementId){
    const setBackgroundColor = document.getElementById(elementId);
    setBackgroundColor.classList.add('bg-amber-400');
}
function removeBackgroundColorSet(elementId){
    const removeBackgroundColor = document.getElementById(elementId);
    removeBackgroundColor.classList.remove('bg-amber-400');
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValue = element.innerText;
    const value = parseInt(elementValue);
    return value
}

function setElementValueById(elementId, value){
    const setElement = document.getElementById(elementId);
    setElement.innerText = value
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}


function randomAlphabetNumber(){
    const alphabetRandomNumber = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetRandomNumber.split('');

    const randomNumber = Math.random() * 25;
    const random = Math.round(randomNumber);

    const alphabet = alphabets[random];
    return alphabet;
}