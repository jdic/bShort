const cheerio = require('cheerio')

/**
 * Gets the title and favicon of the given url.
 * @param { String } url 
 * @returns { Promise<{ title: string, favicon: string, domain: string }> }
 */
const fetch = async (url) =>
{
  if (!url) return

  const fetch = (await import('node-fetch')).default
  const html = await fetch(url)
  const $ = cheerio.load(await html.text())
  const domain = (new URL(url)).origin

  const title = $('head > title').text()
  const favicon = $('head > link[rel="icon"]').attr('href') || $('head > link[rel="shortcut icon"]').attr('href')

  return { title, favicon, domain }
}

module.exports = fetch