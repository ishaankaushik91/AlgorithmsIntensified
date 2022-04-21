let array = [1, 2, 3, 5];
console.log(linearSearch(array, 4));

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (target == array) {
      return i;
    }
  }

  for (let j = 0; j < array.length; j++) {
    if (array[j] > target) {
      return j;
    }
  }
}
