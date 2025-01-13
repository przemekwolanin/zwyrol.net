const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// model
const jokeSchema = new Schema({
    id: {
      type: Number
    },
    date: {
      type: String
    },
    joke: {
      type: String
    },
    tags: {
      type: String
    }
  },{collection: 'zwyrol-jokes'});
  
  const Joke = mongoose.model('Joke', jokeSchema);

  module.exports = Joke;