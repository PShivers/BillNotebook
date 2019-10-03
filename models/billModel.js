const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const Bill = new Schema({
  name: String,
  dueDate: String,
  month: Number,
  day: Number,
  year: Number,
  amount: Number,
  copayers: [],
  hasNotPaid: Array,
  hasPaid: Array,
  amountPerPerson: Number,
  isPaid: Boolean,
  isWithdrawn: Boolean,
  isArchived: Boolean
});

module.exports = mongoose.model('Bill', Bill);
