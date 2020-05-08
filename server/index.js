const express = require('express');
const bodyParser = require('body-parser');
const quizRouter = require('./routers/quiz');
const authRouter = require('./routers/authentication');
const {logger} = require('./middleware');

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json());
app.use(logger);
//Routes
app.use('/quiz', quizRouter);
app.use('/auth', authRouter)

app.get('/', (req, res) => {
  res.send('connected')
});

app.listen(port, () => {
  console.log(`live on port ${port}`)
});