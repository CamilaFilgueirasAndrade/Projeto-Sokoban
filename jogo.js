const player = new Player(0, 0);
const celulas = document.querySelectorAll('.cell');
const playerElement = document.querySelector('.player');

const DIST_SALTO = 66;
const MARGIN_FIX = 4;

playerElement.style.top = calculaPosicao(0);
playerElement.style.left = calculaPosicao(0);


window.addEventListener("keydown", function (event) {
    const next = player.nextPosition(event.code);
    
    
    if (verifyPosition(next)) {
        let K = next.x * 4 + next.y;
        player.moveTo(next, playerElement);
        
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
    
    this.moveTo = function(position, element, _parent) {
        
        let { x, y } = position;
        this.x = x;
        this.y = y;
        
        element.style.top = calculaPosicao(this.x);
        element.style.left = calculaPosicao(this.y);
        
    
    }
}



function verifyPosition(position) {
    console.log(position);
    let { x, y } = position;

    return x >= 0 && x < 4 && y >= 0 && y < 4;

}

function calculaPosicao(qtd) {
return `${qtd * DIST_SALTO  + MARGIN_FIX}px`;
}



