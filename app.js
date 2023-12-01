const errorHandler = require('./middlewares/error_handler')
const shortener = require('./routes/shortener')
const redirect = require('./routes/redirect')
const express = require('express')
require('./db')

const app = express()

app.use(require('cors')())
app.use(express.json())

app.use('/shortener', shortener)
app.use('/', redirect)

app.use(errorHandler)

app.listen(5000, () => console.log('[INFO]'.blue, 'Server ready'))