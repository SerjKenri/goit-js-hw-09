const refs = {
    startBt: document.querySelector('button[data-start]'),
    stopBt: document.querySelector('button[data-stop]'),
    bodyEl: document.querySelector('BODY'),
}

refs.startBt.addEventListener('click', startChange);
refs.stopBt.addEventListener('click', stopChange);

let timerId = null;

let timerControllEl = false;

function startChange () {
    if(timerControllEl) {
        return
    }

    timerControllEl = true;

    timerId = setInterval(() => {
        refs.bodyEl.style.backgroundColor = getRandomHexColor();
    }, 200)
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function stopChange () {
    clearInterval(timerId);
    timerControllEl = false;
}