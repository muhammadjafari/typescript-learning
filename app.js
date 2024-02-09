// type Combinable = number | string;
// type resultDiscriptor = "as-number";
// function combine(
//   input1: Combinable,
//   input2: Combinable,
//   resultType: resultDiscriptor
// ) {
//   let result;
//   if (
//     (typeof input1 === "number" && typeof input2 === "number") ||
//     resultType === "as-number"
//   ) {
//     result = +input1 + +input2;
//   }
//   if (typeof input1 === "string" && typeof input2 === "string") {
//     result = input1.toString() + " " + input2.toString();
//   }
//   console.log(result);
// }
// combine(1, 2, "as-number");
// combine("Max", "Stepen", "as-number");
// function add(n1: number, n2: number): string {
//   return n1.toString() + n2.toString();
// }
// function noValue(n1, n2): void {
//   console.log("no val" + n1 + n2);
// }
// function noValueReturn(n1, n2): undefined {
//   let result = n1 + n2;
//   return;
// }
// function add(n1: number, n2: number) {
//   return n1 + n2;
// }
// let combine: (a: number, b: number) => number;
// combine = add;
// console.log(add(1, 2));
// function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
//   let result = n1 + n2;
//   cb(result);
// }
// addAndHandle(10, 20, (result) => {
//   console.log(result);
// });
// let userInput: unknown;
// let userName: string = "Max";
// userInput = 5;
// userInput = "Max";
// if (typeof userName === "string") {
//   userInput = userName;
// }
function generateError(detail) {
    throw { detail: detail };
}
