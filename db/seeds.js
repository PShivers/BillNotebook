const Bills = require('../models/BillModel.js');

//devs
Bills.deleteMany()
  .then(() => {
    const Bill1 = new Bills({
      name: "Rent",
      dueDate: "09012019",
      amount: 265,
      isPaid: true
    });
    return Bill1.save();
  })
  .then(() => {
    const Bill2 = new Bills({
      name: "Phone",
      dueDate: "09192019",
      amount: 69,
      isPaid: false
    });
    return Bill2.save();
  })
  .then(() => {
    const Bill3 = new Bills({
      name: "Car payment",
      dueDate: "10012019",
      amount: 213.56,
      isPaid: false
    });
    return Bill3.save();
  });
