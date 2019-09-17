const Bills = require('../models/billModel.js');

const BillsController = {
  index: async (req, res) => {
    try {
      const bills = await Bills.find({});
      res.json(bills);
    } catch (err) {
      console.log(err);
    }
  },

  show: async (req, res) => {
    try {
      const billId = req.params.id;
      const bills = await Bills.findById(billId);
      res.json(bills);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },

  billsByMonthAndYear: async (req, res) => {
    try {
      // const year = req.query.year;
      // const month = req.query.month;
      const bills = await Bills.find({ month: 8, year: 2019 });
      res.json(bills);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },

  create: async (req, res) => {
    try {
      const newBill = req.body;

      const savedBill = await Bills.create(newBill);

      res.json(savedBill);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  update: async (req, res) => {
    try {
      const billId = req.params.id;
      const updatedBill = req.body;
      const savedBill = await Bills.findByIdAndUpdate(billId, updatedBill, {
        new: true
      });
      res.json(savedBill);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  delete: async (req, res) => {
    try {
      const billId = req.params.id;
      await Bills.findByIdAndRemove(billId);
      res.json({
        msg: 'Successfully Deleted'
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};

module.exports = BillsController;
