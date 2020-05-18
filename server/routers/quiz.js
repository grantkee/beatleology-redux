const express = require('express');
const quizController = require('../controllers/quiz');
const authenticate = require('../middleware');
const router = express.Router();

//get all questions
router.get('/', authenticate, quizController.getQuestions);

//get answer options by question id
router.get('/:id', authenticate, quizController.getAnswers);

module.exports = router;
