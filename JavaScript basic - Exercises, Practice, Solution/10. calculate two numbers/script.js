var number1 = document.getElementById('num1');
var number2 = document.getElementById('num2');
var result = document.getElementById("result");
result.addEventListener("click", function (e) {
    console.log(parseInt(number1.value));
    result.innerText = `${parseInt(number1.value) + parseInt(number2.value)}`
});
function calculateTwoNum(num1, num2) {
    console.log("Calculated");
    return;
}
