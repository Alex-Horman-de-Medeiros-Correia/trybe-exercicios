// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function teste(event) {
    event.preventDefault();
    console.log(event.target)
}

HREF_LINK.addEventListener("click", teste);

function teste2 (event) {
    event.preventDefault();
    console.log("clicou")
}

INPUT_CHECKBOX.addEventListener("click", teste2);



function teste3 (event) {
    event.preventDefault();
    console.log("semnome");
}

INPUT_TEXT.addEventListener("keypress", teste3 )
