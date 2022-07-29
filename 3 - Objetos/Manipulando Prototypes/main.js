/*
JavaScript é baseado e protótipos para passar propriedades e métodos de um objeto para outro.

Protótipo: é o termo utilizado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para protótipo (__proto__) que vem da propriedade prototype da função construtora que foi utilizada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro do próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
}

// Pessoa.prototype === pessoa1.__proto__;

const pessoa1 = new Pessoa('Hudson', 'Retonde'); // <- Pessoa = Função Construtora
const pessa2 = new Pessoa('Loco', 'Abreu'); // <- Pessoa = Função Construtora
const data = new Date(); // <- Data = Função construtora
