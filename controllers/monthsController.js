const Months = require('../models/monthModel.js');

const MonthsController = {
  index: async (req, res) => {
    try {
      const months = await Months.find({});
      res.json(months);
    } catch (err) {
      console.log(err);
    }
  },

  show: async (req, res) => {
    try {
      const monthId = req.params.id;
      const month = await Months.findById(monthId);
      res.json(month);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },

  create: async (req, res) => {
    try {
      const newMonth = req.body;

      const savedMonth = await Months.create(newMonth);

      res.json(savedMonth);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  update: async (req, res) => {
    try {
      const monthId = req.params.id;
      const updatedMonth = req.body;
      const savedMonth = await Months.findByIdAndUpdate(monthId, updatedMonth, {
        new: true
      });
      res.json(savedMonth);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  delete: async (req, res) => {
    try {
      const monthId = req.params.id;
      await Months.findByIdAndRemove(monthId);
      res.json({
        msg: 'Successfully Deleted'
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};

module.exports = MonthsController;
