const inputs = document.querySelectorAll('input');
const redValue = document.querySelector('#red');
const greenValue = document.querySelector('#green');
const blueValue = document.querySelector('#blue');
const colorCode = document.querySelector('.color-code');
const colorPad = document.querySelector('.color');
const redInput = document.querySelector('#red');
const greenInput = document.querySelector('#green');
const blueInput = document.querySelector('#blue');
const rgb = document.querySelector('.rgb');

let red = redValue.value;
let green = greenValue.value;
let blue = blueValue.value;

let defaultColor = `rgb(${red}, ${green}, ${blue})`;

colorCode.textContent = defaultColor;
colorPad.style.backgroundColor = defaultColor;

function showValue() {

    red = redValue.value;
    green = greenValue.value;
    blue = blueValue.value;

    let color = `rgb(${red}, ${green}, ${blue})`;

    colorCode.textContent = color;
    colorPad.style.backgroundColor = color;

    rgb.style.setProperty('--buttonColor',color);

    redInput.style.setProperty('--ColorRed', `linear-gradient(to right, rgb(0,${green},${blue}), rgb(255,${green},${blue})`);
    greenInput.style.setProperty('--ColorGreen', `linear-gradient(to right, rgb(${red},0,${blue}), rgb(${red},255,${blue})`);
    blueInput.style.setProperty('--ColorBlue', `linear-gradient(to right, rgb(${red},${green},0), rgb(${red},${green},255)`);
}

inputs.forEach(input => input.addEventListener('input', showValue));
