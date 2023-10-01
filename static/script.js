let score = 0;
let gameOver =false;

function gameOverPrint(matrix){

    let tableHtml = '<table>';
    for (let i = 0; i < matrix.length; i++) {
      tableHtml += '<tr>';
      
      for (let j = 0; j < matrix[i].length; j++) {
        if(i === 0 || i === 3){tableHtml += `<td>${''}</td>`;}
        else if(i === 1){
          tableHtml += `<td>${'G'}</td>`;
          tableHtml += `<td>${'A'}</td>`;
          tableHtml += `<td>${'M'}</td>`;
          tableHtml += `<td>${'E'}</td>`;
          break;
        }
        else if(i === 2){
          tableHtml += `<td>${'O'}</td>`;
          tableHtml += `<td>${'V'}</td>`;
          tableHtml += `<td>${'E'}</td>`;
          tableHtml += `<td>${'R'}</td>`;
          break;
         }
      }
      tableHtml += '</tr>';
    }
    tableHtml += '</table>';



    // Display the matrix table in the "matrixContainer" div
    const matrixContainer = document.getElementById('matrixContainer');
    matrixContainer.innerHTML = tableHtml;

}


function fillPlace(grid) {
  const emptySpots = [];

  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      if (grid[row][col] === 0) {
        emptySpots.push({ row, col });
      }
    }
  }

  if (emptySpots.length === 0) {
    return true; // Game over
  }

  const randomIndex = Math.floor(Math.random() * emptySpots.length);
  const randomSpot = emptySpots[randomIndex];

  grid[randomSpot.row][randomSpot.col] = Math.random() < 0.9 ? 2 : 4;

  return false;
}

function moveLeft(grid) {
  for (let i = 0; i < 4; i++) {
    let mergeIndex = 0;
    for (let j = 1; j < 4; j++) {
      if (grid[i][j] !== 0 && grid[i][j] !== '') {
        if (grid[i][mergeIndex] === grid[i][j]) {
          grid[i][mergeIndex] *= 2;
          grid[i][j] = 0;
          mergeIndex++;
        } else if (grid[i][mergeIndex] === 0) {
          grid[i][mergeIndex] = grid[i][j];
          grid[i][j] = 0;
        } else {
          mergeIndex++;
          grid[i][mergeIndex] = grid[i][j];
          if (j !== mergeIndex) {
            grid[i][j] = 0;
          }
        }
      }
    }
  }
  gameOver = fillPlace(grid)
  if(gameOver){gameOverPrint(matrix);}
  else{printMatrix(grid);}
}
// Function to move the tiles to the right
function moveRight(grid) {
  for (let i = 0; i < 4; i++) {
    let mergeIndex = 3;
    for (let j = 2; j >= 0; j--) {
      if (grid[i][j] !== 0) {
        if (grid[i][mergeIndex] === grid[i][j]) {
          grid[i][mergeIndex] *= 2;
          grid[i][j] = 0;
          mergeIndex--;
        } else if (grid[i][mergeIndex] === 0) {
          grid[i][mergeIndex] = grid[i][j];
          grid[i][j] = 0;
        } else {
          mergeIndex--;
          grid[i][mergeIndex] = grid[i][j];
          if (j !== mergeIndex) {
            grid[i][j] = 0;
          }
        }
      }
    }
  }
  gameOver = fillPlace(grid)
  if(gameOver){gameOverPrint(matrix);}
  else{printMatrix(grid);}
}

// Function to move the tiles upwards
function moveUp(grid) {
  for (let j = 0; j < 4; j++) {
    let mergeIndex = 0;
    for (let i = 1; i < 4; i++) {
      if (grid[i][j] !== 0) {
        if (grid[mergeIndex][j] === grid[i][j]) {
          grid[mergeIndex][j] *= 2;
          grid[i][j] = 0;
          mergeIndex++;
        } else if (grid[mergeIndex][j] === 0) {
          grid[mergeIndex][j] = grid[i][j];
          grid[i][j] = 0;
        } else {
          mergeIndex++;
          grid[mergeIndex][j] = grid[i][j];
          if (i !== mergeIndex) {
            grid[i][j] = 0;
          }
        }
      }
    }
  }
  gameOver = fillPlace(grid)
  if(gameOver){gameOverPrint(matrix);}
  else{printMatrix(grid);}
}

// Function to move the tiles downwards
function moveDown(grid) {
  for (let j = 0; j < 4; j++) {
    let mergeIndex = 3;
    for (let i = 2; i >= 0; i--) {
      if (grid[i][j] !== 0) {
        if (grid[mergeIndex][j] === grid[i][j]) {
          grid[mergeIndex][j] *= 2;
          grid[i][j] = 0;
          mergeIndex--;
        } else if (grid[mergeIndex][j] === 0) {
          grid[mergeIndex][j] = grid[i][j];
          grid[i][j] = 0;
        } else {
          mergeIndex--;
          grid[mergeIndex][j] = grid[i][j];
          if (i !== mergeIndex) {
            grid[i][j] = 0;
          }
        }
      }
    }
  }
  gameOver = fillPlace(grid)
  if(gameOver){gameOverPrint(matrix);}
  else{printMatrix(grid);}
}
// Function to generate a random 4x4 matrix with two '2' values

function generateRandomMatrix() {
  const matrix = [];
  const numRows = 4;
  const numCols = 4;

  // Initialize the matrix with empty spaces
  for (let i = 0; i < numRows; i++) {
    matrix.push(Array(numCols).fill(0));
  }

  // Generate random positions for '2' values
  for (let count = 0; count < 2; count++) {
    let row, col;
    do {
      // Generate random row and column indices
      row = Math.floor(Math.random() * numRows);
      col = Math.floor(Math.random() * numCols);
    } while (matrix[row][col] !== 0); // Ensure the position is empty

    // Place '2' at the random position
    matrix[row][col] = '2';
  }

  return matrix;
}

// Create a 4x4 matrix
const matrix = generateRandomMatrix();

// Create the HTML for the matrix table

function printMatrix(matrix){

    let tableHtml = '<table>';
    for (let i = 0; i < matrix.length; i++) {
      tableHtml += '<tr>';
      for (let j = 0; j < matrix[i].length; j++) {
        if(matrix[i][j] === 0){tableHtml += `<td>${''}</td>`;}
        else{tableHtml += `<td>${matrix[i][j]}</td>`;} 
      }
      tableHtml += '</tr>';
    }
    tableHtml += '</table>';



    // Display the matrix table in the "matrixContainer" div
    const matrixContainer = document.getElementById('matrixContainer');
    matrixContainer.innerHTML = tableHtml;


}

printMatrix(matrix);

if(!gameOver){
document.getElementById('left-btn').addEventListener('click', () => moveLeft(matrix));
document.getElementById('right-btn').addEventListener('click', () => moveRight(matrix));
document.getElementById('up-btn').addEventListener('click', () => moveUp(matrix));
document.getElementById('down-btn').addEventListener('click', () => moveDown(matrix));
}
else {}
