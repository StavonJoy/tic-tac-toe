/*------Constants------*/
const colors = {
    playerX: 'red',
    playerO: 'blue',
    emptySqr: 'white',
}

const winCombos = {
    topRow: [sq0, sq1, sq2],
    midRow: [sq3, sq4, sq5],
    btmRow: [sq6, sq7, sq8],
    leftColumn: [sq0, sq3, sq6],
    midColumn: [sq1, sq4, sq7],
    rightColumn: [sq2, sq5, sq8],
    diagDown: [sq0, sq4, sq8],
    diagUp: [sq6, sq4, sq2]
}
/*------Variables (state)------*/

// Variables might include (board/turn/winner)
const playerXChoices = [];
const playerOChoices = [];
let board = [];
let winner;
/*------Cached Element References------*/

const sqEl0 = document.getElementById('sq0');
const sqEl1 = document.getElementById('sq1');
const sqEl2 = document.getElementById('sq2');
const sqEl3 = document.getElementById('sq3');
const sqEl4 = document.getElementById('sq4');
const sqEl5 = document.getElementById('sq5');
const sqEl6 = document.getElementById('sq6');
const sqEl7 = document.getElementById('sq7');
const sqEl8 = document.getElementById('sq8');
// You might choose to put your game status here


/*------Event Listeners------*/
// 
// This is where you should put the event listener
// for a mouse-click
 sqEl0.addEventListener('click', function(){
     console.log('sq0');
    //create function for each square
 })
 sqEl1.addEventListener('click', function(){
    console.log('sq1');
})
sqEl2.addEventListener('click', function(){
    console.log('sq2');
})
sqEl3.addEventListener('click', function(){
    console.log('sq3');
})
sqEl4.addEventListener('click', function(){
    console.log('sq4');
})
sqEl5.addEventListener('click', function(){
    console.log('sq5');
})
sqEl6.addEventListener('click', function(){
    console.log('sq6');
})
sqEl7.addEventListener('click', function(){
    console.log('sq7');
})
sqEl8.addEventListener('click', function(){
    console.log('sq8');
})

/*------Functions------*/


// Some functions you might choose to use:

// Initialization function:
// let winner: null;
// let turn: 1;
// let player: 1;

// On-Click function:
// Set up what happens when one of the elements
// is clicked
// if element === ' ', proceed 
// if turn === 1, playerXclick
// else, playerOClick
// 


function playerXClick0() {
    sqEl0.innerText = 'X';
    sqEl0.color = white;
}
function playerXClick1() {
    sqEl1.innerText = 'X';
    sqEl1.color = white;
}
// set inner text to 'X'
// set color of text to pink
// store id of square to an array


// Check winner function:
// checkWin();
// forEach winCombos, compare playerChoices to each array in winCombos
// if one matches, set winner to the player


// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so


// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is
function render() {
    
}