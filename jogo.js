

const DIST_SALTO = 66;
const MARGIN_FIX = 4;

const pieces = buildGameBoard(NUM_ROWS, NUM_COLS);
const board = document.querySelector('.tabuleiro');

const player = new Piece(pieces.player.x, pieces.player.y);
const playerElement = creatBoardPiece(player, 'player');

function creatBoardPiece(piece, className){
 piece.insertElementInto(className, board);
    
    return piece.element;
}


window.addEventListener("keydown", function (event) {
    const next = player.nextPosition(event.code);

    if (verifyPosition(next)) {
        player.moveTo(next, playerElement);

    }
})

function verifyPosition(position) {

    let { x, y } = position;

    return boardMap[x][y] !== '#';
}

function calculaPosicao(qtd) {
    return `${qtd * DIST_SALTO + MARGIN_FIX}px`;
}

