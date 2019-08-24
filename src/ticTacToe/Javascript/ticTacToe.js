window.onload= function (){

var playerOne = 'X';
var playerTwo = 'O';
var currentTurn = playerOne;

var tictactable = document.querySelector('.tictactable');
tictactable.addEventListener('click', function placeMark(e) {
    e.target.innerHTML = currentTurn;
    currentTurn = currentTurn == playerOne ? playerTwo : playerOne;
});

}