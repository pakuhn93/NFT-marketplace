const router = require('express').Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  res.render('home')
});

// get users to use with handlebars?
// router.get('/login', async (req, res) => {
//   try {
//     const userData = await User.findAll();
//     const users = userData.map((user) => user.get({ plain: true }));
//     res.render('auth', { users });

//   } catch (err){
//     res.status(500).json(err);
//   }
// });

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
