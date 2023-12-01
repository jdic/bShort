const { mongodb_uri_connection } = require('./config.json')
const { connection, connect } = require('mongoose')
require('colors')

connect(mongodb_uri_connection || 'mongodb://127.0.0.1:27017/shortener')
  .then(() => console.log('[INFO]'.blue, 'Database ready'))
  .catch((reason) => console.error('[ERR]'.red, `Error: ${reason}`))

module.exports = connection