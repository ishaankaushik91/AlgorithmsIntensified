let matrix = [
  [10, "Mango", 13, "Banana", 100],
  [90, 90, 87, "Apple", 21],
];
Separation(0, 0, matrix, []);

function Separation(row, column, matrix, tempArray) {
  if (row < matrix.length) {
    if (column < matrix[row].length) {
      if (typeof matrix[row][column] == "string") {
        tempArray.push(matrix[row][column]);

        for (let k = column; k < matrix[row].length; k++) {
          matrix[row][k] = matrix[row][k + 1];
        }
      }
      return Separation(row, column + 1, matrix, tempArray);
    }
    column = 0;
    return Separation(row + 1, column, matrix, tempArray);
  }
  matrix.push(tempArray);
  console.log(matrix);
}