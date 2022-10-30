// eslint-disable-next-line import/no-unresolved, import/extensions
import Notificador from './Notificator';

class ConsoleNotification implements Notificador {
    constructor(private name: string) { }

    sendNotificador(message: string): void {
        console.log(`Lá vamos nós! ${message} enviada por ${this.name}`);
    }
}

export default ConsoleNotification;
