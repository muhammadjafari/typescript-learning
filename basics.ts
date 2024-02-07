function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  let result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return phrase + result;
  }
}

const num1 = 3;
const num2 = 4;
const resultShow = true;
const phrase = "the result is ";

add(num1, num2, resultShow, phrase);