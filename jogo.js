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

/** Tarefa #1: implementar função para localizar uma caixa à partir de um
 * uma dada coordenada.
*/
function findBoxAtPosition(position) {
    // modificar linha(s) de código abaixo
    return boxes.find((boxes) => position.y === boxes.y && position.x === boxes.x);
}
console.log(findBoxAtPosition({ x: 1, y: 2 }));
console.log(findBoxAtPosition({ x: 4, y: 4 }));
console.log(findBoxAtPosition({ x: 5, y: 5 }));

/** Tarefa #2: modificar a função abaixo de forma a tratar tando a movimentação
 * do jogador quanto das caixas.
*/
function handlePieceMovement(keycode) {
    // Variável destinada ao pré-cálculo da posição do jogador
    const next = player.nextPosition(keycode);
    // (Modificar) Variável para detectar a "presença" de outra peça
    const foundPice = null;

    // Implementar lógica caso encontre uma outra peça no caminho.
    if (foundPice) {

    }
    // E caso não encontre outra peça...
    else {
        // Faça as modificações que forem necessárias para manter o
        // funcionamento do jogo.
        if (verifyPosition(next)) {
            player.moveTo(next);
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