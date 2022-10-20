const conn = require('./connection');

const findById = async (id) => {
    const query = `SELECT * FROM game WHERE id_game = ?`;

    const [result] = await conn.execute(query, [id]);

    return result;
}

module.exports = {
    findById,
};
