const { tournoumentCreate } = require('../services/tournoument.service');

const tournamentController = async (req, res, next) => {
    try {
        const tournament = req.body;

        const newTournament = await tournoumentCreate(tournament);

        return res.status(201).json(newTournament);

    }catch(err){
        console.log('Erro no controller');
        next(err);
    }
}

module.exports = {
    tournamentController,
};
