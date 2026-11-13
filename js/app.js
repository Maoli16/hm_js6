// ------1--------

const taskInput = document.getElementById('taskInput');
const taskBtn = document.getElementById('taskBtn');
const taskList = document.getElementById('taskList');

taskBtn.addEventListener('click', () => {
    const text = taskInput.value.trim();

    if (text !== '') {
        const li = document.createElement('li');
        li.textContent = text;
        taskList.appendChild(li);

        li.addEventListener('click', () => {
            li.classList.toggle('done');
        });

        li.addEventListener('dblclick', () => {
            li.remove();
        });

        taskInput.value = '';
    }
});

// -------2-------
const bulb = document.getElementById('bulb');
const bulbBtn = document.getElementById('bulbBtn');

let isOn = false;

bulbBtn.addEventListener('click', () => {
    isOn = !isOn;

    if (isOn === true) {
        bulb.style.backgroundColor = 'yellow';
        bulbBtn.textContent = 'Вимкнути';
    } else {
        bulb.style.backgroundColor = 'gray';
        bulbBtn.textContent = 'Увімкнути';
    }
});

// ------3------
const regForm = document.getElementById('regForm');
const userName = document.getElementById('userName');
const userPass = document.getElementById('userPass');
const regMessage = document.getElementById('regMessage');

regForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = userName.value.trim();
    const pass = userPass.value;

    if (name === '') {
        regMessage.textContent = 'Введіть ім\'я';
        regMessage.style.color = 'red';
    } else if (pass.length < 6) {
        regMessage.textContent = 'Пароль занадто короткий';
        regMessage.style.color = 'red';
    } else {
        regMessage.textContent = 'Реєстрація успішна!';
        regMessage.style.color = 'green';
    }
});

// ---------bonus-------
const mover = document.getElementById('mover');

let position = 0;

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        position += 10;
    }

    if (event.key === 'ArrowLeft') {
        if (position > 0) {
            position -= 10;
        }
    }

    mover.style.marginLeft = position + 'px';
});