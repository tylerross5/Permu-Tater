const router = require('express').Router();

const userRoutes = require('./userRoutes');
const homepageRoutes = require('./homepageRoutes');

router.use('/', homepageRoutes);
router.use('/', userRoutes);

module.exports = router;