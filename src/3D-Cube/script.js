const radioInputs = document.querySelectorAll('input[type=radio]');
const cube = document.querySelector('#cube');

const transforms = {
    front: 'rotateX(-10deg) rotateY(-10deg)',
    back: 'rotateY(170deg) rotateX(10deg)',
    right: 'rotateX(-10deg) rotateY(-100deg)',
    left: 'rotateX(-10deg) rotateY(80deg)',
    top: 'rotateY(-10deg) rotateX(-100deg)',
    bottom: 'rotateY(-10deg) rotateX(80deg)',
};

function changeSideHandler(e) {
    cube.style.transform = transforms[e.target.id];
}

radioInputs.forEach((input) => {
    input.addEventListener('change', changeSideHandler);
});

