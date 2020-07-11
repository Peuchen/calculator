function operate(operator, a, b) {
    return operator(a, b);
}

function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function multiply (a, b) {
	return a * b;
}

function divide (a, b) {
	return a / b;
}

const numbers = document.querySelectorAll('.number');
    
function changeDisplay() {
    numbers.forEach((number) => {
        number.addEventListener('click', (e) => {
            let currentNumber = number.textContent;
            document.getElementById("display").textContent = currentNumber; 
        });
    });
};

changeDisplay();

/* function multiply (array) {
	return array.reduce(((total, newValue) => total * newValue), 1);
}

function divide (array) {
	return array.reduce(((total, newValue) => total / newValue));
} */