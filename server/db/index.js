const mongoose = require('mongoose')

// Connexion a la base de donnée mongodb

mongoose
    .connect('mongodb://mongo:27017/cinema', { useNewUrlParser: true })
    .catch(e => {
        console.error('Erreur de connexion', e.message)
    })

const db = mongoose.connection

module.exports = db