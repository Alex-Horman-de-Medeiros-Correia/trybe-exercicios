const joi = require('joi');
const game = require('../model/game.model');
const user = require('../model/user.model');
const tournamentModel = require('../model/tournoument.model');

const tournamentSchema = joi.object({
    name: joi.string().required().min(4).max(30),
    user_amount: joi.number().required().min(2),
    id_game: joi.number().required(),
    owner_id: joi.number().required()
});

const errorGenerate = (status, message, type) => ({ status, message, type })

const tournoumentCreate = async (tournament) => {
    const { error } = tournamentSchema.validate(tournament);

    if (error) throw errorGenerate(418, error.message, 'invalido');

    // game
    const gameId = await game.findById(tournament.id_game);

    if (gameId.length <= 0) throw errorGenerate(418, error.message, 'invalido');

    // owner
    const ownerId = await user.findById(tournament.owner_id);
    if (!ownerId) throw errorGenerate(404, error,message, 'Not Found');

    // owner is organizer || admin?
    if(user.role !== 'organizer' || user.role !== 'admin') {
        throw errorGenerate(403, error.message, 'authorized');
    }

    const newTournament = await tournamentModel.create(tournament);

    return {
        id: newTournament,
        ...tournament
    };
}

module.exports = {
    tournoumentCreate,
};
