let display = document.getElementById('display');
let currentOperation = '';
let firstOperand = '';
let secondOperand = '';

function appendToDisplay(value) {
    display.value += value;
}

function setOperation(operation) {
    if (currentOperation === '') {
        firstOperand = display.value;
        display.value = '';
        currentOperation = operation;
    } else {
        secondOperand = display.value;
        calculateResult();
        currentOperation = operation;
    }
}

function calculateResult() {
    if (currentOperation !== '' && display.value !== '') {
        secondOperand = display.value;
        let result;
        switch (currentOperation) {
            case '+':
                result = parseFloat(firstOperand) + parseFloat(secondOperand);
                break;
            case '-':
                result = parseFloat(firstOperand) - parseFloat(secondOperand);
                break;
            case '*':
                result = parseFloat(firstOperand) * parseFloat(secondOperand);
                break;
            case '/':
                result = parseFloat(firstOperand) / parseFloat(secondOperand);
                break;
        }
        display.value = result;
        currentOperation = '';
        firstOperand = '';
        secondOperand = '';
    }
}

function clearDisplay() {
    display.value = '';
    currentOperation = '';
    firstOperand = '';
    secondOperand = '';
}