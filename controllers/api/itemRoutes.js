const router = require('express').Router();
const { Item } = require('../../models');

// Endpoint: /api/items

// get all items
router.get('/', async (req, res) => {
    try {
        const items = await Item.findAll();
        res.status(200).json(items);
    } catch (err){
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const item = await Item.findByPk(req.params.id);
        res.status(200).json(item);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create item
router.post('/', async (req, res) => {
    try {
        await Item.create(req.body);
        res.status(200).json(`'${req.body.item_name}' item has been created.`);
    } catch (err) {
        res.status(500).json(err);
    }
});

// update item
router.put('/:id', async (req, res) => {
    try {
        const itemData = await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        // check if id exists
        if(!userData[0]){
            res.status(404).json({ message: 'No item with this id!' });
            return;
        }

        res.status(200).json(itemData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;