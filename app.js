const { INTERNAL_SERVER_ERROR, NOT_FOUND, OK, BAD_REQUEST } = require('./utils/constants')
const filter = require('./utils/filter')
const fetch = require('./utils/fetch')
const short = require('./utils/short')
const express = require('express')
const Url = require('./models/Url')
require('./db')

const app = express()

app.use(require('cors')())
app.use(express.json())

app.post('/new', async (req, res) =>
{
  try
  {
    const { original_url } = req.body
    const { title, favicon, domain } = await fetch(original_url)
    const short_url = await short()

    res.status(201).send(await Url.create({ original_url, short_url, title, favicon, domain }))
  }

  catch (error)
  {
    console.error(error)
    res.status(500).send(INTERNAL_SERVER_ERROR)
  }
})

app.get('/all', async (req, res) =>
{
  try
  {
    res.status(200).send((await Url.find()).map((item) => filter(item)))
  }

  catch (error)
  {
    console.error(error)
    res.status(500).send(INTERNAL_SERVER_ERROR)
  }
})

app.get('/:short_url', async (req, res) =>
{
  try
  {
    const { short_url } = req.params
    const url = await Url.findOne({ short_url })

    if (url && url.original_url) res.redirect(url.original_url)
    else res.status(404).json(NOT_FOUND)
  }

  catch (error)
  {
    console.error(error)
    res.status(500).send(INTERNAL_SERVER_ERROR)
  }
})

app.delete('/delete/:id', async (req, res) =>
{
  const { id } = req.params
  if (!id) res.status(400).send(BAD_REQUEST)

  try
  {
    const deleted = (await Url.deleteOne({ _id: id })).deletedCount != 0

    if (deleted) res.status(200).send(OK)
    else res.status(404).send(NOT_FOUND)
  }

  catch (error)
  {
    console.error(error)
    res.status(500).send(INTERNAL_SERVER_ERROR)
  }
})

app.put('/update/:id', async (req, res) =>
{
  const { id } = req.params
  if (!id) res.status(400).send(BAD_REQUEST)

  try
  {
    const updated = await Url.findByIdAndUpdate({ _id: id }, req.body)

    if (updated) res.status(200).send(OK)
    else res.status(404).send(NOT_FOUND)
  }

  catch (error)
  {
    console.error(error)
    res.status(500).send(INTERNAL_SERVER_ERROR)
  }
})

app.listen(5000, () => console.log('[INFO]'.blue, 'Server ready'))