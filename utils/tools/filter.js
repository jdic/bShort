const ip = require('./ip')

const address = `http://${ip()}:5000/`

/**
 * Select the necessary elements and add the server address to *short_url*.
 * @param { Object } param0 
 * @param { String } param0.original_url
 * @param { String } param0.short_url
 * @param { String } param0.title
 * @param { Date } param0.created
 * @param { Date } param0.modified
 * @param { String } param0.favicon
 * @param { String } param0.domain
 * @param { String } param0._id
 * @returns 
 */
const filter = ({ original_url, short_url, title, created, modified, favicon, domain, _id }) =>
{
  return ({ _id, original_url, short_url, title, created, modified, favicon, domain, short_url: `${address}${short_url}` })
}

module.exports = filter