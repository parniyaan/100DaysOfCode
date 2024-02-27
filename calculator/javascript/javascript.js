const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const display = document.getElementById('display');

let currentInput = '';
let currentCalculation = [];

function updateDisplay(value) {
    currentInput = value;
    display.textContent = currentInput;
};

function digitHandler(e) {
    updateDisplay(currentInput + e.target.textContent);
}

function operatorHandler(e) {
    const operator = e.target.textContent;
    if (currentInput.length > 0) {
        const number =
    }
}

function equalsHandler() {

}

function signHandler() {
    if (currentInput.startsWith('-')) {
        currentInput = currentInput.substring(1);
    } else {
        currentInput = '-' + currentInput;
    }

    display.textContent = currentInput;
}

function clearHandler() {

}

function percentHandler() {

}

function decimalHandler() {
    if (!currentInput.include('.')) {
        updateDisplay(currentInput + '.')
    }
}

digitButtons.forEach((button) => {
    button.addEventListener('click', buttonToDisplay);
});

operatorButtons.forEach((button) => {
    let handler;

    if (button.classList.contains('equals')) {
        handler = equalsHandler();
    } else if (button.classList.contains('sign')) {
        handler = signHandler();
    } else if (button.classList.contains('percent')) {
        handler = percentHandler();
    } else if (button.classList.contains('decimal-point')) {
        handler = decimalHandler();
    } else if (button.classList.contains('clear')) {
        handler = clearHandler();
    } else {
        handler = operatorHandler();
    }

});