const buttons = document.querySelectorAll("button");
const operandi = document.querySelectorAll(".operand");
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
            if(button.className === 'operand') {
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
                    console.log(firstOperator);
                    firstOperand = displayValue;
                }
                else if(button.value === 'subtract') {
                    firstOperator = 'subtract';
                    console.log(firstOperator);
                    firstOperand = displayValue;
                }
                else if(button.value === 'multiply') {
                    firstOperator = 'multiply';
                    console.log(firstOperator);
                    firstOperand = displayValue;
                }
                else if(button.value === 'divide') {
                    firstOperator = 'divide';
                    console.log(firstOperator);
                    firstOperand = displayValue;
                }
                changeDisplay();
            }
            else if(firstOperator !== null) {
                if(button.value === 'add') {
                    secondOperand = displayValue;
                    secondOperator = 'add';
                    operate(firstOperator);
                    console.log(firstOperator);
                    displayValue = result;
                }
                else if(button.value === 'subtract') {
                    secondOperand = displayValue;
                    secondOperator = 'subtract';
                    operate(firstOperator);
                    console.log(secondOperator);
                    displayValue = result;
                }
                else if(button.value === 'multiply') {
                    secondOperand = displayValue;
                    secondOperator = 'multiply';
                    operate(firstOperator);
                    console.log(secondOperator);
                    displayValue = result;
                }
                else if(button.value === 'divide') {
                    secondOperand = displayValue;
                    secondOperator = 'divide';
                    operate(firstOperator);
                    console.log(secondOperator);
                    displayValue = result;
                }
                changeDisplay();
                firstOperator = secondOperator;
                firstOperand = result;
            }
            else if(button.value === 'equals' && firstOperator !== null) {
                secondOperator = 'equals';
                console.log(secondOperator);
            }
            else if(button.value === 'clear') {
                displayValue = '0';
                firstOperand = null;
                secondOperand = null;
                firstOperator = null;
                secondOperator = null;
                console.log(firstOperand);
            }
        });
    }); 
}

processInput();

/* function operate() {
    operators.forEach((operator) => {
        operator.addEventListener('click', (e) => {
            currentValues.push(Number(display.textContent));
            console.log(currentValues);
            if(!action) {
                action = operator.id;
            }
            else if (action) {
                calculate();
                action = operator.id;
                display.textContent = result;
            }
        });
    });

}; */

/* function inputOperand() {
    numbers.forEach((operand) => {
        operand.addEventListener('click', (e) => {
            if(firstOperator === null) {
                if(displayValue === '0' || displayValue === 0) {
                    //1st click - handles first operand input
                    displayValue = operand;
                } else if(displayValue === firstOperand) {
                    //starts new operation after inputEquals()
                    displayValue = operand;
                } else {
                    displayValue += operand;
                }
            } 
            else {
                //3rd/5th click - inputs to secondOperand
                if(displayValue === firstOperand) {
                    displayValue = operand;
                } else {
                    displayValue += operand;
                }
            }
        });
        changeDisplay();
    });
} */

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
            break;
    }
}


/* reducer = (accumulator, currentValue) => accumulator / currentValue;
result = currentValues.reduce(reducer);
currentValues = [];
currentValues.push(Number(display.textContent));
 */
/* function multiply (array) {
	return array.reduce(((total, newValue) => total * newValue), 1);
}

function divide (array) {
	return array.reduce(((total, newValue) => total / newValue));
} */