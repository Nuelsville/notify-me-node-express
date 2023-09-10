// app.js

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
// const session = require('express-session')
const dotenv = require('dotenv')
const authRoutes = require('./routes/authRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const subscriberRoutes = require('./routes/subscriberRoutes')
const contentRoutes = require('./routes/contentRoutes')
const notificationRoutes = require('./routes/notificationRoutes')

// Load environment variables
dotenv.config()

const app = express()

// Define your whitelist of allowed origins
const whitelist = ['http://localhost:4000']

// Configure CORS options
const corsOptions = {
    origin: (origin, callback) => {
      if (whitelist.includes(origin) || !origin) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add the HTTP methods you want to allow
    allowedHeaders: ['Content-Type', 'Authorization', 'cache-control', 'x-requested-with'], // Add the headers you want to allow
    credentials: true, // Set the "Access-Control-Allow-Credentials" header to "true"
}

// Middleware
app.use(express.json())

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'))

// Enable CORS with whitelist options
// app.use(cors(corsOptions))
app.use(cors())

// Use morgan for logging HTTP requests
app.use(morgan('dev'))

// Routes
// app.use('/', (req, res, next) => {
//   res.json({message: 'Welcome to Zonic me'})
//   next()
// })
app.use('/api/auth', authRoutes)
app.use('/api', categoryRoutes)
app.use('/api', subscriberRoutes)
app.use('/api', contentRoutes)
app.use('/api', notificationRoutes)

module.exports = app
