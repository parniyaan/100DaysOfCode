const header = document.querySelector('header');
const main = document.querySelector('main');

let preY = main.scrollTop;

function deleteHeader() {
    let nowY = main.scrollTop;

    if (nowY > preY) {
        header.style.top = '-80px';
        main.style.marginTop = '0';

    } else if (preY > nowY) {
        header.style.top = '0';
        main.style.marginTop = '80px';
    }

    preY = nowY;
}

main.addEventListener('scroll', deleteHeader);

