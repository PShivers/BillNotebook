const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const Copayer = new Schema({
  name: String,
  email: String,
  bills: []
});

module.exports = mongoose.model('Copayer', Copayer);
