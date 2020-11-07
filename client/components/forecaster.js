// // const tf = require('@tensorflow/tfjs')
// const raw = [
//   {
//     'Date sold': '2020-07-08',
//     Item: 'Prada slip',
//     'Featured?': '',
//     'List price': '$90.00',
//   },
//   {
//     'Date sold': '2020-07-08',
//     Item: 'Girbaud dress',
//     'Featured?': '',
//     'List price': '$85.00',
//   },
//   {
//     'Date sold': '2020-07-09',
//     Item: 'Ann leather skirt',
//     'Featured?': '',
//     'List price': '$265.00',
//   },
//   {
//     'Date sold': '2020-07-11',
//     Item: 'Mcqueen bondage top',
//     'Featured?': '',
//     'List price': '$270.00',
//   },
//   {
//     'Date sold': '2020-07-03',
//     Item: 'Hussein top',
//     'Featured?': '',
//     'List price': '$90.00',
//   },
//   {
//     'Date sold': '2020-07-15',
//     Item: 'Hussein skirt',
//     'Featured?': '',
//     'List price': '$93.00',
//   },
//   {
//     'Date sold': '2020-07-15',
//     Item: 'Undercover cage top',
//     'Featured?': '',
//     'List price': '$35.00',
//   },
//   {
//     'Date sold': '2020-07-15',
//     Item: 'Illig skirt',
//     'Featured?': '',
//     'List price': '$35.00',
//   },
//   {
//     'Date sold': '2020-07-15',
//     Item: 'Onlyfriend top',
//     'Featured?': '',
//     'List price': '$45.00',
//   },
//   {
//     'Date sold': '2020-07-20',
//     Item: 'Versace dress',
//     'Featured?': '',
//     'List price': '$100.00',
//   },
//   {
//     'Date sold': '2020-07-24',
//     Item: 'Prada pink windbreaker',
//     'Featured?': '',
//     'List price': '$120.00',
//   },
//   {
//     'Date sold': '2020-07-29',
//     Item: 'Vivienne T mesh size M',
//     'Featured?': '',
//     'List price': '$100.00',
//   },
//   {
//     'Date sold': '2020-07-29',
//     Item: 'Miu miu cow bag',
//     'Featured?': '',
//     'List price': '$280.00',
//   },
//   {
//     'Date sold': '2020-07-29',
//     Item: 'Vivienne T mesh size L',
//     'Featured?': '',
//     'List price': '$100.00',
//   },
//   {
//     'Date sold': '2020-07-29',
//     Item: 'Mcqueen 2003 leather corset',
//     'Featured?': '',
//     'List price': '$270.00',
//   },
//   {
//     'Date sold': '2020-08-01',
//     Item: 'Prada silver pleat skirt',
//     'Featured?': '',
//     'List price': '$140.00',
//   },
//   {
//     'Date sold': '2020-08-01',
//     Item: 'Prada linea rossa buckle skirt',
//     'Featured?': '',
//     'List price': '$140.00',
//   },
//   {
//     'Date sold': '2020-08-06',
//     Item: 'Mcqueen 2003 lock and key convertible bustier',
//     'Featured?': '',
//     'List price': '$210.00',
//   },
//   {
//     'Date sold': '2020-08-06',
//     Item: 'Anna Sui blouse',
//     'Featured?': '',
//     'List price': '$107.50',
//   },
//   {
//     'Date sold': '2020-08-06',
//     Item: 'Moschino sexy sweater',
//     'Featured?': '',
//     'List price': '$107.50',
//   },
//   {
//     'Date sold': '2020-08-07',
//     Item: 'Plein sud sheer top',
//     'Featured?': '',
//     'List price': '$120.00',
//   },
//   {
//     'Date sold': '2020-08-07',
//     Item: 'Lithium dress',
//     'Featured?': '',
//     'List price': '$60.00',
//   },
//   {
//     'Date sold': '2020-08-07',
//     Item: 'Miu Miu 1999 bubble heel',
//     'Featured?': '',
//     'List price': '$320.00',
//   },
//   {
//     'Date sold': '2020-08-08',
//     Item: 'Lanvin dress',
//     'Featured?': '',
//     'List price': '$265.00',
//   },
//   {
//     'Date sold': '2020-08-08',
//     Item: 'SS 2002 Medea Hussein skirt',
//     'Featured?': '',
//     'List price': '$150.00',
//   },
//   {
//     'Date sold': '2020-08-09',
//     Item: 'Dior stockings and garter set',
//     'Featured?': '',
//     'List price': '$35.00',
//   },
//   {
//     'Date sold': '2020-08-11',
//     Item: 'Junya skirt',
//     'Featured?': '',
//     'List price': '$300.00',
//   },
//   {
//     'Date sold': '2020-08-17',
//     Item: 'Moschino tank beauty',
//     'Featured?': '',
//     'List price': '$100.00',
//   },
//   {
//     'Date sold': '2020-08-19',
//     Item: 'Girbaud skirt',
//     'Featured?': '',
//     'List price': '$110.00',
//   },
//   {
//     'Date sold': '2020-08-21',
//     Item: 'Anna sui knit lace top',
//     'Featured?': '',
//     'List price': '$80.00',
//   },
//   {
//     'Date sold': '2020-08-21',
//     Item: 'Pink lace vintage ruched shirt',
//     'Featured?': '',
//     'List price': '$35.00',
//   },
//   {
//     'Date sold': '2020-08-23',
//     Item: 'Moschino nude top',
//     'Featured?': '',
//     'List price': '$120.00',
//   },
//   {
//     'Date sold': '2020-08-23',
//     Item: 'Prada mesh crop',
//     'Featured?': '',
//     'List price': '$70.00',
//   },
//   {
//     'Date sold': '2020-08-26',
//     Item: 'Vivienne Tam sheer top',
//     'Featured?': '',
//     'List price': '$35.00',
//   },
//   {
//     'Date sold': '2020-08-26',
//     Item: '2009 Prada crinkle skirt',
//     'Featured?': '',
//     'List price': '$220.00',
//   },
//   {
//     'Date sold': '2020-08-26',
//     Item: 'Gaultier 2pc dress',
//     'Featured?': '',
//     'List price': '$500.00',
//   },
//   {
//     'Date sold': '2020-08-26',
//     Item: 'Balenciaga by Ghesquiere top',
//     'Featured?': '',
//     'List price': '$80.00',
//   },
//   {
//     'Date sold': '2020-08-26',
//     Item: 'Prada skirt with blue circles',
//     'Featured?': '',
//     'List price': '$80.00',
//   },
//   {
//     'Date sold': '2020-08-28',
//     Item: 'Vivienne Tam cocktail dress',
//     'Featured?': '',
//     'List price': '$60.00',
//   },
//   {
//     'Date sold': '2020-08-29',
//     Item: 'Vivienne Tam ruched skirt',
//     'Featured?': '',
//     'List price': '$40.00',
//   },
//   {
//     'Date sold': '2020-08-29',
//     Item: 'Gucci skirt',
//     'Featured?': '',
//     'List price': '$340.00',
//   },
//   {
//     'Date sold': '2020-09-01',
//     Item: 'Helmut Lang fringe top',
//     'Featured?': '',
//     'List price': '$113.00',
//   },
//   {
//     'Date sold': '2020-09-01',
//     Item: 'Viv w polka skirt',
//     'Featured?': '',
//     'List price': '$113.00',
//   },
//   {
//     'Date sold': '2020-09-01',
//     Item: 'Vivienne Tam Ganesh top',
//     'Featured?': '',
//     'List price': '$250.00',
//   },
//   {
//     'Date sold': '2020-09-03',
//     Item: 'Blue pants',
//     'Featured?': '',
//     'List price': '$25.00',
//   },
//   {
//     'Date sold': '202009--3',
//     Item: 'Prada bow pink skirt',
//     'Featured?': '',
//     'List price': '$150.00',
//   },
//   {
//     'Date sold': '2020-09-04',
//     Item: 'Dior Galliano bow choker',
//     'Featured?': '',
//     'List price': '$90.00',
//   },
//   {
//     'Date sold': '2020-09-05',
//     Item: 'Arcteryx pants',
//     'Featured?': '',
//     'List price': '$45.00',
//   },
//   {
//     'Date sold': '2020-09-05',
//     Item: 'Gaultier sweater',
//     'Featured?': '',
//     'List price': '$275.00',
//   },
//   {
//     'Date sold': '2020-09-05',
//     Item: 'Pink pants',
//     'Featured?': '',
//     'List price': '$20.00',
//   },
//   {
//     'Date sold': '2020-09-05',
//     Item: 'Prada AW 2011 Ski Shield Translucent Sunglasses',
//     'Featured?': '',
//     'List price': '$180.00',
//   },
//   {
//     'Date sold': '2020-09-12',
//     Item: 'Gaultier Marlene Dietrich top',
//     'Featured?': '',
//     'List price': '$475.00',
//   },
//   {
//     'Date sold': '2020-09-12',
//     Item: 'Roberto Cavalli shrug dress',
//     'Featured?': '',
//     'List price': '$105.00',
//   },
//   {
//     'Date sold': '2020-09-12',
//     Item: 'Prada sport panel white skirt',
//     'Featured?': '',
//     'List price': '$80.00',
//   },
//   {
//     'Date sold': '2020-09-13',
//     Item: 'Miumiu side bag 1999-2001',
//     'Featured?': '',
//     'List price': '$150.00',
//   },
//   {
//     'Date sold': '2020-09-15',
//     Item: 'Plein sud wool set',
//     'Featured?': '',
//     'List price': '$210.00',
//   },
//   {
//     'Date sold': '2020-09-16',
//     Item: 'Plein sud sheer skirt',
//     'Featured?': '',
//     'List price': '$190.00',
//   },
//   {
//     'Date sold': '2020-09-16',
//     Item: 'D&G bustier',
//     'Featured?': '',
//     'List price': '$65.00',
//   },
//   {
//     'Date sold': '2020-09-18',
//     Item: 'Custo B skirt',
//     'Featured?': '',
//     'List price': '$40.00',
//   },
//   {
//     'Date sold': '2020-09-19',
//     Item: 'Gianni Versace drape dress',
//     'Featured?': '',
//     'List price': '$208.00',
//   },
//   {
//     'Date sold': '2020-09-20',
//     Item: 'D&G camo pants',
//     'Featured?': '',
//     'List price': '$130.00',
//   },
//   {
//     'Date sold': '2020-09-23',
//     Item: 'Betseyville fairy top',
//     'Featured?': '',
//     'List price': '$110.00',
//   },
//   {
//     'Date sold': '2020-09-24',
//     Item: 'Diesel parachute skirt',
//     'Featured?': '',
//     'List price': '$50.00',
//   },
//   {
//     'Date sold': '2020-09-27',
//     Item: 'Bebe skirt',
//     'Featured?': '',
//     'List price': '$9.00',
//   },
//   {
//     'Date sold': '2020-09-29',
//     Item: 'Save the Queen skirt',
//     'Featured?': '',
//     'List price': '$65.00',
//   },
//   {
//     'Date sold': '2020-09-29',
//     Item: 'Miumiu teal bag',
//     'Featured?': '',
//     'List price': '$68.00',
//   },
//   {
//     'Date sold': '2020-09-30',
//     Item: 'Prada windbreaker',
//     'Featured?': '',
//     'List price': '$65.00',
//   },
//   {
//     'Date sold': '2020-09-30',
//     Item: 'Helmut lang ruched top',
//     'Featured?': '',
//     'List price': '$65.00',
//   },
//   {
//     'Date sold': '2020-10-02',
//     Item: 'Viv blouse',
//     'Featured?': '',
//     'List price': '$150.00',
//   },
//   {
//     'Date sold': '2020-10-02',
//     Item: 'Hussein chalayan top',
//     'Featured?': '',
//     'List price': '$145.00',
//   },
//   {
//     'Date sold': '2020-10-02',
//     Item: 'CDG ss1991 floral embroidered top',
//     'Featured?': '',
//     'List price': '$223.00',
//   },
//   {
//     'Date sold': '2020-10-02',
//     Item: 'Issey tube top',
//     'Featured?': '',
//     'List price': '$120.00',
//   },
//   {
//     'Date sold': '2020-10-04',
//     Item: 'Dexter Wong 90s top',
//     'Featured?': '',
//     'List price': '$150.00',
//   },
//   {
//     'Date sold': '2020-10-04',
//     Item: 'Daang Goodman jeans',
//     'Featured?': '',
//     'List price': '$55.00',
//   },
//   {
//     'Date sold': '2020-10-06',
//     Item: 'Prada top strappy',
//     'Featured?': '',
//     'List price': '$300.00',
//   },
//   {
//     'Date sold': '2020-10-07',
//     Item: 'Diesel dress',
//     'Featured?': '',
//     'List price': '$48.00',
//   },
//   {
//     'Date sold': '2020-10-09',
//     Item: 'D&G velvet tank',
//     'Featured?': '',
//     'List price': '$45.00',
//   },
//   {
//     'Date sold': '2020-10-12',
//     Item: 'Prada AW2010 top',
//     'Featured?': '',
//     'List price': '$60.00',
//   },
//   {
//     'Date sold': '2020-10-13',
//     Item: 'BJ sex pot cardi',
//     'Featured?': '',
//     'List price': '$160.00',
//   },
//   {
//     'Date sold': '2020-10-13',
//     Item: 'Miu miu black lettuce hem skirt',
//     'Featured?': '',
//     'List price': '$100.00',
//   },
//   {
//     'Date sold': '2020-10-16',
//     Item: 'Miu miu skirt beige',
//     'Featured?': '',
//     'List price': '$100.00',
//   },
//   {
//     'Date sold': '2020-10-16',
//     Item: 'Prada peplum lilac top',
//     'Featured?': '',
//     'List price': '$100.00',
//   },
//   {
//     'Date sold': '2020-10-16',
//     Item: 'Miu miu sling bag',
//     'Featured?': '',
//     'List price': '$200.00',
//   },
//   {
//     'Date sold': '2020-10-18',
//     Item: 'Vivienne W hobble skirt velvet',
//     'Featured?': '',
//     'List price': '$90.00',
//   },
//   {
//     'Date sold': '2020-10-18',
//     Item: 'Viv w blazer',
//     'Featured?': '',
//     'List price': '$60.00',
//   },
//   {
//     'Date sold': '2020-10-19',
//     Item: 'Girbaud pink skirt',
//     'Featured?': '',
//     'List price': '$80.00',
//   },
//   {
//     'Date sold': '2020-10-19',
//     Item: 'Prada top zip',
//     'Featured?': '',
//     'List price': '$82.50',
//   },
//   {
//     'Date sold': '2020-10-19',
//     Item: 'Anna sui leather skirt',
//     'Featured?': '',
//     'List price': '$82.50',
//   },
//   {
//     'Date sold': '2020-10-21',
//     Item: 'Girbaud goth batwing skirt',
//     'Featured?': '',
//     'List price': '$65.00',
//   },
//   {
//     'Date sold': '2020-10-22',
//     Item: 'D&G cargo pants',
//     'Featured?': '',
//     'List price': '$50.00',
//   },
//   {
//     'Date sold': '2020-10-22',
//     Item: 'Moschino graphic t',
//     'Featured?': '',
//     'List price': '$50.00',
//   },
//   {
//     'Date sold': '2020-10-26',
//     Item: 'Gucci top',
//     'Featured?': '',
//     'List price': '$90.00',
//   },
//   {
//     'Date sold': '2020-10-27',
//     Item: 'Prada vintage pleated skirt 1999 flower',
//     'Featured?': '',
//     'List price': '$163.00',
//   },
//   {
//     'Date sold': '2020-10-27',
//     Item: 'Hussein Chalayan dress',
//     'Featured?': '',
//     'List price': '$163.00',
//   },
//   {
//     'Date sold': '2020-10-27',
//     Item: 'Gucci bamboo bag',
//     'Featured?': '',
//     'List price': '$90.00',
//   },
//   {
//     'Date sold': '2020-10-28',
//     Item: 'Plein sud with sleeves top',
//     'Featured?': '',
//     'List price': '$150.00',
//   },
//   {
//     'Date sold': '2020-10-28',
//     Item: 'Anna Sui Top 90s furry',
//     'Featured?': '',
//     'List price': '$70.00',
//   },
//   {
//     'Date sold': '2020-10-28',
//     Item: 'Dolce lace heart shirt',
//     'Featured?': '',
//     'List price': '$50.00',
//   },
//   {
//     'Date sold': '2020-10-30',
//     Item: 'Mcqueen victorian sample blouse',
//     'Featured?': '',
//     'List price': '$136.00',
//   },
//   {
//     'Date sold': '2020-11-03',
//     Item: 'Nina Ricci butterfly cardigan',
//     'Featured?': '',
//     'List price': '$50.00',
//   },
//   {
//     'Date sold': '2020-11-03',
//     Item: 'Prada lavender wedge sandals',
//     'Featured?': '',
//     'List price': '$208.00',
//   },
//   {
//     'Date sold': '2020-11-04',
//     Item: 'Lithium dress',
//     'Featured?': '',
//     'List price': '$56.00',
//   },
//   {
//     'Date sold': '2020-11-04',
//     Item: 'Plein sud green dress',
//     'Featured?': '',
//     'List price': '$130.00',
//   },
// ]

