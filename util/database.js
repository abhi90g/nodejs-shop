const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-complete', 'root', 'fortress@2121', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;