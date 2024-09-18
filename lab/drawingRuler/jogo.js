// buildGameBoard(8, 8, rule0);
buildGameBoard(8, 8, rule1);
// buildGameBoard(8, 8, rule1_1);
// buildGameBoard(8, 8, rule2);
// buildGameBoard(8, 8, rule3);
// buildGameBoard(8, 8, rule4);
// buildGameBoard(8, 8, rule5);
// buildGameBoard(8, 8, rule6);
// buildGameBoard(8, 8, rule7);
// buildGameBoard(8, 8, rule8);
// buildGameBoard(8, 8, rule9);
// buildGameBoard(8, 8, rule10);
// buildGameBoard(8, 8, rule11);
// buildGameBoard(8, 8, rule12);


function buildGameBoard(numRows, numCols, drawRule) {
    const game = document.getElementById("jogo");
    const board = document.createElement('div');
    board.classList.add('tabuleiro');


    for (let k = 0;  k < numRows; k++) {
       const row = document.createElement('div');
       row.classList.add('row');
       board.append(row);

       for (let i =0; i <numCols; i++) {
        const celula = document.createElement('div');
        celula.classList.add('cell');
        row.append(celula);
        
        drawRule(celula, numRows, numCols, k, i);
       }
    }
    game.append(board);
}
    
function rule0(celula, numCols, k,i) {
    if( k <= 4) {
    celula.classList.add('empty');
     }
}


function rule1(celula, numRows, numCols, k, i) {
    if ( k == 0 || i ==0 || k == numRows - 1 || i == numCols - 1)
        celula.classList.add('empty');
}   

function rule1_1(celula, numRows, numCols, k, i) {
    if (!( k == 0 || i ==0 || k == numRows - 1 || i == numCols - 1))
        celula.classList.add('empty');
} 

function rule2(celula, numCols, numRows, k,i) {
    if( k == 0) {
    celula.classList.add('empty');
     }
}

function rule3(celula, numCols, numRows, k,i) {
    if( i == 0) {
    celula.classList.add('empty');
     }
}

function rule4(celula, numCols, numRows, k,i) {
    if(k == 3 ) {
    celula.classList.add('empty');
     }
}

function rule5(celula, numCols, numRows, k,i) {
    if(i == 5) {
    celula.classList.add('empty');
     }
}

function rule6(celula, numCols, numRows, k,i) {
    if(k == 3 || i == 5) {
    celula.classList.add('empty');
     }
}

function rule7(celula, numCols, numRows, k,i) {
    if(k == 3 && i == 5) {
    celula.classList.add('empty');
     }
}

function rule8(celula, numCols, numRows, k,i) {
    if(k == i) {
    celula.classList.add('empty');
     }
}

function rule9(celula, numCols, numRows, k,i) {
    if(i % 2 == 1) {
    celula.classList.add('empty');
     }
}

function rule10(celula, numCols, numRows, k,i) {
    if(i % 2 == 0) {
    celula.classList.add('empty');
     }
}

function rule11(celula, numCols, numRows, k,i) {
    if(i + k == numRows - 1)  {
    celula.classList.add('empty');
     }
}

function rule12(celula, numCols, numRows, k,i) {
    if(i + k == numRows - 1 || k == i)  {
    celula.classList.add('empty');
     }
}


