const router = require('express').Router();
const User = require('../models/User');

// the home endpoint
router.get('/', async (req, res) => {
  res.render('home')
});

// sets the url endpoint to /marketplace
router.get('/marketplace', async (req, res) => {
  try {
      const itemData = await Item.findAll();
      const items = itemData.map((item) => item.get({ plain: true }));
      res.render('marketplace', { items });

  } catch (err){
      res.status(500).json(err);
  }
});

module.exports = router;