const mongoose = require('mongoose');
require('dotenv').config();

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect('mongodb://localhost/spotholes');
}

mongoose.connection.on('error', error => {
  console.error(`MongoDB connection error!!! ${error}`);
  process.exit(-1);
});

mongoose.connection.once('open', () => {
  console.log(`Mongoose has connected to MongoDB`);
});

module.exports = mongoose;
