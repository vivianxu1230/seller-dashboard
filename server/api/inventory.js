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

    res.json(inventory)
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  try {
    for (let i = 0; i < req.body.length; i++) {
      await Inventory.upsert(req.body[i], {id: req.body[i].id})
    }
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})
