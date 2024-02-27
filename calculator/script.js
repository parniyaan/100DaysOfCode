const digitButtons = document.querySelectorAll('.button.digit');
const operatorButtons = document.querySelectorAll('.button.operator');
const calculation = document.querySelector('.calculation');

const display = document.querySelector('#display');

let currentCalculation = [];
let currentInput = '';


function updateDisplay (value) {
    currentInput = value.toString();
    display.textContent = currentInput;
    displayCalculation();
}

function digitHandler(e) {
    updateDisplay(currentInput + e.target.textContent);
    displayCalculation();
}

function operatorHandler(e) {
    const operator = e.target.textContent;

    if (currentInput.length > 0) {
        const number = currentInput.includes('.') ? parseFloat(currentInput) : parseInt(currentInput, 10);

        currentCalculation.push(number, operator);

        updateDisplay('');
    } else if (currentCalculation.length > 0) {
        currentCalculation[currentCalculation.length - 1] = operator;
    }
    displayCalculation();
}

function percentHandler() {
    if (currentInput.length > 0) {
        const percent = parseFloat(currentInput) / 100;

        if (currentCalculation.length > 0) {
            const lastNumber = currentCalculation.at(-2);

            updateDisplay(lastNumber * percent);
        } else {
            updateDisplay(percent);
        }
    }
    displayCalculation();
}

function signHandler() {
    if (currentInput.startsWith('-')) {
        updateDisplay(currentInput.substring(1));
    } else {
        updateDisplay('-' + currentInput);
    }
    displayCalculation();
}

function decimalPointHandler() {
    if (!currentInput.includes('.')) {
        updateDisplay(currentInput + '.');
    }
    displayCalculation();

}


function equalsHandler() {
    if (currentCalculation.length > 0) {
        if (currentInput.length > 0) {
            const number = parseFloat(currentInput);

            currentCalculation.push(number);
        } else {
            currentCalculation.pop();
        }


        const result = eval(currentCalculation.join(''));

        currentCalculation = [];

        updateDisplay(result);
    }
    displayCalculation();

}

function clearHandler() {
    if (currentInput.length > 0) {
        updateDisplay('');
    } else {
        currentCalculation = [];
    }
    displayCalculation();
}

function displayCalculation () {
    calculation.textContent = currentCalculation.join('');
}


digitButtons.forEach((button) => {
    button.addEventListener('click', digitHandler);
});


operatorButtons.forEach((button) => {
    let handler;

    if (button.classList.contains('equals')) {
        handler = equalsHandler;
    } else if (button.classList.contains('clear')) {
        handler = clearHandler;
    } else if (button.classList.contains('percent')) {
        handler = percentHandler;
    } else if (button.classList.contains('sign')) {
        handler = signHandler;
    } else if (button.classList.contains('decimal-point')) {
        handler = decimalPointHandler;
    } else {
        handler = operatorHandler;
    }

    button.addEventListener('click', handler);
});
