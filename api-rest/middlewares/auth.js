'use strict'

const services = require('../services')

//como es un middleware agregamos el atributo next, para que este le pase el control al controller final
function isAuth(req, res, next) {
    if(!req.headers.authorization) {
        return res.status(403).send({ message: 'No tienes autorizacion' })
    }

    const token = req.headers.authorization.split(" ")[1] //usamos el espacio como split
    
    services.decodeToken(token)
    .then(response =>{
        req.user = response
        next()
    })
    .catch(response =>{
        res.status(response.status)
    })
}

module.exports = isAuth