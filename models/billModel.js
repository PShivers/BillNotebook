const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const Bill = new Schema({
  name: String,
  dueDate: String,
  amount: Number,
  amountPerPerson: Number,
  copayers: String,
  isPaid: Boolean
});

module.exports = mongoose.model('Bill', Bill);
