document.getElementById('formRank').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let quantVitorias = parseInt(document.getElementById('quantVitorias').value);
    let quantDerrotas = parseInt(document.getElementById('quantDerrotas').value);

    let saldoVitorias = quantVitorias - quantDerrotas;

    if (quantVitorias < 10) {
        nivel = "Ferro";
    } else if (quantVitorias >= 11 && quantVitorias <= 20) {
        nivel = "Bronze";
    } else if (quantVitorias >= 21 && quantVitorias <= 50) {
        nivel = "Prata";
    } else if (quantVitorias >= 51 && quantVitorias <= 80) {
        nivel = "Ouro";
    } else if (quantVitorias >= 81 && quantVitorias <= 90) {
        nivel = "Diamante";
    } else if (quantVitorias >= 91 && quantVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    document.getElementById('resultado').innerHTML = `O Herói tem de saldo de <strong>${saldoVitorias}</strong> está no nível de <strong>${nivel}</strong>.`;
});