require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3055

const news = require('./routes/news')
const weather = require('./routes/weather')
app.use(cors({ origin: 'http://localhost:3000' }));

app.listen(port, () => {
    console.log('Server listening on port ' + port)
})

app.use('/news', news)
app.use('/weather', weather)



