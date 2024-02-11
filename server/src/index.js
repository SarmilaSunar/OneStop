const express = require('express')
const mongoose = require('mongoose');
const app = express()
const cors = require('cors')

require('dotenv').config()

const userRoute = require('./routes/users')
const connection = require('./db/connection')
const categoryRoute = require('./routes/categories');
const productRoute = require('./routes/products');

app.use(cors()) 
app.use(express.json())
app.use(categoryRoute);
app.use(productRoute);

connection()
const port = process.env.PORT

app.use(userRoute)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})