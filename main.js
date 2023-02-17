const express = require('express');
const router = require('./utils/routers').appRoutes
const app = express()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



app.get('/', (req, res) => {
    res.send('api is up and running')
});

app.use(bodyParser.json())
app.use(...router)

mongoose.connect(process.env.DB_URL)

app.listen(3000, () => {
    console.log('app started on port 3000 🚀')
})

module.exports = app