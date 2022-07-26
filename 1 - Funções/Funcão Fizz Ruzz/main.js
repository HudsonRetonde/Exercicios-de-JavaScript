// Escreva uma função que recebe um número e retorne:
//Número é divisível por 3 = Fizz
//Número é divisível por 5 = Buzz
//Número é divisível por 3 e 5 = FizzBuzz
//Número NÃO é divisível por 3 e 5 = Retorne o próprio número
//Checar se o valor realmente é um número = Retorne o próprio número
//Use a função com números de 00 a 100

function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return (numero);
}

console.log('a', fizzBuzz('a'));

for(let i = 0; i <= 100; i ++) {
    console.log(i, fizzBuzz(i));
}