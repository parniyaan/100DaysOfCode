const list = document.querySelector('ul');
const input = document.querySelector('#input');
const addBtn = document.querySelector('button');

function addBtnHandler() {
    if (input.value === '') {
        alert('please Enter your task');
    } else {
        let task = document.createElement('li');
        list.appendChild(task);
        task.innerHTML =
            '            <label>\n' +
            '                <input id="check" type="checkbox">\n' +
            '                <span class="checkbox">\n' +
            '                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>\n' +
            '                </span>\n' +
            '            </label>\n' +
            '            <svg class="delete-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\n' +
            '                <path d="M27.3 36.7L16 25.4-6.6 48 4.7 59.3 201.4 256 4.7 452.7-6.6 464 16 486.6l11.3-11.3L224 278.6 420.7 475.3 432 486.6 454.6 464l-11.3-11.3L246.6 256 443.3 59.3 454.6 48 432 25.4 420.7 36.7 224 233.4 27.3 36.7z"/>\n' +
            '            </svg>\n';


        let taskLabel = document.createElement('span');
        taskLabel.innerHTML = input.value;

        let label = task.querySelector('label');
        label.appendChild(taskLabel);
        taskLabel.className = 'label';

        input.value = '';

        let checkBox = task.querySelector('.checkbox');
        const check = task.querySelector('#check');
        const deleteBtn = task.querySelector('.delete-icon');
        function taskDone(e) {
            if (e.target.checked) {
                label.style.textDecoration = 'line-through';
                checkBox.style.display = 'none';

                saveData();
            }
        }
        function deleteBtnHandler() {
            task.remove();
            saveData();
        }

        deleteBtn.addEventListener('click', deleteBtnHandler);
        check.addEventListener('input', taskDone);
    }

    saveData();
}

function saveData() {
    localStorage.setItem('tasks', list.innerHTML);
}

function showData() {
    list.innerHTML = localStorage.getItem('tasks');
}

showData();

addBtn.addEventListener('click', addBtnHandler);

