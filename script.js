const playerFactory = (name) => {
    return {name};
}


const Gameboard = (() => {
    let gameboard = ["","","","","","","","",""];

    const setSign = (index , sign) => {
        if(index > gameboard.length) {
            return;
        } 
        gameboard[index] = sign;
    };

    const getSign = (index) => {
        if(index > gameboard.length) {
            return;
        } 
        return gameboard[index];
    }
    
    const reset = () => {
        for(let i=0;i<9;i++) {
            gameboard[i] = "";
        }
    }

    const printGameBoard = () => {
        return gameboard;
    }

    const isIndexOccupied = (index) => {
        if(gameboard[index] === "")
        {
            return false;
        }
        else 
        return true;
    }

    const getEmptyIndexes = () => { 
        let emptyIndexArr = [];
        for(let i=0;i<9;i++) {
            if(gameboard[i]==="") {
                emptyIndexArr.push(i);
            }
        }

        return emptyIndexArr;
    }

    return {setSign,getSign ,reset, printGameBoard , isIndexOccupied , getEmptyIndexes};

})();

const player = playerFactory("Player");
const computer = playerFactory("Computer");


const board = document.querySelector('.Board');

function addField(index) {
    const field = document.createElement('div');
    field.classList = "field";
    field.setAttribute('data-key' , `${index}`);

    board.appendChild(field);
}


function drawEmptyBoard() {
    for(let i=0;i<9;i++){
        addField(i);
    }
}
drawEmptyBoard();


const totalFieldList = document.querySelectorAll('.field');
const fieldArr = Array.from(totalFieldList);


function updateBoardElement(index , sign) {
       
    for(let i=0;i<9;i++) {
        if(fieldArr[i].getAttribute("data-key") === `${index}`) {
            fieldArr[i].textContent = `${sign}`;
            Gameboard.setSign(index , sign);
        }
    }
}

for(let i=0;i<9;i++) {
    fieldArr[i].addEventListener('click' , () => {
        if(!(Gameboard.isIndexOccupied(i)))
        updateBoardElement(i,`${currentSignForPlayer}`);
        computerPlay();
    })
}


const resetBtn = document.getElementById('ResetButton');
resetBtn.addEventListener('click' , () => {
    for(let i=0;i<9;i++) {
            fieldArr[i].textContent = "";
            Gameboard.reset();
        }
});


//global sign
let currentSignForPlayer = "x";
let currentSignForComputer = "o";

function changeCurrentSignTo(sign) {
    currentSignForPlayer = sign;
    if(currentSignForPlayer=="x"){
        currentSignForComputer="o";
    }
    else
    currentSignForComputer="x";
}

const signSelectBtn = document.querySelectorAll('.sign');
const signSelectArr = Array.from(signSelectBtn);

for(let i=0;i<2;i++) {
    signSelectArr[i].addEventListener('click' , () => {
        let sign = signSelectArr[i].textContent;
        changeCurrentSignTo(`${sign}`);
    })
}


function computerPlay() {
    const emptyIndexArr = Gameboard.getEmptyIndexes();

    let randomIndex = Math.floor(Math.random() * emptyIndexArr.length);
    

    let computerChoice = emptyIndexArr[randomIndex];
    //console.log({randomIndex , computerChoice , emptyIndexArr});

    updateBoardElement(computerChoice , `${currentSignForComputer}`);
}