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
            if(button.className === 'operand') {
                if(firstOperand === null) {
                    firstOperand = button.value;
                }
                else {
                    firstOperand += button.value;
                };
                console.log(firstOperand);
            }
            else if(button.value === 'add') {
                firstOperator = add;
                console.log(firstOperator);
            }
            else if(button.value === 'subtract') {
                firstOperator = subtract;
                console.log(firstOperator);
            }
            else if(button.value === 'multiply') {
                firstOperator = multiply;
                console.log(firstOperator);
            }
            else if(button.value === 'divide') {
                firstOperator = divide;
                console.log(firstOperator);
            }
            else if(button.value === 'equals') {
                if(firstOperator != null) {
                    secondOperator = 'equals';
                }
            }
            else if(button.value === 'clear') {
                displayValue = '0'
                firstOperand = null;
                secondOperand = null;
                firstOperator = null;
                secondOperator = null;
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

const add = function() {
    console.log("test1");
    
}

const subtract = function() {
    console.log("test2");
}

const multiply = function() {
    console.log("test3");
}

const divide = function() {
    console.log("test4");
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