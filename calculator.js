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
    return operator(currentValue, newValue);
}

function add (currentValue, newValue) {
	return currentValue + newValue;
}

function subtract (currentValue, newValue) {
	return currentValue - newValue;
}

function multiply (currentValue, newValue) {
	return currentValue * newValue;
}

function divide (currentValue, newValue) {
	return currentValue / newValue;
}

changeDisplay();

/* function multiply (array) {
	return array.reduce(((total, newValue) => total * newValue), 1);
}

function divide (array) {
	return array.reduce(((total, newValue) => total / newValue));
} */