const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let width = [-5, 5];
let height = [-10, 10];

let balls = [];

for (let i = 0; i < 800; i++) {
    let properties = {
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.width),
        xSpeed: width[Math.floor(Math.random() * width.length)],
        ySpeed: height[Math.floor(Math.random() * height.length)],
        radius: Math.floor(Math.random() * 3 + 1),
    };
    balls.push(properties);
}

function mouseMove(event) {
    let mouseX = event.clientX;
    let mouseY = event.clientY;

    let mouseAreaXRight = mouseX + 300;
    let mouseAreaYBottom = mouseY + 300;
    let mouseAreaLeft = mouseX - 300;
    let mouseAreaYTop = mouseY - 300;

    for (let ball of balls) {
        for (let otherBalls of balls) {
            if (ball !== otherBalls) {
                let xSpace = ball.x - otherBalls.x;
                let ySpace = ball.y - otherBalls.y;

                if (ball.x <= mouseAreaXRight && ball.y <= mouseAreaYBottom && ball.x >= mouseAreaLeft && ball.y >= mouseAreaYTop) {
                    let space = Math.sqrt(xSpace * xSpace + ySpace * ySpace);
                    if (space <= 100) {
                        ctx.beginPath();
                        ctx.moveTo(ball.x, ball.y);
                        ctx.lineTo(otherBalls.x, otherBalls.y);
                        ctx.strokeStyle = 'white';
                        ctx.lineWidth = '.1';
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
            }
        }
    }
}

function bouncing() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let ball of balls) {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();

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

document.addEventListener('mousemove', mouseMove);

