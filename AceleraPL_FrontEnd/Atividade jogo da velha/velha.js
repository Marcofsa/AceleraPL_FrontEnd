var tabuleiro = ['', '', '', '', '', '', '', '', ''];
var jogador = 'X';

window.onload = function () {
    var boardElem = document.getElementById('tabuleiro');
    for (var i = 0; i < 9; i++) {
        var cell = document.createElement('div');
        cell.innerHTML = tabuleiro[i];
        cell.className = 'quadrante';
        cell.addEventListener('click', fazMovimento(i));
        boardElem.appendChild(cell);
    }
};

function fazMovimento(i) {
    return function () {
        if (tabuleiro[i] == '') {
            tabuleiro[i] = jogador;
            event.target.innerHTML = jogador;
            if (checaStatus()) {
                alert(jogador + ' ganhou!');
            }
            jogador = jogador == 'X' ? 'O' : 'X';
        }
    };
}

function checaStatus() {
    var condicoesWin = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (var i = 0; i < condicoesWin.length; i++) {
        if (tabuleiro[condicoesWin[i][0]] != '' &&
            tabuleiro[condicoesWin[i][0]] == tabuleiro[condicoesWin[i][1]] &&
            tabuleiro[condicoesWin[i][0]] == tabuleiro[condicoesWin[i][2]]) {
            return true;
        }
    }
    return false;
}
