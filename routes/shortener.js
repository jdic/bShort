const { fetch, filter, short } = require('../utils/utils')
const { NOT_FOUND, OK } = require('../utils/status')
const router = require('express').Router()
const Url = require('../models/Url')

router.get('/all', async (req, res, next) =>
{
  try
  {
    res.status(200).send((await Url.find()).map((item) => filter(item)))
  }

  catch (error) { next(error) }
})

router.delete('/delete/:_id', async (req, res, next) =>
{
  try
  {
    const { _id } = req.params
    const deleted = (await Url.deleteOne({ _id })).deletedCount != 0

    if (deleted) res.status(200).send(OK)
    else res.status(404).send(NOT_FOUND)
  }

  catch (error) { next(error) }
})

router.post('/new', async (req, res, next) =>
{
  try
  {
    const { original_url } = req.body
    const { title, favicon, domain } = await fetch(original_url)
    const short_url = await short()

    res.status(201).send(await Url.create({ original_url, short_url, title, favicon, domain }))
  }

  catch (error) { next(error) }
})

router.put('/update/:_id', async (req, res, next) =>
{
  try
  {
    const { _id } = req.params
    const updated = await Url.findByIdAndUpdate({ _id }, req.body)

    if (updated) res.status(200).send(OK)
    else res.status(404).send(NOT_FOUND)
  }

  catch (error) { next(error) }
})

module.exports = router