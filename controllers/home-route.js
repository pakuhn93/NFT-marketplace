const router = require('express').Router();
const Item = require('../models/Item');

router.get('/', async (req, res) => {
    try {
        res.render('auth');
    } catch (err) {
        res.status(500).json(err);
    }
});

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