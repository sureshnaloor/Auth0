const express = require('express')
require('dotenv').config()
const jwt = require('express-jwt')
const jwksRsa = require('jwks-rsa')

const app = express()

app.get('/public', (req, res) => {
    res.json({message: "Hello from public API!"})
})

app.listen(3001)
console.log("API server listening on " + process.env.REACT_APP_API_URL)