//A propriedade parentNode é uma propriedade apenas para leitura, não podendo através da mesma mudar os elementos

// arquivo script.js

/* console.log(document.getElementById('start').nextSibling) // nó

console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>

console.log(document.getElementById("elementoOndeVoceEsta").parentNode);

console.log(document.getElementById("pai").style.color = 'blue');

console.log(document.getElementById("elementoOndeVoceEsta").firstElementChild);

console.log(document.getElementById("primeiroFilhoDoFilho").innerText = 'Alô, alô, camaradas!');

console.log(document.getElementById("pai").firstElementChild);

console.log(document.getElementById("elementoOndeVoceEsta").nextElementSibling);

console.log(document.getElementById('pai').lastElementChild.previousElementSibling); */




let engredientes = [
    'leite',
    'margarina',
    'leite de coco',
    'farinha',
    'tres ovos',
    'leite condensado',
];


let ingredients = document.querySelector(".lista");

for (let i = 0; i < engredientes.length; i += 1){
    let itensTotais = engredientes[i];

    let listNaoOrdenada = document.createElement('li');
    listNaoOrdenada.innerText = itensTotais;

    ingredients.appendChild(listNaoOrdenada);
}


//Segundo exemplo:

let paragrafo = 'Vamos com tudo! Hora de brilhar!!!';

let contido = document.querySelector(".texto");

let dentroDeMain = document.createElement('p');
dentroDeMain.innerText = paragrafo;

contido.appendChild(dentroDeMain);


//Terceiro exemplo:

let frase = 'Aqui tem de tudo, adquira seu livrinho de receitas!!!!!!!';

let abrigo = document.querySelector("#sessao");

let novoFilho = document.createElement('span');
novoFilho.innerText = frase;

abrigo.appendChild(novoFilho);


//Quarto exemplo:

let sessao = document.querySelector(".primeiroFilhoDoFilho");

let listaUnica = [
    'Deus',
    'Pai',
    'filho',
    'espiríto santo',
];

for (let i = 0; i < listaUnica.length; i += 1){
    let elementosJuntos = listaUnica[i];

    let tag = document.createElement('li');
    tag.innerText = elementosJuntos;

    sessao.appendChild(tag);
}


//quinto exemplo:

let coisas = [
    'cachorro',
    'gato',
    'urubu',
    'vaca',
    'pikachu',
];

let naoOrdenada = document.querySelector("#qualquerLista");

for (let i = 0; i < coisas.length; i += 1){
    let coisasFinal = coisas[i];

    let tagNova = document.createElement('li');
    tagNova.innerText = coisasFinal;

    naoOrdenada.appendChild(tagNova);
}






