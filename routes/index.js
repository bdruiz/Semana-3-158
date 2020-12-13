const router = require('express').Router();
const apiRouterUser = require('./api/users.js');
const apiRouterAuth = require('./api/auth.js');


router.use('/users', apiRouterUser);
router.use('/auth', apiRouterAuth);


module.exports = router;