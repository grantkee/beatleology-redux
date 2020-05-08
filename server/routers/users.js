const express = require('express');
const usersController = require('../controllers/users');
const router = express.Router();
const {authenticate} = require('../middleware');

//create user
router.post('/', authenticate, usersController.createUser);

//update user by id
router.put('/:id', authenticate, usersController.updateUserById)

module.export = router;
