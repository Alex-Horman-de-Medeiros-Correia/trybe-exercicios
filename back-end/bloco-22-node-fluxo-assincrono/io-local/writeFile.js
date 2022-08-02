/* const fs = require('fs').promises;

fs.writeFile('./meu-arquivo.txt', 'Alex é um grande programador!')
.then(() => {
    console.log(`O arquivo foi lido com sucesso`);
})
.catch((err) => {
    console.error(`Erro ao tentar execução: ${err}`);
}); */

/* const fs = require('fs').promises;

Promise.all([
    fs.readFile('./meuarquivo.txt'),
    fs.readFile('./meuarquivo2.txt'),
])
    .then(([meuarquivo, meuarquivo2]) => {
    const tamanhoDosArquivos = meuarquivo.byteLength + meuarquivo2.byteLength;
    console.log(`totalidade do tamanho dos arquivos: ${tamanhoDosArquivos}`);
})
    .catch((err) => {
        console.error(`alguma promise deu erro: ${err.message}`);
    }); */

const fs = require('fs').promises;

fs.writeFile('./arquivoInexistente.txt', 'olha, foi mesmo criado!', { flag: 'wx' })
.then(() => {
    console.log('Olha, o arquivo aê!');
})
.catch((err) => {
    console.error(`um erro aconteceu, pois o arquivo já existe: ${err}`);
});
