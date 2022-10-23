"use strict";
class ConsoleLogger {
    log(param) {
        console.log(param);
    }
}
class ConsoleLogger2 {
    log(param) {
        console.log(`logger 2: ${param}`);
    }
}
class ExampleDatabase {
    constructor(Logger) {
        this.Logger = Logger;
        this.Logger = new ConsoleLogger();
    }
    save(key, value) {
        this.Logger.log(`salvando o valor ${value} passado para a chave ${key}`);
    }
}
const log1 = new ConsoleLogger();
const log2 = new ConsoleLogger2();
const data1 = new ExampleDatabase(log1);
const data2 = new ExampleDatabase(log2);
data1.save('key 1', 'anonimus');
data2.save('key 2', 'tenia');
