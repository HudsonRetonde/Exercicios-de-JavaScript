function criaPessoa(nome, sobrenome, a, b){
    return {
        nome,
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift( );
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando sobre coisas aleatórias') {
            return `${this.nome} está ${assunto}.`;
        },

        altura : a,
        peso : b,

        get imc() {
            const indice = this.peso / this.altura ** 2;
            return indice.toFixed(2);
        }   
    }
}

const p1 = criaPessoa('Hudson', 'Retonde', 1.84, 84);
const p2 = criaPessoa('Yossuke', 'Urameshi', 1.70, 73);
const p3 = criaPessoa('Son', 'Goku', 2.00, 110);
console.log(p1.nomeCompleto, p1.imc);
console.log(p2.nomeCompleto, p2.imc);
console.log(p3.nomeCompleto, p3.imc);
