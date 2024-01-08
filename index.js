const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const routes = require('./routes/ToDoRoute')

const PORT = process.env.port || 5000
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(PORT, () => {
    console.log(`Server starting ${PORT} port`);
})

const uri = process.env.MOGODB_URI

mongoose.connect(uri).then(() => console.log('Connected db!'));


