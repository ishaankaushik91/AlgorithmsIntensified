let array = [
  "batman",
  "thor",
  "superman",
  "wonder woman",
  "superman",
  "batman",
  "batman",
];
console.log(MostFrequent(array));

function MostFrequent(array) {
  let count = 0,
    index = 0;
  for (let i = 0; i < array.length; i++) {
    let tempCount = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        tempCount++;
      }
    }
    if (count < tempCount) {
      count = tempCount;
      index = i;
    }
  }
  return array[index];
}
