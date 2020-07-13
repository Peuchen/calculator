const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
let currentValue = 0;
let newValue = 0;

function changeDisplay() {
    numbers.forEach((number) => {
        number.addEventListener('click', (e) => {
            let currentNumber = number.textContent;
            document.getElementById("display").textContent += currentNumber;
            newValue = Number(document.getElementById("display").textContent);
        });
    });
};

function operate(operator, currentValue, newValue) {
    operators.forEach((operator) => {
        operator.addEventListener('click', (e) => {
            switch(operator.id) {
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
        });
    });
    
}

const add = function(currentValue, newValue) {
    console.log("test1");
    return currentValue + newValue;
}

const subtract = function(currentValue, newValue) {
    console.log("test2");
    return currentValue - newValue;
}

const multiply = function(currentValue, newValue) {
    console.log("test3");
    return currentValue * newValue;
}

const divide = function(currentValue, newValue) {
    console.log("test4");
    return currentValue / newValue;
}

changeDisplay();
operate();

/* function multiply (array) {
	return array.reduce(((total, newValue) => total * newValue), 1);
}

function divide (array) {
	return array.reduce(((total, newValue) => total / newValue));
} */