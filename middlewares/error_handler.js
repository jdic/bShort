const { INTERNAL_SERVER_ERROR } = require('../utils/status')

/**
 * It is useless, it only sends the http 500 code.
 * @param { import('express').Errback } err 
 * @param { import('express').Request } req 
 * @param { import('express').Response } res 
 * @param { import('express').NextFunction } next 
 */
const errorHandler = (err, req, res, next) =>
{
  console.error(err)
  res.status(500).send(INTERNAL_SERVER_ERROR)
}

module.exports = errorHandler