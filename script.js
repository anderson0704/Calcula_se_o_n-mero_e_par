function verificarPar() {
    var numero = parseInt(document.getElementById("numero").value);

    if (numero % 2 === 0) {
        document.getElementById("resultado").innerText = numero + " é um número par.";
    } else {
        document.getElementById("resultado").innerText = numero + " não é um número par.";
    }
}