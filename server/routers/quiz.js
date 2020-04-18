const express = require('express');
const quizController = require('../controllers/quiz');
const router = express.Router();

//get questions
router.get('/', quizController.getQuestions);

//get answer options
router.get('/:id', quizController.getAnswers);

module.exports = router;