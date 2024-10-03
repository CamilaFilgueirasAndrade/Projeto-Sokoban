import { createGameElement } from "./board.js";


const DIST_SALTO = 66;
const MARGIN_FIX = 4;

function Piece(x, y) {
    this.x = x;
    this.y = y;

    this.nextPosition = function (keycode) {
        let { x, y } = this;

        if (keycode === "ArrowUp") y--;
        if (keycode === "ArrowDown") y++;
        if (keycode === "ArrowLeft") x--;
        if (keycode === "ArrowRight") x++;

        return { x, y };
    }

    this.moveTo = function (position) {

        let { x, y } = position;
        this.x = position.x;
        this.y = position.y;

        this.updateElementoPosition();
    }

    function contaMovimento(){
        
    }

    this.insertElementInto = function (className, parent) {
        this.elemento = createGameElement('div', className, parent);

        this.updateElementoPosition();
    }
   
    this.updateElementoPosition = function () {
        this.elemento.style.top = calculaPosicao(this.y);
        this.elemento.style.left = calculaPosicao(this.x);
    }
    
    //Função privada
    
    function calculaPosicao(qtd) {
        return `${qtd * DIST_SALTO + MARGIN_FIX}px`;
    }
}

export default Piece;