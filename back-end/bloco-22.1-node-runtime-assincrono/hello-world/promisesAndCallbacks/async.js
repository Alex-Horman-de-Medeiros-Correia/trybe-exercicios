function divisao(num1, num2) {

    const promise = new Promise((resolve, reject) => {

        if(num2 == 0) reject(new Error('Não se pode dividir por zero'));

        const resultado = num1 / num2;
        resolve(resultado);
    });

    return promise;
};

const result = async () => {
    const resultado = await divisao(4, 0);
    console.log(`Resultado: ${resultado}`);
};
