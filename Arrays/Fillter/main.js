//Retorne  as pessoas  que tem o nome  com 5 letras ou mais;
//Retorne  as primeiras pessoas com mais de 50 anos;
//Retorne as pessoas cujo nome termina com a;

const pessoas =  [
    { nome : 'Luiz', idade : 62},
    {nome : 'Maria', idade : 23 },
    {nome : 'Eduardo', idade : 55},
    {nome : 'Letícia', idade : 19},
    {nome : 'Rosana', idade : 32},
    {nome : 'Wallace', idade : 47}
];

const nomesMaiores = pessoas.filter(obj => obj.nome >= 5);
const idadeAvancada = pessoas.filter(obj => obj.idade > 50);
const terminaComA = pessoas.filter(obj => {
    return obj.nome.toLocaleLowerCase().endsWith('a');
});

console.log(nomesMaiores);
console.log(idadeAvancada);
console.log(terminaComA);
  