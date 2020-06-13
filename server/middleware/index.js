const jwt = require('jsonwebtoken');
require('dotenv').config();
const accessTokenSecret = process.env.JWT_SECRET;

const logger = (req, res, next) => {
  console.log(`route: ${req.url} - ${new Date().toISOString()}`);
  next();
}

const authenticateJWT = (req, res, next) => {
  let authHeader = req.headers.authorization;
  if (!authHeader) return res.status(400).send('Invalid credentials. Please login')
  let token = authHeader.split(' ')[1];
  
  jwt.verify(token, accessTokenSecret, (error, decoded) => {
    if(decoded){
      req.user = decoded;
      next();
    } 
    else if (token === 'guest'){
      req.user = decoded;
      next();
    } 
    else if(error.message === 'jwt expired'){
      window.alert('Your session has expired. Please login to continue D:');
    } 
    else {
      console.log('error', error)
      res.sendStatus(400)
    }
  });
};

module.exports = {
  logger,
  authenticateJWT
};
