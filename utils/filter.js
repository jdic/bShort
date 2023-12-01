const ip = require('./ip')

const address = `http://${ip()}:5000/`

const filter = ({ original_url, short_url, title, created, modified, favicon, domain, _id }) =>
{
  return ({ _id, original_url, short_url, title, created, modified, favicon, domain, short_url: `${address}${short_url}` })
}

module.exports = filter