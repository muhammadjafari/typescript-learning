function combine(input1, input2, resultType) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultType === "as-number") {
        result = +input1 + +input2;
    }
    if (typeof input1 === "string" && typeof input2 === "string") {
        result = input1.toString() + " " + input2.toString();
    }
    console.log(result);
}
combine(1, 2, "as-number");
combine("Max", "Stepen", "as-number");
