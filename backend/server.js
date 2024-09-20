require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

const news = require('./routes/news')
const weather = require('./routes/weather')

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.use('/news', news)
app.use('/weather', weather)


app.listen(port, () => {
    console.log('Server listening on port ' + port)
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
  });


