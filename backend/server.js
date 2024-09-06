require('dotenv').config()
const express = require('express')
const app = express()
const port = 3055

const news = require('./routes/news')


app.listen(port, () => {
    console.log('Server listening on port ' + port)
})

app.use('/news', news)



