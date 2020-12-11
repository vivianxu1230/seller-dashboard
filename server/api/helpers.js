const readXlsxFile = require('read-excel-file/node')

const schema = {
  name: {
    prop: 'name',
    type: String
  },
  dateSold: {
    prop: 'dateSold',
    type: Date,
    required: true
  },
  dateListed: {
    prop: 'dateListed',
    type: Date
  },
  notes: {
    prop: 'notes',
    type: String
  },
  featured: {
    prop: 'featured',
    type: String
  },
  cost: {
    prop: 'cost',
    type: Number
  },
  soldPrice: {
    prop: 'soldPrice',
    type: Number
  },
  shippingCost: {
    prop: 'shippingCost',
    type: Number
  },
  likes: {
    prop: 'likes',
    type: Number
  }
}

async function parseFile(path) {
  const result = await readXlsxFile(path, {schema})
  return result
}

module.exports = parseFile