// // const data = raw.map((item) => ({
// //   timestamp: item['Date sold'],
// //   price: parseFloat(item['List price']),
// // }))

// // function formatDate(date) {
// //   var d = new Date(date),
// //     month = '' + (d.getMonth() + 1),
// //     day = '' + d.getDate(),
// //     year = d.getFullYear()

// //   if (month.length < 2) month = '0' + month
// //   if (day.length < 2) day = '0' + day

// //   return [year, month, day].join('-')
// // }
// // function ComputeSMA(data, window_size) {
// //   let r_avgs = [],
// //     avg_prev = 0
// //   for (let i = 0; i <= data.length - window_size; i++) {
// //     let curr_avg = 0.0,
// //       t = i + window_size
// //     for (let k = i; k < t && k <= data.length; k++) {
// //       curr_avg += data[k].price / window_size
// //     }
// //     r_avgs.push({set: data.slice(i, i + window_size), avg: curr_avg})
// //     avg_prev = curr_avg
// //   }
// //   return r_avgs
// // }

// // smaVec = ComputeSMA(data, 5)

// // let timestamps = data.map(function (val) {
// //   return val.timestamp
// // })
// // let sma = smaVec.map(function (val) {
// //   return val.avg
// // })
// // let prices = data.map(function (val) {
// //   return val.price
// // })
// // let epoch_loss = []

