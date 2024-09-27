const DIST_SALTO = 66;
const MARGIN_FIX = 4;

function Piece(x, y) {
    this.x = x;
    this.y = y;

    this.nextPosition = function (keycode) {
        let { x, y } = player;

        if (keycode === "ArrowUp") x--;
        if (keycode === "ArrowDown") x++;
        if (keycode === "ArrowLeft") y--;
        if (keycode === "ArrowRight") y++;

        return { x, y };

    }

    this.moveTo = function (position) {

        let { x, y } = position;
        this.x = position.x;
        this.y = position.y;

        this.updateElementoPosition();
    }

    this.insertElementInto = function (className, parent) {
        this.elemento = createGameElement('div', className, parent);

        this.updateElementoPosition();
    }
   
    this.updateElementoPosition = function () {
        this.elemento.style.top = calculaPosicao(this.x);
        this.elemento.style.left = calculaPosicao(this.y);
    }
    
    //Função privada
    
    function calculaPosicao(qtd) {
        return `${qtd * DIST_SALTO + MARGIN_FIX}px`;
    }
}
