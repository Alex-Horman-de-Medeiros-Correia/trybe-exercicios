//objetos são estruturas independentes que dispoem de propriedades, e essas, por sua vez, são compostas por chaves e valores.

/* let personagem = {
    name: "naruto",
    lastName: "uzumaki",
    age: "desconhecido",
    tecnicas: ['clone das sombras', 'rasengan', 'rasen-shuriken'],
    nivelDeCarisma: 7,
    plusInfo: {
        cidade: "vila da folha",
        pai: "primeiro hokage",
    }
} */

//console.log("o personagen " + personagem.name + " " + personagem.lastName + " possui uma idade " + personagem.age + ", contudo, seu nível de carisma é " + personagem.nivelDeCarisma + "!");

//console.log("o personagen " + personagem['name'] + " " + personagem['lastName'] + " possui uma idade " + personagem['age'] + ", contudo, seu nível de carisma é " + personagem['nivelDeCarisma'] + "!");

//Quando utilizar notação por colchetes e quando utilizar notação por ponto? Vou utilizar colchetes quando quiser criar propriedades de maneira dinâmica.

//personagem['fullName'] = personagem.name + ' ' + personagem.lastName;

//console.table(personagem);

//Objetos podem ter outros objetos dentro de si, e estes podem ter suas próprias propriedades.

//console.log(personagem.fullName + " " + "nasceu na " + personagem.plusInfo.cidade + " e teve como pai o famoso " + personagem.plusInfo.pai);


/* let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
    };
    
    diasDaSemana.1; // SyntaxError: Unexpected number
    console.log(diasDaSemana['1']); // domingo */


/*     let conta = {
        agencia: '0000',
        banco: {
          cod: '012',
          id: 4,
          nome: 'TrybeBank',
        },
      };
      
      let infoDoBanco = 'banco';
      console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
      console.log(conta[infoDoBanco]['nome']); // TrybeBank
      
      console.log(conta.agencia); // 0000
      console.log(conta['agencia']); // 0000
      
      console.log(conta.banco.cod); // 012
      console.log(conta['banco']['id']); // 4 */




     /*  let moradores = [
        {
          nome: 'Luiza',
          sobrenome: 'Guimarães',
          andar: 10,
          apartamento: 1005,
        },
        {
          nome: 'William',
          sobrenome: 'Albuquerque',
          andar: 5,
          apartamento: 502,
        },
        {
          nome: 'Murilo',
          sobrenome: 'Ferraz',
          andar: 8,
          apartamento: 804,
        },
        {
          nome: 'Zoey',
          sobrenome: 'Brooks',
          andar: 1,
          apartamento: 101,
        },
      ];
      
      let primeiroMorador = moradores[0];
      console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
      console.log(primeiroMorador['andar']); // 10
      
      let ultimoMorador = moradores[moradores.length - 1];
      console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
      console.log(ultimoMorador.nome); // Zoey */



   /*    let player = {
          name: 'Alex',
          lastName: 'Horman',
          age: '31',
          medals: {
              golden: 3,
              silver: 6,
          }
      };

      console.log('o jogador ' + player.name + ' ' + player.lastName + ' possui ' + player.age + ' anos de idade!');

      player['bestInTheWorld'] = [2010, 2015, 2019];

      console.log(player);

      console.log('o jogador ' + player.name + ' ' + player.lastName + ' foi eleito o melhor do mundo por ' + player.medals.golden + ' vezes, sendo campeão em ' + player.bestInTheWorld[0] + ',' + player.bestInTheWorld[1] + ',' + player.bestInTheWorld[2]);

      console.log('o jogador possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata!'); */









      /* let pizzas = {
          sabor: 'chocolate',
          preco: 20.90,
          bordaRecheada: true
      };

      for(let propriedades in pizzas){
          console.log(pizzas[propriedades]);

      } */


      let pizzasDoces = ['morango', 'coco', 'baunilha'];

      for(let key in pizzasDoces) {
          console.log(key, pizzasDoces[key]);
      }





