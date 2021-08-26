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
    
    return {setSign,getSign};

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


function updateBoardElement(index , sign) {
    const field = document.querySelectorAll('.field');
    const fieldArr = Array.from(field);

    for(let i=0;i<9;i++) {
        if(fieldArr[i].getAttribute("data-key") === `${index}`) {
            fieldArr[i].textContent = `${sign}`;
        }
    }
}    


drawEmptyBoard();

