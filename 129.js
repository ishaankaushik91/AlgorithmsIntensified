let matrix = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
];
jump(matrix);

function jump(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let str = "";
      for (let k = j; k < matrix[i].length; k++) {
        str += String(matrix[i][k]) + " ";
      }
      console.log(str);
    }
  }
}
