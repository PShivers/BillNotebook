const Monthss = require('../models/monthModel.js');

const MonthssController = {
  index: async (req, res) => {
    try {
      const months = await Monthss.find({});
      res.json(months);
    } catch (err) {
      console.log(err);
    }
  },

  show: async (req, res) => {
    try {
      const monthId = req.params.id;
      const months = await Monthss.findById(monthId);
      res.json(months);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },

  create: async (req, res) => {
    try {
      const newMonths = req.body;

      const savedMonths = await Monthss.create(newMonths);

      res.json(savedMonths);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  update: async (req, res) => {
    try {
      const monthId = req.params.id;
      const updatedMonths = req.body;
      const savedMonths = await Monthss.findByIdAndUpdate(monthId, updatedMonths, {
        new: true
      });
      res.json(savedMonths);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  delete: async (req, res) => {
    try {
      const monthId = req.params.id;
      await Monthss.findByIdAndRemove(monthId);
      res.json({
        msg: 'Successfully Deleted'
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};

module.exports = MonthssController;
