const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = Math.floor(Math.random() * canvas.width);
let y = Math.floor(Math.random() * canvas.width);
let radius = 25;
let xSpeed = 5;
let ySpeed = 10;

function balls() {
    for (let i = 0; i < 20; i++) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = 'white';
        ctx.fill();
    }
}

function bouncing() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    balls();

    x = x + xSpeed;
    y = y + ySpeed;

    if (x + radius >= canvas.width || x - radius <= 0) {
        xSpeed = -xSpeed;
    }

    if (y + radius >= canvas.height || y - radius <= 0) {
        ySpeed = -ySpeed;
    }
}

setInterval(bouncing, 10);
