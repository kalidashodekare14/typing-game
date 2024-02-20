
const audio = new Audio();

function handleKeyBoardButton(event){
    const playerPress = event.key
    console.log(playerPress)
    
    if(playerPress === 'Escape'){
        gameOver();
    }

    const currentAlphabetIdValue = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetIdValue.innerText;
    const currentAlphabetValue = currentAlphabet.toLowerCase();
    // console.log(playerPress, currentAlphabetValue);

    if(playerPress == currentAlphabetValue){
        console.log('you are winner');
        audio.src = "../audio/success.mp3"
        audio.play();
        const currentScore = getElementValueById('score');
        const updateScore = currentScore + 1;

        setElementValueById('score', updateScore)




        // score lojig 
        // const currentScoreElement = document.getElementById('score');
        // const scoreElement = currentScoreElement.innerText;
        // const convertScore = parseInt(scoreElement);

        // const newScore = convertScore + 1;
        // currentScoreElement.innerText = newScore



        removeBackgroundColorSet(playerPress)
        continueGame();
    }
    else{
        console.log('you are god point')
        // life lojig
        audio.src = "../audio/wrong.mp3"
        audio.play();
        const currentSetLife = getElementValueById('life');
        const lifeUpdate = currentSetLife - 1;
        setElementValueById('life', lifeUpdate);

        if(lifeUpdate === 0){
            console.log('game over');
            gameOver();

        }


        // const currentLifeElement = document.getElementById('life');
        // const lifeElement = currentLifeElement.innerText;
        // const convertLife = parseInt(lifeElement);

        // const newLife = convertLife - 1;

        // currentLifeElement.innerText = newLife;


        

    }
}


document.addEventListener('keyup', handleKeyBoardButton)


function continueGame(){
    const alphabets = randomAlphabetNumber();

    const currentAlphabets = document.getElementById('current-alphabet');
    currentAlphabets.innerText = alphabets;

    getBackgroundColorSet(alphabets);
}


function play(){
    audio.src = "../audio/click.mp3";
    audio.play();
    hideElementById('home');
    hideElementById('play-score');
    showElementById('play-ground');

    setElementValueById('life', 5);
    setElementValueById('score', 0);


    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('play-score');

    const lastScore = getElementValueById('score');
    setElementValueById('score-count', lastScore);


    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorSet(currentAlphabet);

}