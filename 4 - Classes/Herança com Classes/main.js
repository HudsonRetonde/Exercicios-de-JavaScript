class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + 'está ligado.');
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' está desligado');
            return;
        }
        this.ligado = false;
    } 
    
}

class SmartPhone extends DispositivoEletronico{
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
};

class Tablet extends DispositivoEletronico{
    constructor(nome, temWiFi) {
        super(nome);
        this.temWiFi = temWiFi;
    }
    ligar(){
        console.log('Cuidado, você alterou o método ligar!')
    }
    falaZeze() {
        console.log('Fala, Zezé!')
    }
}

const s1 = new SmartPhone('Motorola', 'Cinza', 'Moto G');
s1.ligar();
console.log(s1);

const t1 = new Tablet('iPad', true);
t1.ligar()
t1.desligar()
t1.falaZeze()