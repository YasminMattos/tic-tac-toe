
window.onload = function() {
    var board = document.querySelector('.board-js');
    board.addEventListener('click', addX);
};

var centinel= true;
function addX (event) {
    if (centinel) 
        event.target.textContent = 'X';
    else 
        event.target.textContent = 'O';
    centinel = !centinel;
}
/*
function verificaFin(O,X){
    var fin=false;
    if('X'==3){
        fin=true;
        mensaje("!GANASTE!");
    }
    if('O'==3){
        fin=true;
        mensaje("¡Perdiste!");
    }

    if(fin){
        board.addEventListener("click",iniciar,false);
    }
    return fin;
}
*/

function clear() {
    document.getElementsByClassName('board').reset();
}