// // let inputs = smaVec.map(function (inp_f) {
// //   return inp_f.set.map(function (val) {
// //     return val.price
// //   })
// // })
// // let outputs = smaVec.map(function (outp_f) {
// //   return outp_f.avg
// // })

// // trainingsize = 80
// // let n_epochs = 25
// // let learningrate = 0.01
// // let n_hiddenlayers = 4

// // inputs = inputs.slice(0, Math.floor((trainingsize / 100) * inputs.length))
// // outputs = outputs.slice(0, Math.floor((trainingsize / 100) * outputs.length))

// // async function trainModel(
// //   X,
// //   Y,
// //   window_size,
// //   n_epochs,
// //   learning_rate,
// //   n_layers,
// //   callback
// // ) {
// //   const input_layer_shape = window_size
// //   const input_layer_neurons = 100

// //   const rnn_input_layer_features = 10
// //   const rnn_input_layer_timesteps =
// //     input_layer_neurons / rnn_input_layer_features

// //   const rnn_input_shape = [rnn_input_layer_features, rnn_input_layer_timesteps]
// //   const rnn_output_neurons = 20

// //   const rnn_batch_size = window_size

// //   const output_layer_shape = rnn_output_neurons
// //   const output_layer_neurons = 1

// //   const model = tf.sequential()

