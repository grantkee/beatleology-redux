const express = require('express');
const quizController = require('../controllers/quiz');
const router = express.Router();

//get all questions
router.get('/', quizController.getQuestions);

//get answer options by question id
router.get('/:id', quizController.getAnswers);

module.exports = router;