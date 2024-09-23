const player = new Player(0, 0);
const celulas = document.querySelectorAll('.cell');
const playerElement = document.querySelector('.player');

window.addEventListener("keydown", function (event) {
    const next = player.nextPosition(event.code);
    

    if (verifyPosition(next)) {
        let K = next.x * 4 + next.y;
        player.moveTo(next, playerElement, celulas[K]);
        
    }
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
    
    this.moveTo = function(position, element, parent) {
        
        let { x, y } = position;
        this.x = x;
        this.y = y;
        
        parent.append(element);
    
    }
}



function verifyPosition(position) {
    console.log(position);
    let { x, y } = position;

    return x >= 0 && x < 4 && y >= 0 && y < 4;

}




