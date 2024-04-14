let cards = document.querySelector('.cards');
let boxes = document.querySelector('.card');
let resetBtn = document.querySelector('button');

let count = 0;

let firstCard = null;
let secondCard = null;

let emojies = ['🌸', '🌸', '🐸', '🐸', '🍄', '🍄', '🥑', '🥑', '🌎', '🌎', '🍉', '🍉', '🦥', '🦥', '🌈', '🌈'];
emojies.sort(() => Math.random() - 0.5);

for (let emoji of emojies) {
    let item = document.createElement('div');
    item.textContent = emoji;
    item.className = 'card';
    cards.appendChild(item);

    item.addEventListener('click', rotate);
}

function rotate(e) {
    if (firstCard === null || secondCard === null) {
        e.target.classList.toggle('boxOpen');

        if (firstCard === null) {
            firstCard = e.target;
        } else {
            secondCard = e.target;
            setTimeout(checkWin, 1000);
        }
    }
}

function checkWin() {
    if (firstCard.textContent === secondCard.textContent) {
        firstCard.classList.add('delete');
        secondCard.classList.add('delete');
        count += 1;
        console.log(count);


    } else {
        firstCard.classList.remove('boxOpen');
        secondCard.classList.remove('boxOpen');
    }

    firstCard = null;
    secondCard = null;

    if (count === 8) {
        let win = document.createElement('div');
        win.innerHTML = 'You win!';
        win.className = 'win';
        cards.appendChild(win);
    }
}


resetBtn.addEventListener('click', () => {
    location.reload();
});
