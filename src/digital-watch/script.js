const watch = document.querySelector('span');

function setTime() {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();


    hour = hour.toString().padStart(2, '0');
    minute = minute.toString().padStart(2, '0');
    second = second.toString().padStart(2, '0');

    watch.textContent = hour + ':' + minute + ':' + second;

}


setInterval(setTime, 1000);



