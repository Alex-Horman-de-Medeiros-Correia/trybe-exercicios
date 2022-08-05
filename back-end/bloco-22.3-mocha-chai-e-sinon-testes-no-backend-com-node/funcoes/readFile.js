const fs = require('fs');
const arquivo = require('../io-file/arquivo.txt');

const funcRead = ((arquivo) => {


        fs.readFile(arquivo, (err, content) => {
            if(err) return null;
            content(arquivo);
        })
    
    })

    funcRead(arquivo)
    .then((content) => {
        console.log(`lido arquivo com ${content.byteLength} bytes`);
    })
    .catch((err) => {
        console.log(`erro ao ler arquivo... ${err.message}`);
    })


