function multiplicao(x, y){
    z = x * y;
    return z;
}

let num1 = Number(prompt('Insira um número inteiro: '));
let num2 = Number(prompt('Insira outro número: '));

resultado = multiplicao(num1, num2);

alert(`O resultado do produto desses número é: ${resultado}`);
