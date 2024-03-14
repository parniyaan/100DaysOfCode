const button = document.querySelector('button');
const range = document.querySelector('.range');
const full = document.querySelector('.full');
const volumeRange = document.querySelector('.number-volume');

const maxVolume = 255;
let isClicked = false;

volumeRange.textContent = Math.floor(maxVolume * 40 / 100);

function mouseDownHandler() {
    isClicked = true;
    button.style.cursor = 'grabbing';
}

function mouseMoveHandler(event) {
    const rangePosition = range.getBoundingClientRect();
    let mouseX = event.clientX;
    mouseX = Math.max(rangePosition.left, Math.min(mouseX, rangePosition.right));

    let coefficient = maxVolume / rangePosition.width;

    if (isClicked) {
        let fullPiece = mouseX - rangePosition.left;
        let percent = ((fullPiece / rangePosition.width) * 100) + '%';

        full.style.width = percent;
        button.style.left = percent;

        volumeRange.textContent = Math.floor(fullPiece * coefficient);
        volumeRange.style.left = percent;
        volumeRange.style.transform = 'translateX(-50%)';
    }
}

function mouseUpHandler() {
    isClicked = false;
    button.style.cursor = 'grab';
}

button.addEventListener('mousedown', mouseDownHandler);
document.addEventListener('mousemove', mouseMoveHandler);
document.addEventListener('mouseup', mouseUpHandler);
