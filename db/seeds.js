const Bills = require('../models/billModel.js');
const Months = require('../models/monthModel.js');

//devs
Bills.deleteMany()
  .then(() => {
    const Bill1 = new Bills({
      name: 'Rent',
      dueDate: '09012019',
      amount: 265,
      isPaid: true
    });
    return Bill1.save();
  })
  .then(() => {
    const Bill2 = new Bills({
      name: 'Phone',
      dueDate: '09192019',
      amount: 69,
      isPaid: false
    });
    return Bill2.save();
  })
  .then(() => {
    const Bill3 = new Bills({
      name: 'Car payment',
      dueDate: '10012019',
      amount: 213.56,
      isPaid: false
    });
    return Bill3.save();
  });

//devs
Months.deleteMany()
  .then(() => {
    const January = new Months({
      name: 'January',
      year: 2019,
      isCurrentMonth: false,
      bills: []
    });
    return January.save();
  })
  .then(() => {
    const Month2 = new Months({
      name: 'February',
      year: 2019,
      isCurrentMonth: false,
      bills: []
    });
    return Month2.save();
  })
  .then(() => {
    const March = new Months({
      name: 'March',
      year: 2019,
      isCurrentMonth: false,
      bills: []
    });
    return March.save();
  })
  .then(() => {
    const April = new Months({
      name: 'April',
      year: 2019,
      isCurrentMonth: false,
      bills: []
    });
    return April.save();
  })
  .then(() => {
    const May = new Months({
      name: 'May',
      year: 2019,
      isCurrentMonth: false,
      bills: []
    });
    return May.save();
  })
  .then(() => {
    const June = new Months({
      name: 'June',
      year: 2019,
      isCurrentMonth: false,
      bills: []
    });
    return June.save();
  })
  .then(() => {
    const July = new Months({
      name: 'July',
      year: 2019,
      isCurrentMonth: false,
      bills: []
    });
    return July.save();
  })
  .then(() => {
    const August = new Months({
      name: 'August',
      year: 2019,
      isCurrentMonth: false,
      bills: []
    });
    return August.save();
  })
  .then(() => {
    const September = new Months({
      name: 'September',
      year: 2019,
      isCurrentMonth: true,
      bills: []
    });
    return September.save();
  })
  .then(() => {
    const October = new Months({
      name: 'October',
      year: 2019,
      isCurrentMonth: false,
      bills: []
    });
    return October.save();
  })
  .then(() => {
    const November = new Months({
      name: 'November',
      year: 2019,
      isCurrentMonth: false,
      bills: []
    });
    return November.save();
  })
  .then(() => {
    const December = new Months({
      name: 'December',
      year: 2019,
      isCurrentMonth: false,
      bills: []
    });
    return December.save();
  });
