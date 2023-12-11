function calcularSomaMediaLimitada() {
    let soma = 0;
    let media = 0;

    for(let cont = 0; cont < 4; cont++) {
        let numero = Number(prompt(`Digite o ${cont}º número:`));
        soma += numero;
    }

    media = soma / 4;

    alert("A soma dos números é: " + soma);
    alert("A média dos números é: " + media);
}

function calcularSomaMedia() {
    let soma = 0;
    let media = 0;

    let tamanho = Number(prompt("Informe a quantidade de números a ser digitado: "));

    for(let cont = 1; cont <= tamanho; cont++){
        let num = Number(prompt(`Digite o ${cont}º número:`));
        soma += num;
    }

    media = soma / tamanho;

    alert("A soma é: " + soma);
    alert("A média é: " + media);
}

function somaImparesIntervalo() {
    let num1 = Number(prompt("Digite o primeiro número (deve ser menor que o segundo):"));
    let num2 = Number(prompt("Digite o segundo número (deve ser maior que o primeiro):"));
    let soma = 0;

    if(num1 < num2) {
        for(let cont = num1; cont <= num2; cont++) {
            if(cont % 2 !== 0) {
                soma += cont;
            }
        }
        alert("A soma dos números ímpares no intervalo é: " + soma);
    } else {
        alert("O primeiro número deve ser menor que o segundo. Por favor, tente novamente.");
    }
}

calcularSomaMediaLimitada();
calcularSomaMedia();
somaImparesIntervalo();
