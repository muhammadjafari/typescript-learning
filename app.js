function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return phrase + result;
    }
}
var num1 = 3;
var num2 = 4;
var resultShow = true;
var phrase = "the result is ";
add(num1, num2, resultShow, phrase);
