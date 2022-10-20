const conn = require('./connection');

const create = async ({ name, user_amount, id_game, owner_id }) => {
    const query = `INSERT INTO tournament ('name', 'user_amount', 'id_game', 'owner_id')
    VALUES (?, ?, ?, ?)`;
    const [result] = await conn.execute(query, [ name, user_amount, id_game, owner_id ]);

    return result.insertId;
};

module.exports = {
    create,
};
