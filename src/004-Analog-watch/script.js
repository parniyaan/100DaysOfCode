const clock = document.querySelector('.clock');
const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');


function angleToCoordinate(angle, radius) {
    const x = 200 + Math.cos((angle - 90) * Math.PI / 180) * radius;
    const y = 200 + Math.sin((angle - 90) * Math.PI / 180) * radius;
    return [x, y];

}

for (let i = 0; i < 60; i++) {
    let dots = document.createElement('div');
    const [x, y] = angleToCoordinate(i * 6, 192);
    dots.className = 'dot';
    dots.style.top = y + 'px';
    dots.style.left = x + 'px';
    clock.append(dots);
    if (i % 5 === 0) {
        dots.classList.add('big-dot');
    }
}

for (let i = 1; i <= 12; i++) {
    let numbers = document.createElement('span');
    const [x, y] = angleToCoordinate(i * 30, 170);
    numbers.textContent = `${i}`;
    numbers.className = 'numbers';
    numbers.style.top = y + 'px';
    numbers.style.left = x + 'px';
    clock.append(numbers);
}

function moveHands() {
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    const hourAngle = hour / 12 * 360;
    const minuteAngel = minute / 60 * 360;
    const secondAngle = second / 60 * 360;


    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngel}deg)`;
    secondHand.style.transform = `rotate(${secondAngle}deg)`;


}

setInterval(moveHands, 1000);

