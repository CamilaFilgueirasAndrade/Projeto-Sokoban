import Piece from "./piece.js";
import { buildGameBoard, boardMap } from "./board.js";

const pieces = buildGameBoard();
const board = document.querySelector('.tabuleiro');

const playerPiece = creatBoardPiece(pieces.player, 'player');
const boxes = [];

for( let box of piences.boxes){
    let piece = creatBoardPiece(box, 'box')
}

for (let i = 0; i < pieces.block.length; i ++){
    creatBoardPiece(pieces.block[i], 'block');
    boxes.push(piece);
}

function handleKeyDownEvent(keycode){
    const next = playerPiece.nextPosition(keycode);
    
    if (verifyPosition(next)) {
        playerPiece.moveTo(next);
    
    }

}
window.addEventListener("keydown", function (event) {
    handleKeyDownEvent(event.code);

})

function creatBoardPiece(piecePosition, className) {
    const piece = new Piece(piecePosition.x, piecePosition.y);
    piece.insertElementInto(className, board);



    return piece;
}



function verifyPosition(position) {

    let {x: j, y:i} = position;

    return boardMap[i][j] !== '#';
}