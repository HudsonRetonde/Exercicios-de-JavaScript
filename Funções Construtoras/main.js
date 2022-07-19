function Pessoa (nome, sobrenome) {
    const ID = 123456;

    const metodoInterno = function() {

    };

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método!')
    };
}

const p1 = new Pessoa('Rock', 'Balboa');
const p2 = new Pessoa('Daniel', 'Larusso');