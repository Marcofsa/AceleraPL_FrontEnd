let timer = null;
let started = false;

function clock() {
    function timer() {
        const today = new Date();
        const hours = today.getHours().toString().padStart(2, '0'),
            minutes = today.getMinutes().toString().padStart(2, '0'),
            seconds = today.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }

    return setInterval(function () {
        document.querySelector('h2').textContent = timer();
    }, 1000);
}


function start() {
    if (!started) {
        timer = clock();
        started = true;
    }
}

function stop() {
    clearInterval(timer);
    started = false;
}
