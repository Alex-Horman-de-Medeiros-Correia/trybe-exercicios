/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/extensions
import Notificador from './Notificator';

class EmailNotification implements Notificador {
    private Email: string;

    constructor(Email: string) {
        this.Email = Email;
    }

    sendNotificador(message: string): void {
        console.log(`esse foi o email que enviou a menssagem: ${this.Email},
        e aqui a menssagem: ${message}`);
    }
}

export default EmailNotification;
