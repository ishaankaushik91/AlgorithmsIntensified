let array = [1, 2, 3, 5];
console.log(linearSearch(0, array, 4));

function linearSearch(index, array, target) {
  if (index < array.length) {
    if (array[index] == target) {
      return index;
    }
    for (let i = 0; i < array.length; i++) {
      if (array[i] > target) {
        return i;
      }
    }
    return linearSearch(index + 1, array, target);
  }
}
