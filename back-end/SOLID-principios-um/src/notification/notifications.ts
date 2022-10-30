type notification = { type: string, send: (message: string) => void };

const consoleNotification: notification = {
  type: 'Console',
  send: (message) => console.log(`Console: ${message}`),
};

const emailNotification: notification = {
  type: 'Email',
  send: (message) => console.log(`Email: ${message}`),
};

const phoneNotification: notification = {
  type: 'Phone',
  send: (message) => console.log(`Phone: ${message}`),
};

const notiTogether: notification[] = [
  consoleNotification,
  emailNotification,
  phoneNotification,
];

export default function progressNotification(
  message: string,
  typeZero = 'Console',
  notificationArray: notification[] = notiTogether,
): void {
  notificationArray.forEach((notificaion) => {
    if (notificaion.type === typeZero) {
      notificaion.send(message);
    }
  });
}
