const github = require('./new');
const {unsuarioInfos} = github;


describe('Quando chamada, a função unsuarioInfos...', () => {

    it ('deve nos retornar um objeto com name, blog, location e bio', async () => {
        expect.assertions(2);

        const urlFunction = await unsuarioInfos('Alex-Horman-de-Medeiros-Correia');
        const objectPromise = {
        name: 'Alex Horman de Medeiros Correia',
        blog: 'https://www.linkedin.com/in/alex-horman-510094226/',
        location: 'João Pessoa - PB',
        bio: 'Estudante na Trybe - Desenvolvimento Web'
      };

        expect(urlFunction).toEqual(objectPromise);
        expect(urlFunction.bio).toEqual('Estudante na Trybe - Desenvolvimento Web');
    });
})

