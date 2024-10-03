import {lvl0, lvl1, lvl2} from "./niveis.js"

function strToBoardMap(level){
    const line = level.trim().split('\n');
    console.log(line);
    
    return line;
}
export const boardMap = strToBoardMap(lvl2);

export function buildGameBoard() {
    const NUM_ROWS = boardMap.length;
    const pieces = {
        block: []
    };
    let numberOfGoal = 0;
    
    const game = document.getElementById("jogo");
    const board = createGameElement('div', 'tabuleiro', game);
    
    for (let i = 0; i < NUM_ROWS; i++) {
        const row = createGameElement('div', 'row', board);
        const NUM_COLS = boardMap[i].length;

        for (let j = 0; j < NUM_COLS; j++) {
            const cell = createGameElement('div', 'cell', row);

            const char = boardMap[i][j]
            const position = { x: j, y: i };

            if (char === '#') cell.classList.add('wall');
            if (char === ' ') cell.classList.add('empty');
            if (char === '_') cell.classList.add('empty');
            if (char === 'G') {
                cell.classList.add('goal');
                numberOfGoal++;
            };
            if (char === 'P') pieces.player = position;
            if (char === 'B') pieces.block.push(position);

        }
    }

    return { pieces, numberOfGoal };
}

export function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName);
    element.classList.add(className);
    parentNode.append(element);
    return element;
}