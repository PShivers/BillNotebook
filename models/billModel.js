const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const Bill = new Schema({
  name: String,
  dueDate: Date,
  month: Number,
  year: Number,
  amount: Number,
  copayers: Array,
  amountPerPerson: Number,
  isPaid: Boolean,
  isWithdrawn: Boolean
});

module.exports = mongoose.model('Bill', Bill);
