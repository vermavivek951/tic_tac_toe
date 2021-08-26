const playerFactory = (name) => {
    return {name};
}


const Gameboard = (() => {
    const gameboard = ["x","x","x","o","o","o","o","x","x"];

    const setSign = (index , sign) => {
        if(index > gameboard.length) {
            return;
        } 
        gameboard[index] = sign;
    };
    return {setSign , gameboard};

})();

const player = playerFactory("Player");
const computer = playerFactory("Computer");


const board = document.querySelector('.Board');

function addField(index) {
    const field = document.createElement('div');
    field.classList = "field";
    field.textContent = `${Gameboard.gameboard[index]}`;

    board.appendChild(field);
}

function drawBoard() {
    for(let i=0;i<9;i++){
        addField(i);
    }
}

drawBoard();