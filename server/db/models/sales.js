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

Sale.beforeUpdate(sale => {
  if (typeof sale.soldPrice === 'string' && sale.soldPrice[0] === '$') {
    sale.soldPrice = Number(sale.soldPrice.slice(1))
  }
  if (typeof sale.cost === 'string' && sale.cost[0] === '$') {
    sale.cost = Number(sale.cost.slice(1))
  }
  if (typeof sale.shippingCost === 'string' && sale.shippingCost[0] === '$') {
    sale.shippingCost = Number(sale.shippingCost.slice(1))
  }
})

module.exports = Sale
