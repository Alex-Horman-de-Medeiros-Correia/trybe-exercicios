/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/extensions
import Notificador from './Notificator';

class PhoneNotification implements Notificador {
    private Phone: number;

    constructor(Phone: number) {
        this.Phone = Phone;
    }

    sendNotificador(message: string): void {
        console.log(`esse foi o telefone que enviou a menssagem: ${this.Phone},
        e aqui a menssagem: ${message}`);
    }
}

export default PhoneNotification;
