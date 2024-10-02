export const boardMap = [
    ["#", "#", "#", "#", "#", "#", "#", "#"],
    ["#", ".", ".", ".", ".", ".", ".", "#"],
    ["#", ".", ".", ".", "#", ".", ".", "#"],
    ["#", ".", "#", ".", "G", ".", ".", "#"],
    ["#", ".", ".", ".", "B", "#", ".", "#"],
    ["#", ".", "G", "B", "P", "B", "G", "#"],
    ["#", ".", ".", ".", ".", ".", ".", "#"],
    ["#", "#", "#", "#", "#", "#", "#", "#"]
];

const NUM_ROWS = boardMap.length;
const NUM_COLS = boardMap[0].length;

export function buildGameBoard() {
    const pieces = {
        block: []
    };
    let numberOfGoal = 0;

    const game = document.getElementById("jogo");
    const board = createGameElement('div', 'tabuleiro', game);
    
    for (let i = 0; i < NUM_ROWS; i++) {
        const row = createGameElement('div', 'row', board);

        for (let j = 0; j < NUM_COLS; j++) {
            const cell = createGameElement('div', 'cell', row);

            const char = boardMap[i][j]
            const position = {x: j, y:i};

            if (char === '#') cell.classList.add('wall');
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