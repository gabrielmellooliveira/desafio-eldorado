const { Sequelize } = require('sequelize')
const database = require('../index')

const UserModel = database.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, { timestamps: false })

module.exports = UserModel