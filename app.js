const express = require('express')
const app = express()
const {userRouters, postRouters} = require('./routes')


app.use(express.json())
app.use('/api/users', userRouters)
app.use('/api/posts', postRouters)

module.exports = app