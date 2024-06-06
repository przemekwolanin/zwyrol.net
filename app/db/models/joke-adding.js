const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// model
const jokeAddingSchema = new Schema({
    xywa: {
      type: String
    },
    zwyrol: {
      type: String
    }
  },{collection: 'zwyrol-sent'});
  
  const JokeAdding = mongoose.model('JokeAdding', jokeAddingSchema);

  module.exports = JokeAdding;