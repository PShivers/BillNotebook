const Copayers = require('../models/copayerModel.js');

const CopayersController = {
  index: async (req, res) => {
    try {
      const copayers = await Copayers.find({});
      res.json(copayers);
    } catch (err) {
      console.log(err);
    }
  },

  show: async (req, res) => {
    try {
      const copayerId = req.params.id;
      const copayers = await Copayers.findById(copayerId);
      res.json(copayers);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },

  copayersByMonthAndYear: async (req, res) => {
    try {
      // const year = req.query.year;
      // const month = req.query.month;
      const copayers = await Copayers.find({ month: req.params.month, year: req.params.year });
      res.json(copayers);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },

  create: async (req, res) => {
    try {
      const newCopayer = req.body;

      const savedCopayer = await Copayers.create(newCopayer);

      res.json(savedCopayer);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  update: async (req, res) => {
    try {
      console.log('update got to controller' + req.params.id)
      const copayerId = req.params.id;
      const updatedCopayer = req.body;
      const savedCopayer = await Copayers.findByIdAndUpdate(copayerId, updatedCopayer, {
        new: true
      });
      res.json(savedCopayer);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  delete: async (req, res) => {
    try {
      const copayerId = req.params.id;
      await Copayers.findByIdAndRemove(copayerId);
      res.json({
        msg: 'Successfully Deleted'
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};

module.exports = CopayersController;
