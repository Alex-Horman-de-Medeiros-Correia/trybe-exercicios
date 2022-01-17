//throw / try/catch

/* const sum = (value1, value2) => value1 + value2;

console.log(sum(2, "3")); */

/* const sum = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      return 'Os valores devem ser numéricos';
    }
    return value1 + value2;
  };
  
  console.log(sum(2, "5")); */

  //THROW - FLUXO DE EXCEÇÃO - quando ocorrer um erro no código, uma exceção deve ser lançada, interrompendo o funcionamento do código.

  /* const sum = (para1, para2) => {
      if(typeof para1 !== 'number' || typeof para2 !== 'number'){
          throw new Error('acuse valores numericos, por favor!')
      }
      return para1 + para2;
  }
  console.log(sum(2, '3')); */


  /* const sum = (param1, param2) => {
      if(typeof param1 !== 'number' || typeof param2 !== 'number'){
          throw new Error ('impregue valores numericos');
              }
  }

  const newSum = (param1, param2) => {
      try {
          sum(param1, param2);
          return param1 + param2;
      }catch (error) {
          throw error.message;
      }
  }

  console.log(newSum(2, '3')); */


  //OBJETOS - ADCIONANDO NOVAS CHAVES - KEYS

  /* const myInfo = {
      name: 'Alex',
      age: 31,
      graduation: 'Direito'
  };

  let sobrenome = 'lastName';
  const lastName = 'Horman';
  myInfo[sobrenome] = lastName;

  let emprego = 'job';
  const job = 'desenvolvedor';
  myInfo[emprego] = job;

  let nomeCompleto = 'fullName';
  const fullName = `${myInfo.name} ${myInfo.lastName}`;
  myInfo[nomeCompleto] = fullName;

  console.log(myInfo); */




  /* const objeto = {
      name: 'alex',
      age: 31
  };

  const funcao = (teste, lastName, sobrenome) => {
     teste[lastName] = sobrenome;
     return objeto;
  }

  console.log(funcao(objeto, 'ultimoNome', 'horman' )); */


  /* const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    author: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };
  
  for (const property in coolestTvShow) {
    console.log(property);
  } */
  
  // name
  // genre
  // author
  // favoriteCharacter
  // quote
  // seasons

  //OBJECT.KEYS - RETORNA AS CHAVES DO OBJETO EM ARRAY DE MANEIRA ORDENADA/CRESCENTE!.

  /* const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    author: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };

  console.log(Object.keys(coolestTvShow)); */

  /* const list = {23: 'alex', 12: 'andre', 56: 'arthur'};

  console.log(Object.keys(list)); */

  /* const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

  const estudante = (objeto) => {
      let arraySkills = Object.keys(objeto);

      for (index in arraySkills){
          console.log(`${arraySkills[index]}, nível: ${objeto[arraySkills[index]]}`);
      }
  }

  console.log(estudante(student1));
  console.log(estudante(student2)); */


  //OBJECT.VALUES - nos mostra os valores de um objeto dentro de um array.

  /* const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    author: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };

  /* for (const index in coolestTvShow){
      console.log(coolestTvShow[index]);
  } */

  /* console.log(Object.values(coolestTvShow)); */

  /* const list = {'alex': 31, 'andre': 29, 'arthur': 67};

  console.log(Object.values(list)); */

  /* const objeto = {
      name: 'alex',
      age: 31,
      movieFavorite: 'pulp fiction'
  };

  const chamadaComValores = (param) => Object.values(param);

  console.log(chamadaComValores(objeto)); */

  /* const valures = (param) => {
      let arrayVazio = [];

      for(index in param){
          arrayVazio.push(param[index]);
      }
      return arrayVazio;
      }

      console.log(valures(objeto)); */

      //OBJECT.ENTRIES - CHAMA CHAVES E SEUS RESPECTIVOS VALORES DENTRO DE UM ARRAY QUE, POR SUA VEZ, SE AGRUPAM DENTRO DE UM ARRAY.

      /* const coolestTvShow = {
        name: "BoJack Horseman",
        genre: "adult animation",
        createdBy: "Raphael Bob-Waksberg",
        favoriteCharacter: "Princess Carolyn",
        quote: "Princess Carolyn always lands on her feet.",
        seasons: 6,
      };

      console.log(Object.entries(coolestTvShow)); */

      /* const países = {
        França: 'Paris',
        Brasil: 'Brasília',
        Espanha: 'Madrid',
        Portugal: 'Lisboa',
      };

      

      const pairKeyValue = Object.entries(países);
      
      for (index in pairKeyValue){
          console.log('>>>>>>>');
          console.log('país: ', pairKeyValue[index][0]);
          console.log('capital', pairKeyValue[index][1]);
      } */


      //OBJECT.ASSIGN - COPIA OS VALORES DE TODAS AS PROPRIEDADES DE UM OU MAIS OBJETOS PARA ELENCA-LOS EM UM OBJETO DE ORIGEN. OBJECT.ASSIGN(objetoDestino, valorASerPassado, valorASerPassado).

      
      /* const person = {
        name: 'Alberto',
        lastName: 'Gomes',
        age: 20,
      };
      
      const info = {
        age: 23,
        job: 'engenheiro',
      };
      
      const family = {
        children: ['Maria', 'João'],
        wife: 'Ana',
      };

      Object.assign(person, family, info);
      console.log(person); */

      /* const objeto1 = {
          name: 'alex',
          age:31
      };

      const objeto2 = {
          favoriteMovie: 'pulp fiction',
          favoriteAnime: 'hunterxhunter',
          age: 40
      };

      const euAqui = Object.assign(objeto1, objeto2);
      console.log(euAqui);
      console.log(objeto1); */

      /* const objetoUm = {name: 'amore', age: 23};
      const objetoDois = objetoUm;

      objetoDois.pai = 'manoel horminio';


      console.log(objetoUm); */

      //COMO UTILIZAR O OBJECT.ASSING PARA REPASSAR OS VALORES PARA NOVO OBJETO SEM ALTERAR O OBJETO INICIAL? CRIAREMOS UM OBJETO VAZIO E NÃO MAIS MODIFICAREMOS O OBJETO QUE ANTES SERIA ESCOLHIDO COMO OBJETO DESTINO.

      /* const objeto1 = {
        name: 'alex',
        age:31
    };

    const objeto2 = {
        favoriteMovie: 'pulp fiction',
        favoriteAnime: 'hunterxhunter',
        age: 40
    };

    const newObjeto = Object.assign({}, objeto1, objeto2);
    newObjeto.name = 'andre';

    console.log(newObjeto);
    console.log(objeto1); */

    /* const getDayName = (number) => {
        const dayNumber = number - 1;
        const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        return days[dayNumber];
      };
      
      console.log(getDayName(3)); */
      









