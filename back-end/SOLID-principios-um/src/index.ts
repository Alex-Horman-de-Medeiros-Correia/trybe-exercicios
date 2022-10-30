type Diciplina = {
    nome: string,
    nota: number,
    notaAmericana?: string
};

type Aluno = {
    nome: string,
    diciplinas: Diciplina[]
};

const apoioParaFunc = {
    numeros: [0.9, 0.8, 0.7, 0.6, 0.1],
    letras: ['A', 'B', 'C', 'D', 'E'],
};

function pegandoLetras(myNumber: number): string {
    const myNumbers = apoioParaFunc.numeros;
    const myLetters = apoioParaFunc.letras;
    
    for (let i = 0; i < myNumbers.length; i += 1) {
        if (myNumber >= myNumbers[i]) return myLetters[i];
    }
    return 'F';
}

// coletando notas

const enviandoLetras = (diciplina: Diciplina): Diciplina => ({
    ...diciplina,
    notaAmericana: pegandoLetras(diciplina.nota),
});

// converter

const paraCadaEstudante = (estudante: Aluno): Aluno => ({
    ...estudante,
    diciplinas: estudante.diciplinas.map(enviandoLetras),
});

// determinar

const estudantesAprovados = ({ diciplinas }: Aluno): boolean =>
    diciplinas.every(({ nota }) => nota > 0.7);

// atualizar

const atualizarAprovacao = (estudante: Aluno): void => {
    console.log(`a pessoa de nome ${estudante.nome} foi aprovada`);

    estudante.diciplinas.forEach(({ nome, notaAmericana }) => {
        console.log(`diciplina: ${nome}, nota Americana: ${notaAmericana}`);
    });
};

function setApproved(estudantes: Aluno[]) {
    estudantes
        .map(paraCadaEstudante)
        .filter(estudantesAprovados)
        .map(atualizarAprovacao);
}

export {
    paraCadaEstudante,
    estudantesAprovados,
    atualizarAprovacao,
    setApproved,
};
