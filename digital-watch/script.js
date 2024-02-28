const watch = document.querySelector('span');

function setTime() {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();



    watch.textContent = hour + ':' + minute+ ':' + second;

}


setInterval(setTime, 1000);



