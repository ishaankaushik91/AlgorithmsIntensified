let str = "1289371291My name is Ishaan";
let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrst";
CheckOnlyNumbers(0, alphabets, str);

function CheckOnlyNumbers(index, alphas, str) {
  if (index < alphas.length) {
    for (let j = 0; j < str.length; j++) {
      if (str[j] == alphas[index]) {
        console.log("There are alphabets too");
        return;
      }
    }
    return CheckOnlyNumbers(index + 1, alphas, str);
  }
}
