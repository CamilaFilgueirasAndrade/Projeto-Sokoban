import Piece from "./piece.js";
import { buildGameBoard, boardMap } from "./board.js";

const pieces = buildGameBoard();
const board = document.querySelector('.tabuleiro');

const player = creatBoardPiece(pieces.player, 'player');
const boxes = [];

for (let i = 0; i < pieces.block.length; i++) {
    let piece = creatBoardPiece(pieces.block[i], 'block');
    boxes.push(piece);
}

function handleKeyDownEvent(keycode) {
    const next = player.nextPosition(keycode);

    if (verifyPosition(next)) {
        player.moveTo(next);

    }

}

window.addEventListener("keydown", function (event) {
    // event.preventDefault();

    handlePieceMovement(event.code);
});

function findBoxAtPosition(position) {

    return boxes.find((boxes) => position.y === boxes.y && position.x === boxes.x);
}

function handlePieceMovement(keycode) {

    const nextPlayerPosition = player.nextPosition(keycode);
    const block = findBoxAtPosition(nextPlayerPosition);

    
    if (block) {
        const nextBlockPosition1 = block.nextPosition(keycode);
        const nextBlockPosition2 = findBoxAtPosition(nextBlockPosition1);

        const boxCanMove = verifyPosition(nextBlockPosition1);

    
        if (boxCanMove && !nextBlockPosition2) {
            block.moveTo(nextBlockPosition1);
            player.moveTo(nextPlayerPosition);
        }
    }
    
    else {
      const playerCanMove = verifyPosition(nextPlayerPosition);

        if (playerCanMove) {
            player.moveTo(nextPlayerPosition);
        }
    }
}

function creatBoardPiece(piecePosition, className) {
    const piece = new Piece(piecePosition.x, piecePosition.y);
    piece.insertElementInto(className, board);



    return piece;
}

function verifyPosition(position) {

    let { x: j, y: i } = position;

    return boardMap[i][j] !== '#';
}