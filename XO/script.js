const cells = document.querySelectorAll('.cell');
const winner = document.getElementById('winner');

let state = new Array(3).fill(null).map(() => new Array(3).fill(null));
let sign = "x";

function checkWin() {
    let counter = 0;
    let diagonal = '';
    let diagonalReverse = '';

    for (let i = 0; i < 3; i++) {
        diagonal += state[i][i];
        diagonalReverse += state[i][2 - i];

        let row = "";
        let column = "";
        for (let j = 0; j < 3; j++) {
            row += state[i][j];
            column += state[j][i]

            if (state[i][j] !== null) {
                counter++;
            }
        }
        if (row === "xxx" || row === 'ooo') {
            return row === "xxx" ? "x" : "o";
        }

        if (column === "xxx" || column === 'ooo') {
            return column === "xxx" ? "x" : "o";
        }

    }

    if (diagonal === "xxx" || diagonal === 'ooo') {
        return diagonal === "xxx" ? "x" : "o";
    }

    if (diagonalReverse === "xxx" || diagonalReverse === 'ooo') {
        return diagonalReverse === "xxx" ? "x" : "o";
    }

    if (counter === 9) {
        return null
    }
}

function handleCellClick(cell, index) {
    const i = Math.floor(index / 3);
    const j = index % 3;

    if (state[i][j] === null) {



        state[i][j] = sign;

        cell.classList.add(sign);

        let win = checkWin();
        if (win === 'x') {
            winner.innerHTML = "<h1 style='color: blue'>X is Winner !  </h1>";
        } else if (win === 'o') {
            winner.innerHTML = "<h1 style='color: red'>O is Winner ! </h1>";
        } else if (win === null) {
            winner.innerHTML = "<h1> play another round!</h1>"
        }


        sign = sign === 'x' ? 'o' : 'x';
    }
}


cells.forEach((cell, i) => {
    cell.addEventListener('click', () => {
        handleCellClick(cell, i);
    });
});