const startButton = document.querySelector('#start-btn');
const pauseButton = document.querySelector('#pause-btn');
const resetButton = document.querySelector('#reset-btn');
const display = document.querySelector('#display');
display.textContent = '00:00:00:000';
let timer;
let start;

function setTime() {

    let pastTime = Date.now() - start;
    let hour = Math.floor(pastTime / 3600000);
    let minute = Math.floor((pastTime % 3600000) / 60000);
    let second = Math.floor((pastTime % 60000) / 1000);
    let milliSecond = Math.floor(pastTime % 1000);

    hour = hour.toString().padStart(2, '0');
    minute = minute.toString().padStart(2, '0');
    second = second.toString().padStart(2, '0');

    display.textContent = hour + ':' + minute + ':' + second + ':' + milliSecond;
    console.log(display.textContent);
}

function StartTime() {
    start = Date.now();

    timer = setInterval(setTime, 1);
}


function pauseTime() {
    // let currentTime;

    if (timer !== null) {
        clearInterval(timer);
        // currentTime = timer;
        timer = null;
    } else {
        timer = setInterval(setTime, 1);

    }
}

function resetTime() {
    display.textContent = '00:00:00:000';
}

startButton.addEventListener('click', StartTime);
pauseButton.addEventListener('click', pauseTime);
resetButton.addEventListener('click', resetTime);