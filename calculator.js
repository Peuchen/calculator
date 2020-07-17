const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");
let displayValue = '0'
let firstOperand = null;
let secondOperand = null;
let operator = null;
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
                operator = null;
            
                changeDisplay();
            }
            else if(button.className === 'operand') {
                if(operator === null) {
                    if(displayValue === '0') {
                        displayValue = button.value;
                    }
                    else {
                        displayValue += button.value;
                    }
                }
                else if(operator !== null) {
                    if(displayValue === firstOperand) {
                        displayValue = button.value;
                    }
                    else {
                        displayValue += button.value;
                    }
                }
                changeDisplay();
            }
            else if(operator === null) {
                if(button.value === 'add') {
                    operator = 'add';
                    firstOperand = displayValue;
                }
                else if(button.value === 'subtract') {
                    operator = 'subtract';
                    firstOperand = displayValue;
                }
                else if(button.value === 'multiply') {
                    operator = 'multiply';
                    firstOperand = displayValue;
                }
                else if(button.value === 'divide') {
                    operator = 'divide';
                    firstOperand = displayValue;
                }
                changeDisplay();
            }
            else if(operator !== null) {
                if(button.value === 'add') {
                    secondOperand = displayValue;
                    operate(operator);
                    displayValue = result;
                    operator = 'add';
                }
                else if(button.value === 'subtract') {
                    secondOperand = displayValue;
                    operate(operator);
                    displayValue = result;
                    operator = 'subtract';
                }
                else if(button.value === 'multiply') {
                    secondOperand = displayValue;
                    operate(operator);
                    displayValue = result;
                    operator = 'multiply';
                }
                else if(button.value === 'divide') {
                    secondOperand = displayValue;
                    operate(operator);
                    displayValue = result;
                    operator = 'divide';
                }
                else if(button.value === 'equal') {
                    secondOperand = displayValue;
                    operate(operator);
                    displayValue = result;
                    operator = 'equal';
                }
                changeDisplay();

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