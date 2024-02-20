
const audio = new Audio();

function handleKeyBoardButtonPress(event){
   const playerPress = event.key

   const currentAlphabetElement = document.getElementById('current-alphabet');
   const alPhabetElement = currentAlphabetElement.innerText;
   const element = alPhabetElement.toLowerCase();
   console.log(element, playerPress);

 // check matched or not
    if(playerPress === element){
        console.log('you are winer')
        audio.src = ""
        audio.play();
       
        removeBackgroundColorById(playerPress);
        continueGame();
    }
    else{
        console.log('you mis point')
    }
}

document.addEventListener('keyup', handleKeyBoardButtonPress)


function continueGame(){
    const alphabets = getARandomAlphabet()
    console.log('text show', alphabets);

    // random set for screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabets;

    // set keyboard color
    addBackgroundColorById(alphabets);
}

function play(){
    hideElementById('home');
    showElementById('play-ground');
    continueGame();
}