const Honeybadger = require('honeybadger-js')

exports.onClientEntry = function(_, { apiKey }) {
  Honeybadger.configure({
    apiKey,
    environment: process.env.NODE_ENV
  })
}