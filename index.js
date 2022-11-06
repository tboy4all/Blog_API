const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const app = express()

// routes
const authRoute = require('./api/routes/auth')
const userRoute = require('./api/routes/users')
const postRoute = require('./api/routes/posts')
const categoryRoute = require('./api/routes/categories')

// App Config
dotenv.config()

const port = process.env.PORT || 5000

// Database Connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('Connected to MongoDB'))
  .catch((err) => console.log(err))

// Middleware
app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/categories', categoryRoute)

// Listener
app.listen(port, () => {
  console.log(`Backend is running on localhost: ${port}`)
})
