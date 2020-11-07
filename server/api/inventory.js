const router = require('express').Router()
const {Inventory} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const inventory = await Inventory.findAll()
    res.json(inventory)
  } catch (err) {
    next(err)
  }
})
