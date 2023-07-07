const router = require('express').Router();
const { Item } = require('../../models');

// Endpoint: /api/items

router.get('/', async (req, res) => {
    try {
        const items = await Item.findAll() 
        res.status(200).json(items);
    } catch (err){
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        await Item.create(req.body);
        res.status(200).json(`'${req.body.item_name}' item has been created.`);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;