// //   const xs = tf.tensor2d(X, [X.length, X[0].length]).div(tf.scalar(10))
// //   const ys = tf
// //     .tensor2d(Y, [Y.length, 1])
// //     .reshape([Y.length, 1])
// //     .div(tf.scalar(10))

// //   model.add(
// //     tf.layers.dense({
// //       units: input_layer_neurons,
// //       inputShape: [input_layer_shape],
// //     })
// //   )
// //   model.add(tf.layers.reshape({targetShape: rnn_input_shape}))

// //   let lstm_cells = []
// //   for (let index = 0; index < n_layers; index++) {
// //     lstm_cells.push(tf.layers.lstmCell({units: rnn_output_neurons}))
// //   }

// //   model.add(
// //     tf.layers.rnn({
// //       cell: lstm_cells,
// //       inputShape: rnn_input_shape,
// //       returnSequences: false,
// //     })
// //   )

// //   model.add(
// //     tf.layers.dense({
// //       units: output_layer_neurons,
// //       inputShape: [output_layer_shape],
// //     })
// //   )

// //   model.compile({
// //     optimizer: tf.train.adam(learning_rate),
// //     loss: 'meanSquaredError',
// //   })

// //   const hist = await model.fit(xs, ys, {
// //     batchSize: rnn_batch_size,
// //     epochs: n_epochs,
// //     callbacks: {
// //       onEpochEnd: async (epoch, log) => {
// //         await callback(epoch, log)
// //       },
// //     },
// //   })

