let matrix = [
  [1, 2, 3, 4, 5],
  [1, 2, 21, 1, 1, 1, 1, 1],
  [90, 99],
];
makeSquare(matrix);

function makeSquare(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].length < matrix[0].length) {
      for (let k = 0; k < matrix[i].length; k++) {
        let randomNum = Math.floor(Math.random() * 100);
        let randomIndex = Math.floor(Math.random() * (matrix[i].length - 1));

        for (let l = matrix[i].length - 1; l >= randomIndex; l--) {
          matrix[i][l + 1] = matrix[i][l];
        }
        matrix[i][randomIndex] = randomNum;

        if (matrix[i].length == matrix[0].length) {
          break;
        }
      }
    } else if (matrix[i].length > matrix[0].length) {
      for (let k = 0; k < matrix[i].length; k++) {
        let randomIndex = Math.floor(Math.random() * (matrix.length - 1));
        for (let k = randomIndex; k < matrix[i].length; k++) {
          matrix[i][k] = matrix[i][k];
        }
        if (matrix[i].length == matrix[0].length) {
          break;
        }
      }
    }
  }
  console.log(matrix);
}
