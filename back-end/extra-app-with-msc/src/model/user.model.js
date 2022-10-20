const conn = require('./connection');


const findById = async (id) => {
    const query = `SELECT * FROM user WHERE id_user = ?`;

    const [result] = await conn.execute(query, [id]);

    return result;
}

module.exports = {
    findById,
}
