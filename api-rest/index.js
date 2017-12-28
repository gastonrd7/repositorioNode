'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err, res) => {
    if (err) {
        return console.log(`Error al conectar con la Bd: ${err}`)
    }

    console.log('Conexion a la bd establecida...')

    app.listen(config.port, () => {
        console.log(`Api rest corriendo en localhost:${config.port}`)
    })
    
})



