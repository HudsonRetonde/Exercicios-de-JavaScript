class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    //Método de Instância
    aumentarVolume(){
        this.volume += 2;
    }
    //Método de Instância
    diminuirVolume(){
        this.volume -= 2;
    }
    //Método Estático
    static trocarPilha(){
        console.log('Está na hora de trocar a pilha!')
    }
}

const controle1 = new ControleRemoto('Samsung');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();

console.log(controle1);

ControleRemoto.trocarPilha();