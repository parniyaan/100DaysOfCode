const dates = document.querySelector('.dates');

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let today = new Date().getDate();
let firstDate = new Date(year, month, 1).getDay();
let lastDate = new Date(year, month + 1, 0).getDate();


for (let i = 0;i < firstDate;i++) {
    let spaces = document.createElement('span');
    dates.appendChild(spaces);
}

for (let i = 1; i <= lastDate; i++) {

    let numbers = document.createElement('span');
    numbers.innerHTML = `${i}`;
    dates.append(numbers);

    if(i === today) {
        numbers.className = 'today';
    }
}
