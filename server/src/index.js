

const express = require('express')
const mongoose = require('mongoose');
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors()) 
require('dotenv').config()
const userRoute = require('./routes/users')
const connection = require('./db/connection')
connection()
const port = process.env.PORT

app.use(userRoute)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
