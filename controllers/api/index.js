const router = require('express').Router();

const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoute');
const itemRoutes = require('./itemRoutes');

router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/items', itemRoutes);

module.exports = router;