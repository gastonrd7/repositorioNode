'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const Api = require('./routes')
//import expres from 'express'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', Api)

module.exports = app