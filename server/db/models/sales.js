const Sequelize = require('sequelize')
const db = require('../db')

const Sale = db.define('sale', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dateSold: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  dateListed: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  notes: {
    type: Sequelize.TEXT
  },
  featured: {
    type: Sequelize.BOOLEAN
  },
  cost: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
  soldPrice: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
  shippingCost: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
  likes: {
    type: Sequelize.INTEGER
  }
})

module.exports = Sale
