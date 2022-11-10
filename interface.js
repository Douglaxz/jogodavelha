document.addEventListener('DOMContentLoaded',()=>{
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener('click',handleClick);
    })
});


function handleClick(event){
    let square = event.target;
    let position = square.id;
    if(handleMove(position)){
        setTimeout(()=>{
            alert("O jogo acabou - O Vencedor foi: " + playerTime);
        },10);
        
    }
    updateSquare(position);
}

function updateSquare(position){
    console.log(position);
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

function updateSquares(){
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if(symbol != ''){
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })    
}

function reiniciar(){
    
    let board = ['','','','','','','','',''];
    let playerTime = "0";
    let gameOver = false;
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];
        square.innerHTML = `<div class=''></div>`

    })   
    alert("O Jogo será reiniciado");
}