// //   return {model: model, stats: hist}
// // }
// // let callback = function (epoch, log) {
// //   epoch_loss.push(log.loss)
// // }
// // let pred_X = [inputs[inputs.length - 1]]
// // pred_X = pred_X.slice(
// //   Math.floor((trainingsize / 100) * pred_X.length),
// //   pred_X.length
// // )

// // inputs = smaVec.map(function (inp_f) {
// //   return inp_f.set.map(function (val) {
// //     return val.price
// //   })
// // })

// // function makePredictions(X, model) {
// //   const predictedResults = model
// //     .predict(tf.tensor2d(X, [X.length, X[0].length]).div(tf.scalar(10)))
// //     .mul(10)
// //   return Array.from(predictedResults.dataSync())
// // }

// // function predictions() {
// //   return trainModel(
// //     inputs,
// //     outputs,
// //     5,
// //     n_epochs,
// //     learningrate,
// //     n_hiddenlayers,
// //     callback
// //   ).then((result) => makePredictions(pred_X, result.model))
// // }

// // predictions()

// // // let timestamps_d = data_raw
// // //   .map(function (val) {
// // //     return val.timestamp
// // //   })
// // //   .splice(data_raw.length - window_size, data_raw.length)

// // // // date
// // // let last_date = new Date(timestamps_d[timestamps_d.length - 1])
// // // let add_days = 1
// // // if (data_temporal_resolutions == 'Weekly') {
// // //   add_days = 7
// // // }
// // // last_date.setDate(last_date.getDate() + add_days)
// // // let next_date = formatDate(last_date.toString())
// // // let timestamps_e = [next_date]

// // // console.log(pred_X)

// const brain = require('brain.js')
// let data = []

// function transform() {
//   for (let i = 0; i < raw.length; i++) {
//     data.push({input: raw[i]['Date sold'], output: raw[i]['List price']})
//   }
// }
// transform()
// console.log(data)

// const net = new brain.recurrent.LSTMTimeStep()

// net.train(data)

// const output = net.run('2020-11-05')

// console.log(output)
