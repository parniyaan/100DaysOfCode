const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let width = [-5, 5];
let height = [-10, 10];

let balls = [];

for (let i = 0; i < 500; i++) {
    let properties = {
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.width),
        xSpeed: width[Math.floor(Math.random() * width.length)],
        ySpeed: height[Math.floor(Math.random() * height.length)],
        radius: Math.floor(Math.random() * 3 + 1),
    };
    balls.push(properties);
}

function bouncing() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let ball of balls) {

        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = 'white';
        ctx.fill();

        ball.y += ball.ySpeed;
        ball.x += ball.xSpeed;

        if (ball.x + ball.radius >= canvas.width || ball.x - ball.radius <= 0) {
            ball.xSpeed = -ball.xSpeed;
        }

        if (ball.y + ball.radius >= canvas.height || ball.y - ball.radius <= 0) {
            ball.ySpeed = -ball.ySpeed;
        }

    }
}

setInterval(bouncing, 80);


