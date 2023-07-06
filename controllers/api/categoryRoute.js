const router = require('express').Router();
const { Category, Item } = require('../../models');

// Endpoint: /api/categories

router.get('/', async (req, res) => {
    try {
        const categories = Category.findAll({
            include: [Item]
        });

        res.status(200).json(categories);
    } catch (err){
        res.status(500).json(err);
    }
});