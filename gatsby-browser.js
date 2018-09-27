const Honeybadger = require('honeybadger-js')

exports.onClientEntry = function(_, { apiKey }) {
  if (!apiKey) {
    console.warn('gatsby-plugin-honeybadger needs an API key to be configured properly {url for documentation}')
    return
  }

  Honeybadger.configure({
    apiKey,
    environment: process.env.NODE_ENV
  })
}