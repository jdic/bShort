const { TITLE_SELECTOR, FAVICON_OP1_SELECTOR, FAVICON_OP2_SELECTOR } = require('../selectors')
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
  const { origin, host } = (new URL(url))

  const title = $(TITLE_SELECTOR).text()
  const favicon = `https://www.google.com/s2/favicons?sz=256&domain_url=${host}`

  return { title, favicon, domain: origin }
}

module.exports = fetch