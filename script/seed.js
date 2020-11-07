'use strict'

const db = require('../server/db')
// const {User} = require('../server/db/models')
const {Inventory} = require('../server/db/models')
const {Sale} = require('../server/db/models')
// const {seedInventory} = require('./inventory')
const seedInventory = [
  {
    dateBought: '2020-06-19',
    dateListed: '2020-07-17',
    locationBought: 'eBay',
    name: 'Calvin Klein suit set',
    featured: false,
    cost: 47.0,
    notes: '',
    salesId: 1
  },
  {
    dateBought: '2020-06-21',
    dateListed: '2020-07-14',
    locationBought: 'eBay',
    name: 'Mcqueen heels',
    featured: false,
    cost: 36.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-07-30',
    dateListed: '2020-08-22',
    locationBought: 'Poshmark',
    name: 'Prada sport white skirt',
    featured: false,
    cost: 21.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-08-09',
    dateListed: '2020-08-14',
    locationBought: 'eBay',
    name: 'Hussein chalayan shirt',
    featured: false,
    cost: 37.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-08-09',
    dateListed: '2020-08-15',
    locationBought: 'eBay',
    name: 'Helmut 2005 knot archive sandals',
    featured: false,
    cost: 21.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-08-10',
    dateListed: '2020-08-17',
    locationBought: 'Thredup',
    name: 'Miss Sixty top',
    featured: false,
    cost: 8.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-08-11',
    dateListed: '2020-08-11',
    locationBought: 'Elliott',
    name: 'Tom Ford YSL skirt',
    featured: false,
    cost: 60.0,
    notes: '',
    salesId: 3
  },
  {
    dateBought: '2020-08-16',
    dateListed: '2020-08-21',
    locationBought: 'eBay',
    name: 'Moschino fake tank',
    featured: false,
    cost: 21.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-08-21',
    dateListed: '2020-08-23',
    locationBought: 'Poshmark',
    name: 'Versace skirt',
    featured: false,
    cost: 27.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-08-21',
    dateListed: '2020-09-02',
    locationBought: 'eBay',
    name: 'Versus versace dress',
    featured: false,
    cost: 16.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-09-04',
    dateListed: '2020-09-15',
    locationBought: 'Poshmark',
    name: 'D&G skirt',
    featured: false,
    cost: 20.0,
    notes: '',
    salesId: 2
  },
  {
    dateBought: '2020-09-04',
    dateListed: '2020-09-12',
    locationBought: 'Poshmark',
    name: 'Fendi jeans digital/fractal mesh skirt 90s',
    featured: false,
    cost: 50.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-09-06',
    dateListed: '2020-09-12',
    locationBought: 'eBay',
    name: 'Margiela 90s shrunken jacket',
    featured: false,
    cost: 72.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-09-06',
    dateListed: '2020-10-13',
    locationBought: 'eBay',
    name: 'Girbaud jean skirt',
    featured: false,
    cost: 30.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-09-11',
    dateListed: '2020-09-14',
    locationBought: 'Poshmark',
    name: 'Miu miu snap dress',
    featured: false,
    cost: 32.0,
    notes: '',
    salesId: 4
  },
  {
    dateBought: '2020-09-11',
    dateListed: '2020-09-14',
    locationBought: 'Poshmark',
    name: 'Betseyville fairy dress',
    featured: false,
    cost: 44.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-09-21',
    dateListed: '2020-09-28',
    locationBought: 'Thredup',
    name: 'Gaultier soleil jewels top',
    featured: false,
    cost: 130.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-09-27',
    dateListed: '2020-10-01',
    locationBought: 'Poshmark',
    name: 'Prada bag',
    featured: false,
    cost: 34.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-10-01',
    dateListed: '2020-10-08',
    locationBought: 'Thredup',
    name: 'Viv T sheer shirt',
    featured: false,
    cost: 23.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-10-04',
    dateListed: '2020-10-08',
    locationBought: 'eBay',
    name: 'CDG tao black top',
    featured: false,
    cost: 27.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-10-04',
    dateListed: '2020-10-08',
    locationBought: 'eBay',
    name: 'Junya velvet skirt',
    featured: false,
    cost: 27.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-10-07',
    dateListed: '2020-10-15',
    locationBought: 'Poshmark',
    name: 'Plein sud strapless mesh dress',
    featured: false,
    cost: 61.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-10-09',
    dateListed: '2020-10-09',
    locationBought: 'Mercari',
    name: 'Plein sud belt',
    featured: false,
    cost: 18.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-10-09',
    dateListed: '2020-10-09',
    locationBought: 'Mercari',
    name: 'Prada blue leather skirt',
    featured: false,
    cost: 32.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-10-15',
    dateListed: '2020-10-19',
    locationBought: 'Poshmark',
    name: 'Miu miu metallic skirt',
    featured: false,
    cost: 27.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-10-22',
    dateListed: '2020-10-26',
    locationBought: 'Poshmark',
    name: 'Gaultier skirt',
    featured: false,
    cost: 14.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-10-22',
    dateListed: '2020-10-26',
    locationBought: 'Poshmark',
    name: 'D2 top',
    featured: false,
    cost: 14.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-10-22',
    dateListed: '2020-11-01',
    locationBought: 'Poshmark',
    name: 'Versace top',
    featured: false,
    cost: 34.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-10-22',
    dateListed: '2020-11-05',
    locationBought: 'Poshmark',
    name: 'VW sex keyring',
    featured: false,
    cost: 34.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-10-22',
    dateListed: '2020-10-29',
    locationBought: 'Mercari',
    name: 'Prada bag',
    featured: false,
    cost: 20.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-10-27',
    dateListed: '2020-11-05',
    locationBought: 'eBay',
    name: 'Hussein chalayan shirt pink',
    featured: false,
    cost: 23.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-10-27',
    dateListed: '2020-11-05',
    locationBought: 'eBay',
    name: 'Christian lacroix skirt',
    featured: false,
    cost: 35.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-10-27',
    dateListed: '2020-11-05',
    locationBought: 'Poshmark',
    name: 'Diesel tank',
    featured: false,
    cost: 14.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-10-27',
    dateListed: '2020-11-05',
    locationBought: 'Poshmark',
    name: 'Diesel velvet jumpsuit',
    featured: false,
    cost: 17.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-11-04',
    dateListed: '2020-11-07',
    locationBought: 'Poshmark',
    name: 'Dior Galliano monogram top cherry',
    featured: false,
    cost: 70.0,
    notes: '',
    salesId: null
  },
  {
    dateBought: '2020-11-04',
    dateListed: '2020-11-07',
    locationBought: 'Poshmark',
    name: 'Dior Galliano corset tank',
    featured: false,
    cost: 70.0,
    notes: '',
    salesId: null
  }
]

