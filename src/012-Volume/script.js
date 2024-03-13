const button = document.querySelector('button');
const range = document.querySelector('.range');
const full = document.querySelector('.full');
const volumeRange = document.querySelector('.number-volume');

const maxVolume = 256;
let isClicked = false;

volumeRange.textContent = Math.floor(maxVolume * 40 / 100);

function mouseDownHandler() {
    isClicked = true;
    button.style.cursor = 'grabbing';
}

function mouseMoveHandler(event) {
    const rangePosition = range.getBoundingClientRect();
    // const colorPosition = full.getBoundingClientRect();
    // const buttonPosition = button.getBoundingClientRect();
    let mouseX = event.clientX;
    let coefficient = maxVolume / rangePosition.width;

    if (isClicked) {
        let fullPiece = mouseX - rangePosition.left;
        let percent = ((fullPiece / rangePosition.width) * 100) + '%';

        if (fullPiece >= 0 && fullPiece <= rangePosition.width) {
            full.style.width = percent;
            button.style.left = percent;

            volumeRange.textContent = Math.floor(fullPiece * coefficient);
            volumeRange.style.left = percent;
            volumeRange.style.transform = 'translateX(-50%)';
        }
    }
}

function mouseUpHandler() {
    isClicked = false;
    button.style.cursor = 'grab';
}

button.addEventListener('mousedown', mouseDownHandler);
document.addEventListener('mousemove', mouseMoveHandler);
document.addEventListener('mouseup', mouseUpHandler);
