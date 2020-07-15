const numbers = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');
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

function operate() {
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

};

function inputOperand() {
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
}

const calculate = function() {
    switch(action) {
        case "add":
            add();
            break;
        case "subtract":
            subtract();
            break;
        case "multiply":
            multiply();
            break;
        case "divide":
            divide();
            break;
    };
};

const add = function() {
    console.log("test1");
    reducer = (accumulator, currentValue) => accumulator + currentValue;
    result = currentValues.reduce(reducer);
    currentValues = [];
    currentValues.push(Number(display.textContent));
}

const subtract = function() {
    console.log("test2");
    reducer = (accumulator, currentValue) => accumulator - currentValue;
    result = currentValues.reduce(reducer);
    currentValues = [];
    currentValues.push(Number(display.textContent));
}

const multiply = function() {
    console.log("test3");
    reducer = (accumulator, currentValue) => accumulator * currentValue;
    result = currentValues.reduce(reducer);
    currentValues = [];
    currentValues.push(Number(display.textContent));
}

const divide = function() {
    console.log("test4");
    reducer = (accumulator, currentValue) => accumulator / currentValue;
    result = currentValues.reduce(reducer);
    currentValues = [];
    currentValues.push(Number(display.textContent));
}


operate();


/* function multiply (array) {
	return array.reduce(((total, newValue) => total * newValue), 1);
}

function divide (array) {
	return array.reduce(((total, newValue) => total / newValue));
} */