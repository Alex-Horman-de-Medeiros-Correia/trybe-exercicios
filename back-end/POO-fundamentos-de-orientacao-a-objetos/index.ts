class Tv {
    private _brand: String; //marca da TV;
    private _size: Number;  // tamanho em polegadas;
    private _resolution: Number;  // resolução da tela;
    private _connections: String[];  // conexões disponíveis(HDMI, Ethernet, etc.);
    private _connectedTo?: String; // conexão atual Este atributo não precisa ser inicializado no construtor.

    constructor(brand: String, size: Number, resolution: Number, connections: String[], connectedTo: String) {
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
        this._connectedTo = connectedTo;
    };

    turnOn() {
        console.log(
            `marca da Tv: ${ this._brand },
            tamanho em polegadas: ${ this._size },
            resolução da tela: ${ this._resolution },
            tipos de conexões: ${ this._connections }!`
            );   
    }

    get connectedTo() {
        return this._connectedTo;
    }

    set setterConnected(newValue: string) {
        if (!newValue || this._connections.includes(newValue)) {
            this._connectedTo = newValue;
            console.log(`resultado do setter: ${ this._connectedTo }`);
        } else {
            console.log('Sorry, connection unavailable!');
        }
    }
}

const tvCaracteristicas = new Tv('Samsung', 156, 1920, [ 'HDMI', 'wi-fi' ], 'HDMI');

tvCaracteristicas.turnOn();

tvCaracteristicas.connectedTo;
console.log(tvCaracteristicas.connectedTo);


tvCaracteristicas.setterConnected = 'cabos';





