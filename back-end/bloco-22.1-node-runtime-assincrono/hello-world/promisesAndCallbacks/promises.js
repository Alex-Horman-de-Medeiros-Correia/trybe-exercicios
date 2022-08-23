function divisao(num1, num2) {

    const promise = new Promise((resolve, reject) => {

        if(num2 == 0) reject(new Error('Não se pode dividir um numero por zero!'));

        const resultado = num1 / num2;
        resolve(resultado);
    });

    return promise;
};

divisao(4, 1)
    .then(result => console.log(`Caso de sucesso: ${result}`))
    .catch(err => console.log(`Caso de erro: ${err.message}`));
    