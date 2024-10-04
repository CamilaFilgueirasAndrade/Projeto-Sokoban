import Piece from "./piece.js";
import { buildGameBoard } from "./board.js";
import { lvl0, lvl1, lvl2 } from "./niveis.js"

const { boardMap, pieces, numberOfGoal } = buildGameBoard(lvl0);
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
        if (levelCompleted()) setTimeout(() => alert("Objetivo concluido!"), 200);
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

function levelCompleted() {
    let count = 0;

    for (const position of boxes) {
        let { x: j, y: i } = position;

        if (boardMap[i][j] === 'G') count++;
    }

    return count == numberOfGoal;
}