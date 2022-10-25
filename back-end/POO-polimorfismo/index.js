"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const db = [];
class LocalDbModel {
    constructor() {
        this.create = (per) => __awaiter(this, void 0, void 0, function* () {
            const lastId = db.length > 0 ? db[db.length - 1].id : 0;
            const novoPersonagem = Object.assign({ id: lastId + 1 }, per);
            db.push(novoPersonagem);
            return novoPersonagem;
        });
        this.findIndexById = (id) => {
            const byId = db.findIndex((personagem) => personagem.id === id);
            if (byId < 0) {
                throw new Error('Personagem não encontrado!');
            }
            return byId;
        };
        this.update = (id, per) => __awaiter(this, void 0, void 0, function* () {
            const indexUp = this.findIndexById(id);
            const up = db[indexUp] = Object.assign(Object.assign({}, db[indexUp]), per);
            return up;
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            const deleteById = this.findIndexById(id);
            const del = db.splice(deleteById, 1);
            if (del.length > 0) {
                return true;
            }
            ;
            return false;
        });
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            return db;
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            const getBy = this.findIndexById(id);
            return db[getBy];
        });
    }
}
class CharacterService {
    constructor(model) {
        this.model = model;
    }
    ;
    create(per) {
        return __awaiter(this, void 0, void 0, function* () {
            const novoPersonagem = yield this.model.create(per);
            return ({ status: 201, data: novoPersonagem });
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const todos = yield this.model.getAll();
            return ({ status: 200, data: todos });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletar = yield this.model.delete(id);
            return ({ status: 200, data: deletar });
        });
    }
    update(id, per) {
        return __awaiter(this, void 0, void 0, function* () {
            const modificar = yield this.model.update(id, per);
            return ({ status: 200, data: modificar });
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const peloId = yield this.model.getById(id);
            return ({ status: 200, data: peloId });
        });
    }
}
class MockedDbModel {
    create(per) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('per created');
            return { id: 1, nome: 'Peach', Especial: 'Toad' };
        });
    }
    update(id, per) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('per updated');
            return { id: 1, nome: 'Yoshi', Especial: 'Egg Lay' };
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('per deleted');
            return true;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return [
                { id: 1, nome: 'Samus', Especial: 'Charge Shot' },
                { id: 2, nome: 'Kirby', Especial: 'Inhale' },
            ];
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return { id: 1, nome: 'Mario', Especial: 'Fireball' };
        });
    }
}
const A = new CharacterService(new LocalDbModel());
A.getAll().then(console.log);
const B = new CharacterService(new MockedDbModel());
B.getAll().then(console.log);
