const TITLE_SELECTOR = 'head > title'
const FAVICON_OP1_SELECTOR = 'head > link[rel="icon"]'
const FAVICON_OP2_SELECTOR = 'head > link[rel="shortcut icon"]'

const TITLE_REGEX = /<title>(.*?)<\/title>/i
const FAVICON_REGEX = /<link rel="(shortcut icon|icon)" href="(.*?)"\/>/i

module.exports =
{
  TITLE_SELECTOR,
  FAVICON_OP1_SELECTOR,
  FAVICON_OP2_SELECTOR,

  TITLE_REGEX, 
  FAVICON_REGEX
}