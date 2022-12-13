'use strict';

const eventPool = require('../eventPool');
const Chance = require('chance');
const chance = new Chance();

function generateOrder(payload = null) {
  payload = payload ? payload : {
    store: chance.company(),
    orderId: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
  };

  console.log('Vendor: order ready!');
  eventPool.emit('PICKUP', payload);
}

function thankDriver(payload) {
  console.log('Vendor: Thanks for delivering to: ', payload.customer);
}

module.exports = { generateOrder, thankDriver };