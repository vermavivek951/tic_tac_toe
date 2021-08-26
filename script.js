const playerFactory = (name) => {
    return {name};
}


const Gameboard = (() => {
    let gameboard = ["x","x","x","o","o","o","o","x","x"];

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

    return {setSign,getSign ,reset, printGameBoard};

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
        updateBoardElement(i,"x");
    })
}


const resetBtn = document.getElementById('ResetButton');
resetBtn.addEventListener('click' , () => {
    for(let i=0;i<9;i++) {
            fieldArr[i].textContent = "";
            Gameboard.setSign(i , "");
        }
});
