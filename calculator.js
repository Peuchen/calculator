const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");
let displayValue = '0'
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result = 0;

function changeDisplay() {
    display.textContent = displayValue;
};

changeDisplay();

const processInput = function() {
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            if(button.value === 'clear') {
                displayValue = '0';
                firstOperand = null;
                secondOperand = null;
                firstOperator = null;
                secondOperator = null;
                changeDisplay();
            }
            else if(button.className === 'operand') {
                if(firstOperator === null) {
                    if(displayValue === '0') {
                        displayValue = button.value;
                    }
                    else {
                        displayValue += button.value;
                    }
                }
                else if(firstOperator !== null) {
                    if(displayValue === firstOperand) {
                        displayValue = button.value;
                    }
                    else {
                        displayValue += button.value;
                    }
                }
                changeDisplay();
            }
            else if(firstOperator === null) {
                if(button.value === 'add') {
                    firstOperator = 'add';
                    firstOperand = displayValue;
                }
                else if(button.value === 'subtract') {
                    firstOperator = 'subtract';
                    firstOperand = displayValue;
                }
                else if(button.value === 'multiply') {
                    firstOperator = 'multiply';
                    firstOperand = displayValue;
                }
                else if(button.value === 'divide') {
                    firstOperator = 'divide';
                    firstOperand = displayValue;
                }
                changeDisplay();
            }
            else if(firstOperator !== null) {
                if(button.value === 'add') {
                    secondOperand = displayValue;
                    secondOperator = 'add';
                    operate(firstOperator);
                    displayValue = result;
                }
                else if(button.value === 'subtract') {
                    secondOperand = displayValue;
                    secondOperator = 'subtract';
                    operate(firstOperator);
                    displayValue = result;
                }
                else if(button.value === 'multiply') {
                    secondOperand = displayValue;
                    secondOperator = 'multiply';
                    operate(firstOperator);
                    displayValue = result;
                }
                else if(button.value === 'divide') {
                    secondOperand = displayValue;
                    secondOperator = 'divide';
                    operate(firstOperator);
                    displayValue = result;
                }
                else if(button.value === 'equal') {
                    secondOperand = displayValue;
                    secondOperator = 'equal';
                    operate(firstOperator);
                    displayValue = result;
                }
                changeDisplay();
                firstOperator = secondOperator;
                firstOperand = result;
            }
        });
    }); 
}

processInput();

const operate = function(operator) {
    switch(operator){
        case 'add':
            result = Number(firstOperand) + Number(secondOperand);
            break;
        case 'subtract':
            result = Number(firstOperand) - Number(secondOperand);
            break;
        case 'multiply':
            result = Number(firstOperand) * Number(secondOperand);
            break;
        case 'divide':
            result = Number(firstOperand) / Number(secondOperand);
            if(Number(secondOperand) === 0) {
                result = "Don't divide by 0 ;)";
            }
            break;
    }
}