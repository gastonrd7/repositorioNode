module.exports = {
    port: process.env.PORT || 3000,
    db: process.env.mongodb || 'mongodb://localhost:27017/shop',
    SECRET_TOKEN: 'miclavedetokens' //debe ser un codigo dificl de saber, no como este
}