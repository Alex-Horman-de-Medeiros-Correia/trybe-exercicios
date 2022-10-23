interface Logger {
    log(param: string): void,
}

class ConsoleLogger implements Logger {

    log(param: string) {
        console.log(param);
    }

}

class ConsoleLogger2 implements Logger {

    log(param: string) {
        console.log(`logger 2: ${ param }`);
    }

}

interface Database {
    Logger: Logger,
    save(key: string, value: string): void,
}

class ExampleDatabase implements Database {
    constructor(public Logger: Logger) { this.Logger = new ConsoleLogger() }

    public save(key: string, value: string) {
        this.Logger.log(`salvando o valor ${ value } passado para a chave ${ key }`);
    }
}

const log1 = new ConsoleLogger();
const log2 = new ConsoleLogger2();

const data1 = new ExampleDatabase(log1);
const data2 = new ExampleDatabase(log2);


data1.save('key 1', 'anonimus');
data2.save('key 2', 'tenia');







