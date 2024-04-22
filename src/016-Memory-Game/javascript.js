const cards = document.querySelector('.cards');
const resetBtn = document.querySelector('button');

const mainData = [
    {
        id: 1,
        content: '🌸',
        isItDelete: false
    },
    {
        id: 2,
        content: '🌸',
        isItDelete: false
    },
    {
        id: 3,
        content: '🐸',
        isItDelete: false
    },
    {
        id: 4,
        content: '🐸',
        isItDelete: false
    },
    {
        id: 5,
        content: '🍄',
        isItDelete: false
    },
    {
        id: 6,
        content: '🍄',
        isItDelete: false
    },
    {
        id: 7,
        content: '🥑',
        isItDelete: false
    },
    {
        id: 8,
        content: '🥑',
        isItDelete: false
    },
    {
        id: 9,
        content: '🌎',
        isItDelete: false
    },
    {
        id: 10,
        content: '🌎',
        isItDelete: false
    },
    {
        id: 11,
        content: '🍉',
        isItDelete: false
    },
    {
        id: 12,
        content: '🍉',
        isItDelete: false
    },
    {
        id: 13,
        content: '🦥',
        isItDelete: false
    },
    {
        id: 14,
        content: '🦥',
        isItDelete: false
    },
    {
        id: 15,
        content: '🌈',
        isItDelete: false
    },
    {
        id: 16,
        content: '🌈',
        isItDelete: false
    }
];
let datas;

let firstCard = null;
let secondCard = null;

let count = 0;

function saveData() {
    localStorage.setItem('content', JSON.stringify(datas));
    localStorage.setItem('count', count);
}

function loadData() {
    count = parseInt(localStorage.getItem('count') || 0, 10);

    try {
        datas = JSON.parse(localStorage.getItem('content') || '');

    } catch (error) {
        datas = randomData();
        console.log(error);
    }
}

function renderData() {
    cards.innerHTML = '';

    for (let data of datas) {

        let item = document.createElement('div');

        item.textContent = data.content;
        item.dataset.id = data.id;

        item.classList.add('card');

        item.addEventListener('click', rotate);

        if (data.isItDelete === true) {
            item.classList.add('delete');
        }
        cards.appendChild(item);
    }
}

function rotate(e) {
    if (firstCard === null || secondCard === null) {
        e.target.classList.toggle('boxOpen');

        if (firstCard === null) {
            firstCard = e.target;
        } else if (secondCard === null) {
            secondCard = e.target;
            setTimeout(checkWin, 1000);
        }
    }
}

function checkWin() {
    if (firstCard.textContent === secondCard.textContent) {
        let firstID = firstCard.dataset.id;
        let secondID = secondCard.dataset.id;

        for (let data of datas) {
            if (data.id.toString() === firstID) {
                data.isItDelete = true;
            }
            if (data.id.toString() === secondID) {
                data.isItDelete = true;
            }
        }

        firstCard.classList.add('delete');
        secondCard.classList.add('delete');

        count += 1;


        if (count === 8) {
            let win = document.createElement('div');
            win.innerHTML = 'You win!';
            win.className = 'win';
            cards.appendChild(win);
        }

    } else {
        firstCard.classList.remove('boxOpen');
        secondCard.classList.remove('boxOpen');

    }

    firstCard = null;
    secondCard = null;
    saveData();
}

function randomData() {
    return JSON.parse(JSON.stringify(mainData.sort(() => Math.random() - 0.5)));
}

function resetGame() {
    count = 0;
    datas = randomData();
    renderData();
    saveData();
}

resetBtn.addEventListener('click', resetGame);

loadData();
renderData();