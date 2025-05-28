const express = require('express')
const app = express()
const authMiddleware = require('./middlewares/auth.middleware')
const {authRouters, userRouters, postRouters} = require('./routes')


app.use(express.json())
app.use('/api/auth', authRouters)
app.use(authMiddleware)
app.use('/api/users', userRouters)
app.use('/api/posts', postRouters)

module.exports = app