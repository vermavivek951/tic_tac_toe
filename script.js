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
    field.textContent = Gameboard.getSign(index);
    board.appendChild(field);
}

function drawBoard() {
    for(let i=0;i<9;i++){
        addField(i);
    }
}
function populateBoard() {
    for(let i=0;i<9;i++) {

        if(i===2)
        Gameboard.setSign(i,"x");
        else
        Gameboard.setSign(i,"o");

    }
};


populateBoard();
drawBoard();

