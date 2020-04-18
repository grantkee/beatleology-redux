const express = require('express');
const bodyParser = require('body-parser');
const quizRouter = require('./routers/quiz');

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json());

//Routes
app.use('/quiz', usersRouter);

app.get('/', (req, res) => {
  res.send('connected')
});

app.listen(port, () => {
  console.log(`live on port ${port}`)
});