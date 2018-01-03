module.exports = {
    port: process.env.PORT || 3000,
    db: process.env.PROD_MONGODB || 'mongodb://localhost:27017/shop', //'mongodb://gaston:Gmatias1234@ds239587.mlab.com:39587/heroku_jpz3m3m0',
    SECRET_TOKEN: 'miclavedetokens' //debe ser un codigo dificl de saber, no como este
}