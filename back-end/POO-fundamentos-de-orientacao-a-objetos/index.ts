class Tv {
    brand: String; //marca da TV;
    size: Number;  // tamanho em polegadas;
    resolution: Number;  // resolução da tela;
    connections: String[];  // conexões disponíveis(HDMI, Ethernet, etc.);
    connectedTo?: String; // conexão atual Este atributo não precisa ser inicializado no construtor.

    constructor(brand: String, size: Number, resolution: Number, connections: String[]) {
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    };

    turnOn() {
        console.log(
            `marca da Tv: ${ this.brand },
            tamanho em polegadas: ${ this.size },
            resolução da tela: ${ this.resolution },
            tipos de conexões: ${ this.connections }!`
            );   
    }
}

const tvCaracteristicas = new Tv('Samsung', 156, 1920, [ 'HDMI', 'wi-fi' ]);

tvCaracteristicas.turnOn();

