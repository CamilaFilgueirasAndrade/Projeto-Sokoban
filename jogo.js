import Piece from "./piece.js";
import { buildGameBoard, boardMap } from "./board.js";

const pieces = buildGameBoard();
const board = document.querySelector('.tabuleiro');

const player = creatBoardPiece(pieces.player, 'player');

function creatBoardPiece(piecePosition, className) {
    const piece = new Piece(piecePosition.x, piecePosition.y);
    piece.insertElementInto(className, board);

    return piece;
}

window.addEventListener("keydown", function (event) {
    const next = player.nextPosition(event.code);

    if (verifyPosition(next)) {
        player.moveTo(next);

    }
})

function verifyPosition(position) {

    let {x: j, y:i} = position;

    return boardMap[i][j] !== '#';
}

