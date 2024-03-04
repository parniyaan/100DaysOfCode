let wrapper = document.querySelector('.window');
let header = document.querySelector('.header');

let spaceTop = 0;
let spaceLeft = 0;

let clicked = false;

function dragHandler(event) {
    let cursorX = event.clientX;
    let cursorY = event.clientY;

    const bcr = wrapper.getBoundingClientRect();

    spaceTop = cursorY - bcr.top;
    spaceLeft = cursorX - bcr.left;

    clicked = true;
}

function mouseMove(event) {
    if (clicked) {
        let cursorX = event.clientX;
        let cursorY = event.clientY;

        const bcr = wrapper.getBoundingClientRect();

        let x = cursorX - spaceLeft;
        let y = cursorY - spaceTop;

        x = Math.max(0, Math.min(x, window.innerWidth - bcr.width));
        y = Math.max(0, Math.min(y, window.innerHeight - bcr.height));

        wrapper.style.top = `${y}px`;
        wrapper.style.left = `${x}px`;
    }
}


function stopDragging() {
    clicked = false;
}


header.addEventListener('mousedown', dragHandler);
document.addEventListener('mousemove', mouseMove);
document.addEventListener('mouseup', stopDragging);