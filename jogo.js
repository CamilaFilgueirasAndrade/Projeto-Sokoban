function Player(x, y){
    this.x = x;
    this.y = y;
}
const player = new Player(0, 0);


const playerElement = document.querySelector('.player');


playerElement.addEventListener("click", function () {
    window.alert("Clicou no jogador");
})

window.addEventListener("keydown", function (event) {
    nextPosition(event.code);
    
    
})

const celulas = document.querySelectorAll('.cell');
console.log(celulas);

function nextPosition(keycode) {
    if (keycode === "ArrowUp") player.x--;
    if (keycode === "ArrowDown") player.x++;
    if (keycode === "ArrowLeft") player.y--;
    if (keycode === "ArrowRight") player.y++;

    console.log(keycode, player);

    const k = player.x*4+player.y;
    
    celulas[k].append(playerElement);
}

