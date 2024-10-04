
import Piece from "./piece.js";

export function buildGameBoard(level) {
    const boardMap = level.trim().split('\n');

    const game = document.getElementById("jogo");
    const board = createGameElement('div', 'tabuleiro', game);
    let numberOfGoal = 0, block = [], player = null;


    for (let i = 0; i < boardMap.length; i++) {
        const row = createGameElement('div', 'row', board);

        for (let j = 0; j < boardMap[i].length; j++) {
            const cell = createGameElement('div', 'cell', row);

            const char = boardMap[i][j]
            const position = { x: j, y: i };

            if (char === '#') cell.classList.add('wall');
            if (char === ' ') cell.classList.add('empty');
            if (char === '_') cell.classList.add('empty');
            if (char === 'P') player = createBoardPiece(position, 'player');
            if (char === 'B') block.push(createBoardPiece(position, 'block'));
            if (char === 'G') {
                cell.classList.add('goal');
                numberOfGoal++;
            };

        }
    }

    return { boardMap, pieces: {block, player}, numberOfGoal };
}

export function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName);
    element.classList.add(className);
    parentNode.append(element);

    return element;
}


function createBoardPiece(piecePosition, className) {
    const board = document.querySelector('.tabuleiro');
    const piece = new Piece(piecePosition.x, piecePosition.y);

    piece.insertElementInto(className, board);

    return piece;
}