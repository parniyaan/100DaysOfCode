const randomPassword = document.querySelector('#pass');
const options = document.querySelectorAll('input[type = checkbox]');
const range = document.querySelector('input[type = range]');
const valueOfRange = document.querySelector('#passwordLength');
const copyIcon = document.querySelector('#copy');
const copyBtn = document.querySelector('#copy-btn');
const reload = document.querySelector("#reload")

let characters = {
    upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowerCase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%&*()_<>?+{}:;/-+'
}

let config = {
    upperCase: false,
    lowerCase: false,
    numbers: false,
    symbols: false
}

valueOfRange.textContent = range.value;

let clipboard;
function generatePassword() {
    const char = [];

    for (let key in config) {
        console.log(key, config[key])



        if (config[key]) {
            char.push(characters[key])
        }
    }


    let password = '';
    for (let i = 0; i < parseInt(range.value); i++) {
        let random = char[Math.floor(Math.random() * char.length)];
        let randomCharacter = random[Math.floor(Math.random() * random.length)]
        password += randomCharacter;
    }


    randomPassword.textContent = password;
    clipboard = password
}

function checkedInput(event) {
    let key = event.target.getAttribute(`data-key`)

    config[key] = event.target.checked;

    generatePassword();
}

 function copyText () {
    navigator.clipboard.writeText(clipboard);
 }

range.addEventListener('input', () => {
    valueOfRange.textContent = range.value;

});

options.forEach((input) => {
    input.addEventListener('change', checkedInput)
});

copyIcon.addEventListener('click',copyText);

copyBtn.addEventListener('click',copyText);

reload.addEventListener('click',generatePassword);



