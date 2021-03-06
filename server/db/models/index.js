const User = require('./user')
const Inventory = require('./inventory')
const Sale = require('./sales')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
// primary key in sales, foreign key in inventory
// Inventory.hasOne(Sale, {foreignKey: {allowNull: false}})
Sale.belongsTo(Inventory)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Inventory,
  Sale
}
