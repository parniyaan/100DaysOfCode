const button = document.querySelector('button');
const field = document.querySelector('.filed');
const full = document.querySelector('.full');
const volumeRange = document.querySelector('.number-volume');

const fieldPosition = field.getBoundingClientRect();



const maxVolume = 255;
let isClicked = false;

function rangeHandler() {
    isClicked = true;
    button.style.cursor = 'grabbing';
}

function mouseCoordinates(event) {
    let mouseX = event.clientX;
    let con = maxVolume/fieldPosition.width;


    if (isClicked) {
        let fullPiece = mouseX - fieldPosition.left;
        if (fullPiece >= 0 && fullPiece <= fieldPosition.width ){

            full.style.width = (fullPiece / fieldPosition.width) * 100 + '%';
            button.style.left = (fullPiece / fieldPosition.width) * 100 + '%';

            volumeRange.textContent = Math.floor(fullPiece * con) ;

            volumeRange.style.left = (fullPiece / fieldPosition.width) * 100  + '%';
    
        }

    }
}



button.addEventListener('mousedown', rangeHandler);
document.addEventListener('mousemove', mouseCoordinates);
document.addEventListener('mouseup', () => {
    isClicked = false;
    button.style.cursor = 'grab';
});
