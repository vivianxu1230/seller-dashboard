const Sequelize = require('sequelize')
const db = require('../db')

const Sale = db.define('sale', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dateSold: {
    type: Sequelize.DATEONLY
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
    type: Sequelize.DECIMAL(10, 2)
  },
  shippingCost: {
    type: Sequelize.DECIMAL(10, 2)
  },
  likes: {
    type: Sequelize.INTEGER
  }
})

module.exports = Sale
