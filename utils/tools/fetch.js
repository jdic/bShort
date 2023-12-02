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
  const domain = (new URL(url)).origin

  const title = $(TITLE_SELECTOR).text()
  const favicon = $(FAVICON_OP1_SELECTOR).attr('href') || $(FAVICON_OP2_SELECTOR).attr('href')

  return { title, favicon, domain }
}

module.exports = fetch