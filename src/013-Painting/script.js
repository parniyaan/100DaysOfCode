const canvas = document.querySelector('canvas');
const colors = document.querySelectorAll('.color');
const save = document.querySelector('.save');
const clear = document.querySelector('.clear');
const bord = document.querySelector('.bord');
const bordSize = bord.getBoundingClientRect();

const palette = {
    black :'black',
    red :'#b32424',
    yellow :'#f4b923',
    blue :'royalblue',
    green :'#00fa9a',
};

let isPainting = false;
let tas = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - bordSize.height;

function startPainting(event) {
    isPainting = true;
    tas.beginPath();
    tas.moveTo(event.clientX, event.clientY-55);
}

function painting(event) {
    if (isPainting) {
        tas.lineTo(event.clientX, event.clientY-55);
        tas.lineWidth= '2';
        tas.lineCap = 'round';
        tas.lineJoin = 'round';
        tas.stroke();
    }
}

function finishPainting() {
    isPainting = false;
}

function changeColor (event) {
    const colorId = event.target.id;
    tas.strokeStyle = palette[colorId];
}

function clearHandler () {
    tas.clearRect(0,0,canvas.width,canvas.height);
}

function saveHandler() {
    const canvasURL = canvas.toDataURL();
    const creatElement = document.createElement('a');
    creatElement.href =canvasURL;
    creatElement.download='Download-This-Paint';
    creatElement.click();
    creatElement.remove();
}

canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mousemove', painting);
canvas.addEventListener('mouseup', finishPainting);

clear.addEventListener('click',clearHandler);
save.addEventListener('click',saveHandler);
colors.forEach(event => {
    event.addEventListener('click',changeColor);
});
