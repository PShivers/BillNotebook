const Bills = require('../models/billModel.js');
const Months = require('../models/monthModel.js');

//devs
Bills.deleteMany()
  .then(() => {
    const Bill1 = new Bills({
      name: 'Rent',
      dueDate: '2019,8,1',
      month: 8,
      year: 2019,
      amount: 265,
      isPaid: true
    });
    return Bill1.save();
  })
  .then(() => {
    const Bill2 = new Bills({
      name: 'Phone',
      dueDate: '2019,8,19',
      month: 8,
      year: 2019,
      amount: 69,
      isPaid: false
    });
    return Bill2.save();
  })
  .then(() => {
    const Bill3 = new Bills({
      name: 'Car payment',
      dueDate: '10012019',
      month: 8,
      year: 2019,
      amount: 213.56,
      isPaid: false
    });
    return Bill3.save();
  })
  .then(() => {
    const Bill4 = new Bills({
      name: 'Car payment',
      dueDate: '2019,10,01',
      month: 9,
      year: 2019,
      amount: 213.56,
      isPaid: false
    });
    return Bill4.save();
  });

//devs
Months.deleteMany()
  .then(() => {
    const January = new Months({
      name: 'January',
      year: 2019,
      monthNum: 0,
      isCurrentMonth: false,
      bills: []
    });
    return January.save();
  })
  .then(() => {
    const Month2 = new Months({
      name: 'February',
      year: 2019,
      monthNum: 1,
      isCurrentMonth: false,
      bills: []
    });
    return Month2.save();
  })
  .then(() => {
    const March = new Months({
      name: 'March',
      year: 2019,
      monthNum: 2,
      isCurrentMonth: false,
      bills: []
    });
    return March.save();
  })
  .then(() => {
    const April = new Months({
      name: 'April',
      year: 2019,
      monthNum: 3,
      isCurrentMonth: false,
      bills: []
    });
    return April.save();
  })
  .then(() => {
    const May = new Months({
      name: 'May',
      year: 2019,
      monthNum: 4,
      isCurrentMonth: false,
      bills: []
    });
    return May.save();
  })
  .then(() => {
    const June = new Months({
      name: 'June',
      year: 2019,
      monthNum: 5,
      isCurrentMonth: false,
      bills: []
    });
    return June.save();
  })
  .then(() => {
    const July = new Months({
      name: 'July',
      year: 2019,
      monthNum: 6,
      isCurrentMonth: false,
      bills: []
    });
    return July.save();
  })
  .then(() => {
    const August = new Months({
      name: 'August',
      year: 2019,
      monthNum: 7,
      isCurrentMonth: false,
      bills: []
    });
    return August.save();
  })
  .then(() => {
    const September = new Months({
      name: 'September',
      year: 2019,
      monthNum: 8,
      isCurrentMnth: true,
      bills: []
    });
    return September.save();
  })
  .then(() => {
    const October = new Months({
      name: 'October',
      year: 2019,
      monthNum: 9,
      isCurrentMonth: false,
      bills: []
    });
    return October.save();
  })
  .then(() => {
    const November = new Months({
      name: 'November',
      year: 2019,
      monthNum: 10,
      isCurrentMonth: false,
      bills: []
    });
    return November.save();
  })
  .then(() => {
    const December = new Months({
      name: 'December',
      year: 2019,
      monthNum: 11,
      isCurrentMonth: false,
      bills: []
    });
    return December.save();
  });
