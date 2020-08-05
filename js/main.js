/*------Constants------*/
const colors = {
    'null': 'red',
    '1': 'O',
    '-1': 'X',
}


/*------Variables (state)------*/

// Variables might include (board/turn/winner)
let board, turn, winner;
let turnCount = 1;
/*------Cached Element References------*/

let boardEl = document.getElementsByClassName('board')
// You might choose to put your game status here
let gameStatus = document.getElementById('message')

/*------Event Listeners------*/
// 
// This is where you should put the event listener
// for a mouse-click
document.getElementById('board').addEventListener('click', clickHandle);
document.getElementById('reset').addEventListener('click', reset);

/*------Functions------*/


// Some functions you might choose to use:


// Initialization function:
// let winner: null;
// let turn: 1;
// let player: 1;
function init() {
    board = [null, null, null, null, null, null, null, null, null];
    winner = null;
    turn = 1;
}
// render the board
// loop over the 9 elements, for each:
//  - use index of the iteration to access mapped value from the board array
//  - set the background color of current element using the value as a key on the colors lookup object


// On-Click function:
// Set up what happens when one of the elements
function clickHandle(evt) {
    let squareIndex = parseInt(evt.target.id.replace('sq',''));
        console.log(squareIndex);
        if(board[squareIndex] !== null){
            return;
        }
    render(squareIndex);
}



// Check winner function:
// checkWin();
// forEach winCombos, compare playerChoices to each array in winCombos
// if one matches, set winner to the player

// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so

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
         gameStatus.textContent = `Congrats ${colors[turn]}!`;
        }
    } return winner;
}


// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is
function render(squareIdx){
    if (winner === null) {
        addLetter = document.getElementById(`sq${squareIdx}`);
        board[squareIdx] = turn;
        if (turn === 1) {
            addLetter.textContent = "X";
            gameStatus.textContent = "Player O's turn";
        }   else {
            addLetter.textContent = "O";
            gameStatus.textContent = "Player X's turn";
        }
    }
    turn *= -1;
    checkWin();
}

function reset() {
    console.log('hello')
}
init();