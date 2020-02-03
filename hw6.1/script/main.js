function add() {
    rezult.value = num1.value - (-1) * num2.value;
}

function substract() {
    rezult.value = num1.value - num2.value;
}

function multiply() {
    rezult.value = num1.value * num2.value;
}

function divide() {
    rezult.value = num1.value / num2.value;
}
function sqrt() {
    rezult.value = num1.value ** 2 || num2.value ** 2;
}
function percent() {
    rezult.value = num1.value / 100 * num2.value;
}
function radical() {
    rezult.value = num1.value ** 0.5 || num2.value ** 0.5;
}
function pow() {
    rezult.value = num1.value ** num2.value;
}
function clearvalue() {
    num1.value = '';
    num2.value = '';
    rezult.value = '';
}
