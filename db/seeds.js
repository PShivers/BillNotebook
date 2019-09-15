const Bills = require('../models/BillModel.js');

//devs
Bills.deleteMany()
  .then(() => {
    const Bill1 = new Bills({
      name: String,
      dueDate: String,
      amount: Number,
      isPaid: Boolean
    });
    return Bill1.save();
  })
  .then(() => {
    const Bill2 = new Bills({
      name: String,
      dueDate: String,
      amount: Number,
      isPaid: Boolean
    });
    return Bill2.save();
  })
  .then(() => {
    const Bill3 = new Bills({
      name: String,
      dueDate: String,
      amount: Number,
      isPaid: Boolean
    });
    return Bill3.save();
  });
