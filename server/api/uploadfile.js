const router = require('express').Router()
const parseFile = require('./helpers')
const {Sale} = require('../db/models')
const multer = require('multer')
const fs = require('fs')
module.exports = router

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'public/files')
  },
  filename: function(req, file, cb) {
    cb(null, 'sample-file.xlsx')
  }
})

const upload = multer({storage: storage}).single('file')

router.post('/', async (req, res, next) => {
  await upload(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }
    return res.status(200).send(req.file)
  })
  let result = await parseFile('public/files/sample-file.xlsx')
  result = result.rows
  for (let i = 0; i < result.length; i++) {
    await Sale.create(result[i])
  }
  fs.unlinkSync('public/files/sample-file.xlsx')
})

router.get('/', async (req, res, next) => {
  const result = await parseFile('public/files/sample-file.xlsx')
  console.log(result)
  res.send(result.rows)
})
