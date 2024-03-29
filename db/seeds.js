const Bills = require('../models/billModel.js');
const Months = require('../models/monthModel.js');
const Copayers = require('../models/copayerModel.js');

//bills
Bills.deleteMany()
  .then(() => {
    const Bill1 = new Bills({
      name: 'Rent',
      dueDate: '09/01',
      hasPaid: ['Rush', 'Owen'],
      hasNotPaid: [],
      month: 8,
      year: 2019,
      amount: 265,
      isPaid: true,
      isWithdrawn: true
    });
    return Bill1.save();
  })
  .then(() => {
    const Bill2 = new Bills({
      name: 'Phone',
      dueDate: '09/19',
      hasPaid: [],
      hasNotPaid: [],
      month: 8,
      year: 2019,
      amount: 69,
      isPaid: false,
      isWithdrawn: false
    });
    return Bill2.save();
  })
  .then(() => {
    const Bill3 = new Bills({
      name: 'Car payment',
      dueDate: '10/01',
      hasPaid: [],
      hasNotPaid: ['Rush', 'Owen'],
      month: 9,
      year: 2019,
      amount: 213.56,
      isPaid: false,
      isWithdrawn: false
    });
    return Bill3.save();
  })
  .then(() => {
    const Bill4 = new Bills({
      name: 'Car payment',
      dueDate: '09/01',
      hasPaid: [],
      hasNotPaid: [],
      month: 8,
      year: 2019,
      amount: 213.56,
      isPaid: false,
      isWithdrawn: true
    });
    return Bill4.save();
  });

//bills
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

//copayers
Copayers.deleteMany()
  .then(() => {
    const Copayer1 = new Copayers({
      name: 'Rush',
      email: 'paulsshivers@gmail.com'
    });
    return Copayer1.save();
  })
  .then(() => {
    const Copayer2 = new Copayers({
      name: 'Paul',
      email: 'pengun86@gmail.com'
    });
    return Copayer2.save();
  })
  .then(() => {
    const Copayer3 = new Copayers({
      name: 'Owen',
      email: 'pengun86@hotmail.com'
    });
    return Copayer3.save();
  })
  .then(() => {
    const Copayer4 = new Copayers({
      name: 'Chris',
      email: 'paulsshivers@gmail.com'
    });
    return Copayer4.save();
  });
