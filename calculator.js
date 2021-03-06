const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");
let displayValue = '0'
let firstOperand = null;
let secondOperand = null;
let operator = null;
let result = 0;

document.addEventListener('keydown', (e) => {
    const key = document.querySelector(`button[data-key='${e.keyCode}']`);
    key.click();
});

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
                result = 0;
            }
            else if(button.value === 'delete') {
                displayValue = displayValue.substring(0, displayValue.length-1);
                displayValue.length === 0 ? displayValue = '0' : displayValue;
            }
            else if(button.className === 'operand') {
                if(button.value === ".") {
                    if(!displayValue.includes(".")) {
                        displayValue += button.value;
                    }
                    else if(displayValue.includes(".")) {
                        alert("You cannot use multiple decimals in 1 number")
                    };
                }
                else if(displayValue === '0' || displayValue === firstOperand) {
                    displayValue = button.value;
                }
                else {
                    displayValue += button.value;
                };
                if(displayValue.length > 9) {
                    displayValue = displayValue.substring(0, displayValue.length-1);
                }
                
            }
            else if(operator === null) {
                firstOperand = displayValue;
                assignOperator(button);
            }
            else if(operator !== null) {
                secondOperand = displayValue;
                operate(operator);
                displayValue = result;
                firstOperand = result;
                assignOperator(button);
            }
            changeDisplay();
        });
    }); 
}

processInput();

const assignOperator = function(button) {
    if(button.value === 'add') {
        operator = 'add';
    }
    else if(button.value === 'subtract') {
        operator = 'subtract';
    }
    else if(button.value === 'multiply') {
        operator = 'multiply';
    }
    else if(button.value === 'divide') {
        operator = 'divide';
    }
    else if(button.value === 'equal') {
        operator = null;
    }
};

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
                alert("Do not divide by 0 ;)");
            }
            break;
    }

    if(String(result).length > 9) {
        result = Number(String(result).substring(0, 9));
        alert("Please note: this calculator's display is limited to 9 characters");
    }
}