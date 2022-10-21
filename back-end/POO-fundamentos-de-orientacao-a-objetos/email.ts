class Email {
    private _de: String;
    private _para: String;
    private _mensagem: String;
    private _assunto: String;


    constructor(de: string, para: string, mensagem: string, assunto: string) {
        this._de = de;
        this._para = para;
        this._mensagem = mensagem;
        this._assunto = assunto;
    }

    set assunto(novoAssunto: string) {
        if (novoAssunto.length <= 40) {
            this._assunto = novoAssunto;
        }
    }

    get de() {
        return this._de;
    }

    get para() {
        return this._para;
    }

    get conteudo() {
        return console.log(
            `
            De ${ this._de } para ${ this._para }:

            Assunto: ${ this._assunto }!

            Mensagem: ${ this._mensagem }    `
        );   
    }
}

class EmailList {

    constructor( private emailList: Email[] = []) {
    }

    get todosEmails() {
        return this.emailList;
    }

    pegarRemetente(pesquisarR: string) {
        return this.emailList.filter((mail) => mail.de === pesquisarR);
    }

    pegarDestinatario(pesquisarD: string) {
        return this.emailList.filter((mail) => mail.para === pesquisarD);
    }

    pesquisaNoAssunto(novaPalavra: string) {
        return this.emailList.filter((mail) => mail.assunto.indexOf(novaPalavra) !== -1);
    }

    addEmail(novoEmail: Email) {
        return this.emailList.push(novoEmail);
    }

    removeEmail(removerEmail: Email) {
        this.emailList = this.emailList.filter((mail) => mail !== removerEmail);
    }
}

// Para testar
const friendEmail = 'friend@personalmail.com';
const myEmail = 'me@personalmail.com';

const email1 = new Email(
  myEmail,
  friendEmail,
  'Car wash',
  'There\'s a new car wash in town. Did you know?',
);
const email2 = new Email(
  friendEmail,
  myEmail,
  'Reply - Car wash',
  'Great! My car is really dirty. How much do they charge?',
);
const email3 = new Email(
  myEmail,
  friendEmail,
  'Reply - Reply - Car wash',
  '$5.00, and you get a free polishing cloth',
);
const email4 = new Email(
  'me@companymail.com',
  'ceo@companymail.com',
  'Day off monday',
  `Next Tuesday is a holiday.
  Are we going to work on Monday?`,
);
const email5 = new Email(
  'ceo@companymail.com',
  'me@companymail.com',
  'Reply - Day off monday',
  'The entire company will have a day off on monday =D'
);

const personalMailList = new EmailList([email1, email2, email3]);
const professionalMailList = new EmailList([email4, email5]);

console.log('------ personalMailList.pegarRemetente(\'me@personalmail.com\'):');
personalMailList.pegarRemetente(myEmail).forEach(
  (mail) => console.log(mail.conteudo),
);

const email6 = new Email(
  myEmail,
  'friend2@personalmail.com',
  'Day off monday',
  `Oh yes!
   My boss says we\'ll have Monday off.
   Want to go to the movies?`,
);

personalMailList.addEmail(email6);
personalMailList.addEmail(email5); // Adicionado erroneamente

console.log('------ personalMailList.pesquisarNoAssunto(\'Day off\'):');
personalMailList.pesquisaNoAssunto('Day off').forEach(
  (mail) => console.log(mail.conteudo),
);
personalMailList.removeEmail(email5);

console.log('------ professionalMailList.todosEmails:');
professionalMailList.todosEmails.forEach(
  (mail) => console.log(mail.conteudo),
);

console.log('------ personalMailList.todosEmails:');
personalMailList.todosEmails.forEach(
  (mail) => console.log(mail.conteudo),
);