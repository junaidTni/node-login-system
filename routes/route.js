const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const checkUser = require('../middlewares/checkUser');


router.get('/register', userController.registerView);

router.post('/register', userController.register);

router.get('/login', userController.loginView);

router.post('/login', userController.login);

router.get('/logout', checkUser, userController.logout);

router.get('/', checkUser, userController.homeView);



module.exports = router;
