const fs = require('fs').promises;

async function main() {

    try {
        await fs.writeFile('./meuArquivo.txt', 'Sou tryber rapá!');
        console.log('arquivo reescrito com sucesso!');
        const data = await fs.readFile('./meuArquivo.txt', 'utf-8');
        console.log(data);
    }catch(err){
        console.error(`Erro ao reescrever o arquivo: ${err.message}`);
    }

}

main();
