const sequelize= require('sequelize')

const connection = new sequelize('cadastrousuario', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection