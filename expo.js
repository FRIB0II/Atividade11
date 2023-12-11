function pontencia(numBase, expoente){
    if(expoente == 1){
        return numBase;
    }else{
        calculoPotencia = 1;
        for(cont = 1; cont <= expoente; cont++){
            calculoPotencia = calculoPotencia * numBase;
        }
        return calculoPotencia;
    }  
}

let num = Number(prompt('Insira um número inteiro: '));
let expoNum = Number(prompt('Insira o expoente: '));

resultadoPotencia = pontencia(num, expoNum);

alert(`O resultado da potência é: ${resultadoPotencia}`);