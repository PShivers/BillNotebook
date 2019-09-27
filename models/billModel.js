const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const Bill = new Schema({
  name: String,
  dueDate: String,
  month: Number,
  year: Number,
  amount: Number,
  hasNotPaid: Array,
  hasPaid: Array,
  amountPerPerson: Number,
  isPaid: Boolean,
  isWithdrawn: Boolean
});

module.exports = mongoose.model('Bill', Bill);
