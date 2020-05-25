const express = require('express');
const quizController = require('../controllers/quiz');
const {authenticateJWT} = require('../middleware');
const router = express.Router();

//get all questions
router.get('/', authenticateJWT, quizController.getQuestions);

//get answer options by question id
router.get('/:id', authenticateJWT, quizController.getAnswers);

module.exports = router;
