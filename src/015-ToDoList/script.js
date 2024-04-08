const addBtn = document.querySelector('button');
const list = document.querySelector('ul');
const input = document.querySelector('#input');

let datas = [];

function addTask(title) {
    let task = {
        id: Date.now(),
        title,
        checked: false
    };
    datas.push(task);
}

function addTaskHandler() {
    if (input.value) {
        addTask(input.value);
        saveData();
        renderTask();
    }
}

function saveData() {
    localStorage.setItem('tasks', JSON.stringify(datas));
}

function loadData() {
    try {
        let oldTasks = JSON.parse(localStorage.getItem('tasks'));
        if (oldTasks) {
            datas = oldTasks;
        }
    } catch (error) {
        console.log(error);
    }
}

function renderTask() {
    list.innerHTML = '';

    for (let data of datas) {

        let liElement = document.createElement('li');
        let labelElement = document.createElement('label');
        let inputElement = document.createElement('input');
        let spanElement = document.createElement('span');
        let anotherSpanElement = document.createElement('span');
        let divElement = document.createElement('div');

        spanElement.innerHTML = ' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path\n' +
            '                                        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>';

        inputElement.setAttribute('type', 'checkbox');
        spanElement.className = 'checkbox';
        divElement.className = 'delete-icon';
        anotherSpanElement.className = 'label';

        liElement.appendChild(labelElement);
        labelElement.appendChild(inputElement);
        labelElement.appendChild(spanElement);
        labelElement.append(anotherSpanElement);
        liElement.appendChild(divElement);
        list.append(liElement);

        if (data.checked) {
            inputElement.checked = true;
        }

        anotherSpanElement.textContent = data.title;
        input.value = '';

        divElement.addEventListener('click', deleteTask);
        inputElement.addEventListener('input', checkTask);
    }
}

function deleteTask(e) {
    if (e.target.classList.contains('delete-icon')) {
        const li = e.target.closest('li');
        const taskTitle = li.querySelector('.label').textContent;
        datas = datas.filter(task => task.title !== taskTitle);
        saveData();
        renderTask();
    }
}

function checkTask(e) {
    let label = e.target.parentElement;
    let lastChild = label.lastChild.textContent;
    let find = datas.find(task => task.title === lastChild);
    find.checked = e.target.checked;
    saveData();
    renderTask();    
}

addBtn.addEventListener('click', addTaskHandler);

loadData();
renderTask();