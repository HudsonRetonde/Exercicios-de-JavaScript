//               -6        -5      -4          -3          -2           -1
//                0         1       2           3           4            5
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosEmDobro = numeros.map(valor => valor *2);
//console.log(numerosEmDobrro);

//Para cada elemento:
//Retorne apenas uma string com o nome pessoa
//Remova apenas a chave "nome" do objeto
//Adcione uma chave id em cada objeto
const pessoas = [
    {nome: 'Goku', idade: 62},
    {nome: 'Goten', idade: 23},
    {nome: 'Picollo', idade: 55},
    {nome: 'Bulma', idade: 19},
    {nome: 'Gohan', idade: 32},
    {nome: 'Vegeta', idade: 47},
]

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({idade: obj.idade}));
//const idades = pessoas.map(obj => delete obj.nome);
const comIds = pessoas.map(function(obj, indice){
    const newObj = {...obj};
    newObj.id = (indice + 1) * 1000;
    return newObj;
})
console.log(newObj);
  