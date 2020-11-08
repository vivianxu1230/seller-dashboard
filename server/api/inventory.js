const router = require('express').Router()
const sequelize = require('sequelize')
const {Inventory} = require('../db/models')
module.exports = router

router.get('/stock', async (req, res, next) => {
  try {
    const inventory = await Inventory.findAll()
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
