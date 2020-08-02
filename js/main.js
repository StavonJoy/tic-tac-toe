/*------Constants------*/

const colors = {
    empty: null,
    playerX: 1,
    player0: -1
}
const winCombos = {
    topRow: [0, 1, 2],
    midRow: [3, 4, 5],
    btmRow: [6, 7, 8],
    leftColumn: [0, 3, 6],
    midColumn: [1, 4, 7],
    rightColumn: [2, 5, 8],
    diagDown: [0, 4, 8],
    diagUp: [6, 4, 2]
}
/*------Variables (state)------*/

let board, turn, winner;

/*------Cached Element References------*/

// You might choose to put your game status here
const gameStatus;
const resetButton;

// Store the 9 elements that represent the squares on the page
// topLeft, topMid, topRight, midLeft, midMid, midRight, btmLeft, btmMid, btmRight
const squaresArray = document.getElementsByClassName('board');
const resetBtn = document.getElementsByID('resetBtn');


// const topLeft = document.getElementById('sq0');
// const topMid = document.getElementById('sq1');
// const topRight = document.getElementById('sq2');
// const midLeft = document.getElementById('sq3');
// const midMid = document.getElementById('sq4');
// const midRight = document.getElementById('sq5');
// const btmLeft = document.getElementById('sq6');
// const btmMid = document.getElementById('sq7');
// const btmRight = document.getElementById('sq8');


/*------Event Listeners------*/

// This is where you should put the event listener
// for a mouse-click
// when player clicks, if square is available, put X/O in square, turn background color to the player's, and check if player wins. If player doesn't win, switch turn.
document.getElementsByID('resetBtn').addEventListener('click', reset());


/*------Functions------*/



// Initialization function:

function init() {
    let board = [null, null, null, null, null, null, null, null, null];
    let winner = null;
    let turn = 1;
    render();
}
    
    // render the state variables:
        // render the board
            // Loop through the 9 square elements. Use index of the iteration to access the mapped value from the board. Set background color of current element.

function render() {

}
        // render a message
            // if winner has value other than null, render whose turn it is using color name for the player (converting it to upper case)
            // if winner === 'T' (tie), render tie message
            // otherwise, render a congrats message to winning player, use color name for the player(convert to uppercase)
    // wait for user to click a square
         


// On-Click function:
    // When a square is clicked, index the square that was clicked(extract index from id, **or** loop through and break when current square element = event object's target)
    // If board has a value at the index, immediately return, square is already taken
    // If winner !== null, immediately return, game is over
    // Update board array at the index with value 'turn'
    // Flip turns by multiplying turn by -1(flips to -1 and vice/versa)
    // Set the winner viarable if there's a winner
        // loop through each winning combination arrays as defined
        // total up the three board positions using 3 indexes in the current combo
        // convert total to absolute value (convert negative total to positive)
        // if total === 3, winner! Set winner to the board's value at the index set by the first index in the combo array
        // exit loop
// If there's no winner, check if there's a tie
    // set winner to 'T' if there are no more nulls in the board array
// All state has been updated, so render the state to the page

function reset() {
    // run this on click of reset
    init();
    console.log('reset');
}


















// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so


// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is


// when replay button is clicked do steps 4.1 (initialize state variables), and 4.2(render)




// /*----- constants -----*/
// const lookup = {
//     '1': 'purple',
//     '-1': 'lime',
//     'null': 'white'
//   };
  
//   const winningCombos = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];
  
//   /*----- app's state (variables) -----*/
//   let board, turn, winner;
  
//   /*----- cached element references -----*/
//   const squares = document.querySelectorAll('td div');
//   const message = document.querySelector('h1');
  
//   /*----- event listeners -----*/
//   document.querySelector('table').addEventListener('click', handleMove);
//   document.querySelector('button').addEventListener('click', initialize);
  
//   /*----- functions -----*/
  
//   initialize();
  
//   function handleMove(evt) {
//     // obtain index of square
//     const idx = parseInt(evt.target.id.replace('sq', ''));
//     // check if square is available and return if not
//     if (board[idx] || winner) return;
//     // update state (board, turn, winner)
//     board[idx] = turn;
//     turn *= -1;
//     winner = getWinner();
//     render();
//   }
  
//   function getWinner() {
//     for (let i = 0; i < winningCombos.length; i++) {
//       if (Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]) === 3) return board[winningCombos[i][0]];
//     }
//     // Less elegant approach:
//     // if (Math.abs(board[0] + board[1] + board[2]) === 3) return board[0];
//     // if (Math.abs(board[3] + board[4] + board[5]) === 3) return board[3];
//     // if (Math.abs(board[6] + board[7] + board[8]) === 3) return board[6];
//     // if (Math.abs(board[0] + board[3] + board[6]) === 3) return board[0];
//     // if (Math.abs(board[1] + board[4] + board[7]) === 3) return board[1];
//     // if (Math.abs(board[2] + board[5] + board[8]) === 3) return board[2];
//     // if (Math.abs(board[0] + board[4] + board[8]) === 3) return board[0];
//     // if (Math.abs(board[2] + board[4] + board[6]) === 3) return board[2];
//     if (board.includes(null)) return null;
//     return 'T';
//   }
  
//   function render() {
//     board.forEach(function(sq, idx) {
//       squares[idx].style.background = lookup[sq];
//     });
//     if (winner === 'T') {
//       message.innerHTML = 'Rats, another tie!';
//     } else if (winner) {
//       message.innerHTML = `Congrats ${lookup[winner].toUpperCase()}!`;
//     } else {
//       message.innerHTML = `${lookup[turn].toUpperCase()}'s Turn`;
//     }
//   }
  
//   function initialize() {
//     board = [null, null, null, null, null, null, null, null, null];
//     // OR initialize like this:
//     // board = new Array(9).fill(null);
//     turn = 1;
//     winner = null;
//     render();
//   }