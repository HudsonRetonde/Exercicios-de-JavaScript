const falar = {
    falar() {
        console.log(`{this.nome} está falando.`)
    },
};

const comer = {
    comer() {
        console.log(`{this.nome} está comendo.`)
    },
};

const beber = {
    beber() {
        console.log(`{this.nome} está bebendo.`)
    },
};

const pessoaPrototype = Object.assing({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {
        falar(){
            console.log(`${this.nome} está falando.`)
        },
        comer(){
            console.log(`${this.nome} está comendo.`)
        },
        beber(){
            console.log(`${this.nome} está bebendo.`)
        },
    };

    return Object.create(pessoaPrototype, {
        nome: { value : nome},
        sobrenome: { value : sobrenome},
    });
};

const p1 = criaPessoa('Hudson', 'Retonde');
const p2 = ciraPessoa('Daniel', 'Larusso');
console.log(p2);
