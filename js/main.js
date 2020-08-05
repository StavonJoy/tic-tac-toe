const players = {
    '1': 'O',
    '-1': 'X',
}

let board, turn, winner;

let boardEl = document.getElementsByClassName('board')

let gameStatus = document.getElementById('message')

document.getElementById('board').addEventListener('click', clickHandle);

function init() {
    board = [null, null, null, null, null, null, null, null, null];
    winner = null;
    turn = 1;
}

function clickHandle(evt) {
    let squareIndex = parseInt(evt.target.id.replace('sq',''));
        if(board[squareIndex] !== null){
            return;
        }
    render(squareIndex);
}

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]
function checkWin() {
    for (let i = 0; i < winCombos.length; i++) {
        if (Math.abs(board[winCombos[i][0]] + board[winCombos[i][1]] + board[winCombos[i][2]]) === 3) {
         winner = turn; 
         confetti.start(2000);
         gameStatus.textContent = `Congrats ${players[turn]}, you toe-totally win!!`;
        }
    } return winner;
}

function render(squareIdx){
    if (winner === null) {
        addLetter = document.getElementById(`sq${squareIdx}`);
        board[squareIdx] = turn;
        if (turn === 1) {
            addLetter.textContent = 'X';
            gameStatus.textContent = "You're up Player O!";
        }   else {
            addLetter.textContent = 'O';
            gameStatus.textContent = "Player X, it's your turn!";
        }
    }
    turn *= -1;
    checkWin();
}


init();