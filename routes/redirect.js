const { NOT_FOUND } = require('../utils/constants')
const router = require('express').Router()
const Url = require('../models/Url')

router.get('/:short_url', async (req, res, next) =>
{
  try
  {
    const { short_url } = req.params
    const url = await Url.findOne({ short_url })

    if (url && url.original_url) res.redirect(url.original_url)
    else res.status(404).json(NOT_FOUND)
  }

  catch (error) { next(error) }
})

module.exports = router