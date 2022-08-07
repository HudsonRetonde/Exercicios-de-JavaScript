class pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    };
    falar() {
        console.log(`${this.nome} está falando.`)
    }
}

const p1 = new pessoa('Naruto', 'Usumaki');
const p2 = new pessoa('Son', 'Goku');
const p3 = new pessoa('Yosuke', 'Urameshi');

console.log(p1);
console.log(p2);
console.log(p3);