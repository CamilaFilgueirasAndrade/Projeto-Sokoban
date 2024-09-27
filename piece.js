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

    this.moveTo = function (position, element) {

        let { x, y } = position;
        this.x = x;
        this.y = y;

        element.style.top = calculaPosicao(this.x);
        element.style.left = calculaPosicao(this.y);


    }

    this.insertElementInto = function(className, parent){
        this.elemento = createGameElement('div', className, parent);
    
        this.elemento.style.top = calculaPosicao(this.x);
        this.elemento.style.left = calculaPosicao(this.y);
        
    }
}

