const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const Bill = new Schema({
  name: String,
  dueDate: String,
  amount: Number,
  isPaid: Boolean
});

module.exports = mongoose.model('Bill', Bill);
