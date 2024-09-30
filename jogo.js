import Piece from "./piece.js";
import { buildGameBoard, boardMap } from "./board.js";

const pieces = buildGameBoard();
const board = document.querySelector('.tabuleiro');

const playerPiece = creatBoardPiece(pieces.player, 'player');

function creatBoardPiece(piecePosition, className) {
    const piece = new Piece(piecePosition.x, piecePosition.y);
    piece.insertElementInto(className, board);



    return piece;
}

for (let i = 0; i < pieces.block.length; i ++){
    creatBoardPiece(pieces.block[i], 'block');
}

window.addEventListener("keydown", function (event) {
    const next = playerPiece.nextPosition(event.code);

    if (verifyPosition(next)) {
        playerPiece.moveTo(next);

    }
})

function verifyPosition(position) {

    let {x: j, y:i} = position;

    return boardMap[i][j] !== '#';
}