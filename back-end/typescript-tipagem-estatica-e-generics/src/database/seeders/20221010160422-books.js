'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'books',
      [
        {
          title: 'Código Limpo',
          price: 125.9,
          author: 'Alex C Martin',
          isbn: '8576082675'
        },
        {
          title: 'Refatoração',
          price: 129.9,
          author: 'Andre Fowler',
          isbn: '8575227246'
        },
        {
          title: 'Padrões de Projetos',
          price: 141.98,
          author: 'Arthur Gamma',
          isbn: '8573076100'
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('books', null, {});
  },
};
