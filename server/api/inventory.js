const router = require('express').Router()
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const {Inventory} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const allInventory = await Inventory.findAll()

    res.json(allInventory)
  } catch (err) {
    next(err)
  }
})

router.get('/stock', async (req, res, next) => {
  try {
    const inventory = await Inventory.findAll({
      where: {salesId: {[Op.eq]: null}},
      order: [['id', 'ASC']]
    })
    const parsedInventory = inventory.map(item => ({
      id: item.id,
      name: item.name,
      dateBought: item.dateBought,
      dateListed: item.dateListed,
      locationBought: item.locationBought,
      featured: item.featured === true ? 'Y' : 'N',
      cost: '$' + item.cost
    }))
    res.json(parsedInventory)
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    for (let i = 0; i < req.body.length; i++) {
      const item = await Inventory.findOne({where: {id: req.body[i].id}})
      item.update(req.body[i])
    }
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})

Inventory.beforeUpdate(item => {
  if (typeof item.cost === 'string' && item.cost[0] === '$') {
    item.cost = Number(item.cost.slice(1))
  }
})
