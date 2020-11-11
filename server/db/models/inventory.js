const Sequelize = require('sequelize')
const db = require('../db')

const Inventory = db.define('inventory', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dateBought: {
    type: Sequelize.DATEONLY
  },
  dateListed: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  locationBought: {
    type: Sequelize.STRING
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
  salesId: {
    type: Sequelize.INTEGER
  }
})

// Inventory.associate = function(models) {
//   // associations can be defined here
//   User.hasMany(models.Post, {
//       foreignKey: modelId
//   );
// };

module.exports = Inventory
