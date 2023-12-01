const Url = require('../models/Url')

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

const newCode = () => Array.from({ length: 3 }, () => characters[Math.floor(Math.random() * 52)]).join('')

/**
 * Get a new shortener code that is not repeated.
 * @returns { String }
 */
const short = async () =>
{
  let short_url = newCode()
  let exists = await Url.findOne({ short_url })

  while (exists)
  {
    short_url = newCode()
    exists = await Url.findOne({ short_url })
  }

  return short_url
}

module.exports = short