var contador = 0;
var intervalId = null;

document.getElementById('start').addEventListener('click', function () {
    intervalId = setInterval(function () {
        contador++;
        document.getElementById('contador').innerText = contador;
    }, 1000 / (contador + 1));
});

document.getElementById('stop').addEventListener('click', function () {
    clearInterval(intervalId);
});

document.getElementById('reset').addEventListener('click', function () {
    clearInterval(intervalId);
    contador = 0;
    document.getElementById('contador').innerText = contador;
});
