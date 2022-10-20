const mysql = require('mysql2/promise');

const connection = mysql.createPool(
    {
        host: 'localhost',
        password: '123',
        database: 'youwin',
        user: 'root'
    }
);

module.exports = connection;
