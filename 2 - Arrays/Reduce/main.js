/*  Some todos os números (Reduce);
    Retone um array com pares;
    Retorne um array com o dobro dos valores; */
 //              0   1   2  3  4  5  6  7  8   9  10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    console.log(acumulador, valor);
    return acumulador; 
}, 0)

const pares = numeros.reduce(function(acumulador, valor, indice, array){
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador; 
}, []);

const impares = numeros.reduce(function(acumulador, valor, indice, array){
    if (valor % 2 !== 0) acumulador.push(valor);
    return acumulador; 
}, []);

const multiplosDeOito = numeros.reduce(function(acumulador, valor, indice, array){
    if (valor % 8 === 0) acumulador.push(valor);
    return acumulador; 
}, []);

const numerosEmDobro = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador.push(valor * 2);
    return acumulador; 
}, []);


console.log(pares);
console.log(impares);
console.log(multiplosDeOito); 
console.log(numerosEmDobro);

  