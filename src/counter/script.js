const input = document.querySelector('input');
const capitalLetters = document.getElementById('capital-letters');
const lowerCaseLetters = document.getElementById('lowercase-letters');
const numbers = document.getElementById('numbers');

let capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
let num = '0123456789';


function inputValue(e) {
    let value = e.target.value;
    let capitalCounter = 0;
    let lowerCaseCounter = 0;
    let numCounter = 0;

    for (let i = 0; i < value.length; i++) {
        const char = value[i];

        if (capital.includes(char)) {
            capitalCounter++;
        } else if (lowerCase.includes(char)) {
            lowerCaseCounter++;
        } else if (num.includes(char)) {
            numCounter++;
        }
    }

    capitalLetters.textContent = capitalCounter;
    lowerCaseLetters.textContent = lowerCaseCounter;
    numbers.textContent = numCounter;
}

input.addEventListener('input', inputValue);



