const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const Month = new Schema({
  name: String,
  year: Number,
  monthNum: Number,
  isCurrentMonth: Boolean,
  bills: []
});

module.exports = mongoose.model('Month', Month);
