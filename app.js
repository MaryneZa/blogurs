const express = require('express');
const cors = require('cors');
const app = express();
const authMiddleware = require('./middlewares/auth.middleware');
const {authRouters, userRouters, postRouters} = require('./routes');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.json())

app.use(cors({
  origin: 'http://localhost:3000', // or your frontend port
  credentials: true, // only if you're using cookies or Authorization headers
}));

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

app.use('/api/auth', authRouters)
app.use(authMiddleware)
app.use('/api/users', userRouters)
app.use('/api/posts', postRouters)

module.exports = app