let matrix = [
  [1, 2, -3, -3, 44, -3, 100010101, 12, 1],
  [191, 23, 98, -98, 89, -89, -89],
  [-100, 100, 100, 100],
];
duplis(0, matrix, 0);

function duplis(index, matrix, j) {
  if (index < matrix.length) {
    if (j < matrix[index].length) {
      for (let k = j + 1; k < matrix[index].length; k++) {
        if (matrix[index][j] == matrix[index][k] && matrix[index][j] < 0) {
          console.log(matrix[index][j]);
          break;
        }
      }
      return duplis(index, matrix, j + 1);
    }
    j = 0;
    return duplis(index + 1, matrix, j);
  }
}
