const express = require('express')
const app = express()
const userRouters = require('./routes/userRoutes')
const postRouters = require('./routes/postRoutes')

app.use(express.json())
app.use('/api/users', userRouters)
app.use('/api/posts', postRouters)

module.exports = app