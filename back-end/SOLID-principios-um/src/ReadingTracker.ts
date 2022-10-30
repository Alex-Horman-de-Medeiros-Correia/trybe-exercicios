// ReadingTracker.ts
// eslint-disable-next-line import/no-unresolved, import/extensions
import EmailNotification from './EmailNotification';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Notificator from './Notificator';

export default class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;
  
  constructor(
    readingGoal: number,
    public notificator: Notificator = new EmailNotification('email'),
    ) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      this.notificator.sendNotificador(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }
    this.notificator.sendNotificador('There are still some books to go!');
  }
  // Aqui viriam mais métodos, que fogem o escopo deste exercício
}
