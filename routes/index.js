const router = require('express').Router();
const apiRouterUser = require('./api/users.js');
const apiRouterAuth = require('./api/auth.js');


//router.use('/users', apiRouterUsers);
router.use('/auth', apiRouterAuth);


//app.post('/api/auth', controller.signin)

module.exports = router;