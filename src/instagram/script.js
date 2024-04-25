const header = document.querySelector('header');
const stories = document.querySelector('.stories');
const main = document.querySelector('main');

let preY = main.scrollTop;
console.log(preY);

function deleteHeader() {
    let nowY = main.scrollTop;
    console.log(nowY);

    if (nowY > preY) {
        stories.style.display = 'none';
        header.style.top = '-80px';
        main.style.marginTop = '0';
        console.log('down');

    } else if (preY > nowY) {
        stories.style.display = 'flex';
        header.style.top = '0';
        main.style.marginTop = '80px';
        console.log('up');
    }

    preY = nowY;
}


main.addEventListener('scroll', deleteHeader);

