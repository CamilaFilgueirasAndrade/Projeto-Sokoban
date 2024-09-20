const player = new Player(0, 0);
const celulas = document.querySelectorAll('.cell');
const playerElement = document.querySelector('.player');

window.addEventListener("keydown", function (event) {
    const next = player.nextPosition(event.code);

    if (verifyPosition(next)) player.movePlayer(next);
})

function Player(x, y) {
    this.x = x;
    this.y = y;

    this.nextPosition = function(keycode) {
        let { x, y } = player;
    
        if (keycode === "ArrowUp") x--;
        if (keycode === "ArrowDown") x++;
        if (keycode === "ArrowLeft") y--;
        if (keycode === "ArrowRight") y++;
        
        return { x, y };
    
    }

    this.movePlayer = function(position) {
        let { x, y } = position;
        this.x = x;
        this.y = y;
    
        const k = x * 4 + y;
    
        celulas[k].append(playerElement);
        console.log(position);
    }
}

function nextPosition(keycode) {
    let { x, y } = player;

    if (keycode === "ArrowUp") x--;
    if (keycode === "ArrowDown") x++;
    if (keycode === "ArrowLeft") y--;
    if (keycode === "ArrowRight") y++;
    
    console.log(keycode, player);
    return { x, y };

}

function verifyPosition(position) {
    console.log(position);
    let { x, y } = position;

    return x >= 0 && x < 4 && y >= 0 && y < 4;

}




