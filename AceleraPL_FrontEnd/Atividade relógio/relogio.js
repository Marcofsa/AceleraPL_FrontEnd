var intervalo;

document.getElementById('iniciar').addEventListener('click', function () {
    intervalo = setInterval(relogio, 1000);
});

document.getElementById('parar').addEventListener('click', function () {
    clearInterval(intervalo);
});

document.getElementById('desligar').addEventListener('click', function () {
    document.getElementById('relogio').innerHTML = "";
    clearInterval(intervalo);
});

function relogio() {
    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();

    if (horas < 10) horas = "0" + horas;
    if (minutos < 10) minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos;

    var tempo = horas + ":" + minutos + ":" + segundos;
    document.getElementById('relogio').innerHTML = tempo;
}
