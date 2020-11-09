const router = require('express').Router()
const {Sale} = require('../db/models')
module.exports = router

function getDifferenceInDays(date1, date2) {
  const diffInMs = Math.abs(date2 - date1)
  return diffInMs / (1000 * 60 * 60 * 24)
}

router.get('/', async (req, res, next) => {
  try {
    const sale = await Sale.findAll()
    res.json(sale)
  } catch (err) {
    next(err)
  }
})

router.get('/calculatedfortable', async (req, res, next) => {
  try {
    const sales = await Sale.findAll()
    const calculatedSales = sales.map(item => ({
      id: item.id,
      name: item.name,
      days: getDifferenceInDays(
        new Date(item.dateSold),
        new Date(item.dateListed)
      ),
      featured: item.featured === true ? 'Y' : 'N',
      grossPayment: item.soldPrice * 0.871 - 0.3 - item.shippingCost,
      profit:
        '$' +
        (item.soldPrice * 0.871 - 0.3 - item.shippingCost - item.cost).toFixed(
          2
        ),
      likes: item.likes,
      margin:
        Math.floor(
          (item.soldPrice * 0.871 - 0.3 - item.shippingCost - item.cost) /
            (item.soldPrice * 0.871 - 0.3 - item.shippingCost) *
            100
        ) + '%'
    }))
    res.json(calculatedSales)
  } catch (err) {
    next(err)
  }
})

router.get('/editsalesdata', async (req, res, next) => {
  try {
    const sales = await Sale.findAll()
    const editSales = sales.map(item => ({
      id: item.id,
      name: item.name,
      dateSold: item.dateSold,
      dateListed: item.dateListed,
      featured: item.featured === true ? 'Y' : 'N',
      soldPrice: '$' + item.soldPrice,
      cost: '$' + item.cost,
      shippingCost: '$' + item.shippingCost,
      likes: item.likes,
      notes: item.notes
    }))
    res.json(editSales)
  } catch (err) {
    next(err)
  }
})

router.get('/calculatedforchart', async (req, res, next) => {
  try {
    const sales = await Sale.findAll()
    const calculatedSales = sales.map(item => ({
      id: item.id,
      name: item.name,
      days: getDifferenceInDays(
        new Date(item.dateSold),
        new Date(item.dateListed)
      ),
      featured: item.featured === true ? 'Y' : 'N',
      grossPayment: item.soldPrice * 0.871 - 0.3 - item.shippingCost,
      profit: item.soldPrice * 0.871 - 0.3 - item.shippingCost - item.cost,
      likes: item.likes,
      margin:
        (item.soldPrice * 0.871 - 0.3 - item.shippingCost - item.cost) /
        (item.soldPrice * 0.871 - 0.3 - item.shippingCost)
    }))
    res.json(calculatedSales)
  } catch (err) {
    next(err)
  }
})

// //new sale from inventory
// router.post('/', async (req, res, next) => {
//   try {
//     //remember to update inventory saleid to a number
//     await Sale.create(req.body)
//     res.sendStatus(204)
//   } catch (err) {
//     next(err)
//   }
// })

router.put('/', async (req, res, next) => {
  try {
    for (let i = 0; i < req.body.length; i++) {
      const item = await Sale.findOne({where: {id: req.body[i].id}})
      item.update(req.body[i])
    }
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})
