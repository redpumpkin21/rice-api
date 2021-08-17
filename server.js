require('dotenv').config()

const PORT = process.env.PORT

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const mongoose = require('./db/connection')

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

const riceRouter = require('./controllers/Rice')
app.get('/', (req, res) => res.send('Server be working'))
app.use('/rice', riceRouter)

app.listen(PORT, () => console.log(`listening on por ${PORT}`))