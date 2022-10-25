interface Personagem {
    nome: string,
    Especial: string,
}

interface umPersonagem extends Personagem {
    id: number;
}

const db: umPersonagem[] = [];


interface IModel {
    create: (per: Personagem) => Promise<umPersonagem>;
    update: (id: number, per: Personagem) => Promise<umPersonagem>
    delete: (id: number) => Promise<boolean>
    getAll: () => Promise<umPersonagem[]>
    getById: (id: number) => Promise<umPersonagem>
}

class LocalDbModel implements IModel {
    create = async (per: Personagem) => {
        const lastId = db.length > 0 ? db[ db.length - 1 ].id : 0;

        const novoPersonagem = { id: lastId + 1, ...per };

        db.push(novoPersonagem);

        return novoPersonagem;
    }   

    findIndexById = (id: number) => {
        const byId = db.findIndex((personagem) => personagem.id === id);

        if(byId < 0) { throw new Error('Personagem não encontrado!') }

        return byId;
    }

    update = async (id: number, per: Personagem) => {
        const indexUp = this.findIndexById(id);

        const up = db[ indexUp ] = { ...db[indexUp], ...per };

        return up;
    }

    delete = async (id: number) => {
        const deleteById = this.findIndexById(id);

        const del = db.splice(deleteById, 1);

        if (del.length > 0) { return true };

        return false;
    }

    getAll = async () => {
        return db;
    }

    getById = async (id: number) => {
        const getBy = this.findIndexById(id);

        return db[ getBy ]
    };
}

class CharacterService {
    constructor(readonly model: IModel) {};

    async create(per: Personagem) {
        const novoPersonagem = await this.model.create(per);

        return ({ status: 201, data: novoPersonagem })
    }

    async getAll() {
        const todos = await this.model.getAll();

        return ({ status: 200, data: todos });
    }

    async delete (id: number) {
        const deletar = await this.model.delete(id);

        return ({ status: 200, data: deletar });
    }

    async update (id: number, per: Personagem) {
        const modificar = await this.model.update(id, per);

        return ({ status: 200, data: modificar });
    }

    async getById (id: number) {
        const peloId = await this.model.getById(id);

        return ({ status: 200, data: peloId });
    }
}

class MockedDbModel implements IModel {

    async create(per: Personagem) {
        console.log('per created');
        return { id: 1, nome: 'Peach', Especial: 'Toad' };
      }
    
      async update(id: number, per: Personagem) {
        console.log('per updated');
        return { id: 1, nome: 'Yoshi', Especial: 'Egg Lay' };
      }
    
      async delete(id: number) {
        console.log('per deleted');
        return true;
      }
    
      async getAll() {
        return [
          { id: 1, nome: 'Samus', Especial: 'Charge Shot' },
          { id: 2, nome: 'Kirby', Especial: 'Inhale' },
        ];
      }
    
      async getById(id: number) {
        return { id: 1, nome: 'Mario', Especial: 'Fireball' };
      }
}

const A = new CharacterService(new LocalDbModel());
A.getAll().then(console.log);

const B = new CharacterService(new MockedDbModel());
B.getAll().then(console.log);
