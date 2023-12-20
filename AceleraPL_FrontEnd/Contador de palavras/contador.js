function contaPalavras() {
    var texto = document.getElementById('areaTexto').value;
    texto = texto.replace(/\n/g, " ");
    var palavras = texto.trim().split(" ");
    var numPalavras = palavras.filter(function (num) {
        return num != ''
    }).length;
    document.getElementById('contador').innerHTML = "Número de palavras: " + numPalavras;
}