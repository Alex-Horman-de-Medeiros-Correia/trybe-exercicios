

/*  document.getElementById("page-title").innerText = "Pulp Fiction";

document.getElementById("second-paragraph").innerText = "O melhor filme do Tarantino, folks!!!";

document.getElementById("subtitle").innerText = "Tempo de Violência... Como eram ruins os subtítulos dos anos 90"; */

/* let tresFrases = document.getElementsByClassName("semSentido");

 for (let i = 0; i < tresFrases.length; i += 1) {
    tresFrases[i].innerText = 'Ser fã de Tarantino é gostar muita conversa!!!';
} */


let cinema = document.getElementsByClassName("semSentido");

for (let i = 0; i < cinema.length; i += 1) {
    cinema[i].innerText = 'Vamos ver se funciona';
}

document.getElementsByClassName("semSentido")[0].innerText = 'será que funciona?';

document.getElementsByClassName("semSentido")[cinema.length -1].innerText = 'e agora? Essa magia vai funcionar???';

document.getElementsByTagName('h4')[0].style.color = 'grey';

//o htmlcolection é diferente do Nodelist. O nodelist nos retorna elementos que não são necessariamente elementos HTML.