const seedSales = [
  {
    dateSold: '2020-08-19',
    dateListed: '2020-07-17',
    name: 'Calvin Klein suit set',
    featured: false,
    cost: 30.0,
    soldPrice: 100.0,
    shippingCost: 4.0,
    notes: '',
    likes: 77
  },
  {
    dateSold: '2020-08-23',
    dateListed: '2020-08-11',
    name: 'Tom Ford YSL skirt',
    featured: false,
    cost: 60.0,
    soldPrice: 190,
    shippingCost: 4.0,
    notes: '',
    likes: 50
  },

  {
    dateSold: '2020-09-19',
    dateListed: '2020-09-15',
    name: 'D&G skirt',
    featured: false,
    cost: 20.0,
    soldPrice: 100,
    shippingCost: 4.0,
    notes: '',
    likes: 34
  },
  {
    dateSold: '2020-09-29',
    dateListed: '2020-09-14',
    name: 'Miu miu snap dress',
    featured: false,
    cost: 32.0,
    soldPrice: 90,
    shippingCost: 4.0,
    notes: '',
    likes: 73
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  for (let i = 0; i < seedInventory.length; i++) {
    await Inventory.create(seedInventory[i])
  }
  for (let i = 0; i < seedSales.length; i++) {
    await Sale.create(seedSales[i])
  }
  // const users = await Promise.all([
  //   User.create({email: 'cody@email.com', password: '123'}),
  //   User.create({email: 'murphy@email.com', password: '123'})
  // ])

  console.log(`seeded ${seedInventory.length} items`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
