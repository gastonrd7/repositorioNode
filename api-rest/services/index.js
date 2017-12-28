'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')

function createToken(user) {
    const payload = {
        sub: user._id, //no es recomendado usar el mismo id de mongo, pero para simplificar ahora si lo usamos
        iat: moment().unix(), //guardamos la fecha y hora en el momento que se crea el token
        exp: moment().add(14, 'days').unix() //va a caducar en 14 dias
    }

    return jwt.encode(payload, config.SECRET_TOKEN)
}

function decodeToken(token){
    const decoded = new Promise((resolve, reject)  =>{
        try{
            const payload = jwt.decode(token, config.SECRET_TOKEN)
            if(payload.exp <= moment().unix()){
                resolve({
                    status: 401,
                    message: 'El token ah expirado'
                })
            }

            resolve(payload.sub)
        } catch (err) {
            reject({
                status: 500,
                message: 'Invalid token'
            })
        }
    })

    return decoded
}

module.exports = {
    createToken,
    decodeToken
}