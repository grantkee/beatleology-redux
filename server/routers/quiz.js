const express = require('express');
const quizController = require('../controllers/quiz');
const router = express.Router();

//get question
router.get('/:id', quizController.getQuestion);

module.exports = router;