enum studentStatus {
    active = 1,
    inactive,
    paused,
};

let newStudant: studentStatus = studentStatus.inactive;

console.log(newStudant);

enum diasDaSemana {
    domingo = 1,
    segunda,
    terça,
    quarta,
    quinta,
    sexta,
};

let quarta: diasDaSemana = diasDaSemana.quarta;

console.log(`quarta representa o dia ${ quarta } da semana.`);

