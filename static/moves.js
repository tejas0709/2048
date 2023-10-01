function moveLeft(grid) {
  for (let i = 0; i < 4; i++) {
    let mergeIndex = 0;
    for (let j = 1; j < 4; j++) {
      if (grid[i][j] !== 0) {
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
  return grid;
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
  return grid;
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
  return grid;
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
  return grid;
}

export { moveDown, moveUp, moveLeft, moveRight };