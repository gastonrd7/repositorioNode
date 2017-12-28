'use strict'

const express = require('express')
const ProductCtrl = require('../controllers/product')
const UserCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/product', ProductCtrl.getProducts)
// app.get('/api/product', (req, res) => {
//     ProductCtrl.getProducts(req, res)
// })
api.get('/product/:productId', ProductCtrl.getProduct)
api.post('/product', ProductCtrl.saveProduct)
api.put('/product/:productId', ProductCtrl.updateProduct)
api.delete('/product/:productId', ProductCtrl.deleteProduct)
api.post('/user/signup', UserCtrl.SignUp)
api.post('/user/signin', UserCtrl.SignIn)
//antes de llamar a esta funcion, se puede llamar luego de la ',' tantas funciones como querramos
//y se ejecutaran secuencialmente, con el next que va a estar dentro de estos metodos, en este caso isAuth
api.get('/private',auth, (req, res) => {
    return res.status(200).send({message: 'Tienes acceso'})
})

module.exports = api