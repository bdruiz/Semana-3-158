const router = require('express').Router();
const db = require('../../models');
const userController = require('../../controllers/userController.js');

router.get('/', userController.list);
router.get('/:userId', userController.find);
router.post('/create', userController.create);
router.put('/update/:userId',userController.update);
router.delete('/delete/:userId',userController.delete);
router.delete('/deleteAll',userController.deleteAll);


module.exports = router;