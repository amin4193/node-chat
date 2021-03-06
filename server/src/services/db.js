const mongoose = require('mongoose')

module.exports = (config) => {
  const dbURL = `${config.db.name}://${config.db.host}:${config.db.port}/${config.db.index_name}`
  
  //Import the mongoose module
  mongoose.connect(dbURL, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true })
  mongoose.Promise = global.Promise // Get Mongoose to use the global promise library
  const db = mongoose.connection // Get the default connection

  //Bind connection to error event (to get notification of connection errors)
  db.on('error', console.error.bind(console, 'MongoDB connection error: '))
  return db
}
