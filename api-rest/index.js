'use strict'

const express = require('express')
const bodyParser = require('body-parser')

//import expres from 'express'

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`Api rest corriendo en localhost:${port}`)
})

