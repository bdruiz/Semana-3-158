const router = require('express').Router();
const apiRouterUser = require('./api/users.js');

router.use('/auth', apiRouterUser);

//app.post('/api/auth', controller.signin)

module.exports = router;