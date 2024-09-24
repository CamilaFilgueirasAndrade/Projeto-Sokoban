
function rule0(celula, k) {
    if( k <= 4) {
        celula.classList.add('empty');
     }
    }
    
    buildGameBoard(8, 8, rule0);

    function buildGameBoard(numRows, numCols, drawRule) {
        const game = document.getElementById("jogo");
        const board = document.createElement('div');
        board.classList.add('tabuleiro');
        
        
        for (let k = 0;  k < numRows; k++) {
            const row = document.createElement('div');
            row.classList.add('row');
            board.append(row);
            
            for (let i =0; i <numCols; i++) {
                const celula = document.createElement('div');
                celula.classList.add('cell');
                row.append(celula);
                
                drawRule(celula, numRows, numCols, k, i);
            }
        }
        game.append(board);
    }

    const player = new Player(0, 0);
    const playerElement = document.querySelector('.player');
    
    const DIST_SALTO = 66;
    const MARGIN_FIX = 4;

playerElement.style.top = calculaPosicao(0);
playerElement.style.left = calculaPosicao(0);


window.addEventListener("keydown", function (event) {
    const next = player.nextPosition(event.code);
    
    
    if (verifyPosition(next)) {
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
    
    this.moveTo = function(position, element) {
        
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



