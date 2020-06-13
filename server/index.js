const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//import local files
const quizRouter = require('./routers/quiz');
const authRouter = require('./routers/authentication');
const {logger} = require('./middleware');

const app = express();
const port = process.env.PORT || 3333;

//tools
app.use(bodyParser.json());
app.use(logger);

//Routes
app.use('/quiz', quizRouter);
app.use('/auth', authRouter)

//connect server to front end
app.use(express.static(path.join(__dirname, "../build")));

app.get("*", function(req, res) {
  console.log("you got it bro XD");
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(port, () => {
  console.log(`live on port ${port}`)
});
