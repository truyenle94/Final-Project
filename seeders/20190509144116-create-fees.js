'use strict';
const fees =[
  {
    "name":"Duy",
    "fee":"rent",
    "amount":"375"
  },
  {
    "name":"Duy",
    "fee":"electricity",
    "amount":"15"
  },
  {
    "name":"Duy",
    "fee":"internet",
    "amount":"25"
  },
  {
    "name":"Duy",
    "fee":"netflix",
    "amount":"4"
  },
  {
    "name":"Khai",
    "fee":"rent",
    "amount":"415"
  },
  {
    "name":"Khai",
    "fee":"electricity",
    "amount":"15"
  },
  {
    "name":"Khai",
    "fee":"internet",
    "amount":"25"
  },
  {
    "name":"Khai",
    "fee":"netflix",
    "amount":"4"
  },
  {
    "name":"Anh",
    "fee":"rent",
    "amount":"375"
  },
  {
    "name":"Anh",
    "fee":"electricity",
    "amount":"15"
  },
  {
    "name":"Anh",
    "fee":"internet",
    "amount":"25"
  },
  {
    "name":"Anh",
    "fee":"netflix",
    "amount":"4"
  }
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    var feesPaid = fees.map(function(f) {
      f.paid = false;
      f.createdAt = new Date(),
          f.updatedAt = new Date()
      return f
    })

    return  queryInterface.bulkInsert('Fees',feesPaid, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Fees',null,{})
  }
};
