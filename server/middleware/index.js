const jwt = require('jsonwebtoken');
require('dotenv').config();
const accessTokenSecret = process.env.JWT_SECRET;

const logger = (req, res, next) => {
  console.log(`route: ${req.url} - ${new Date().toISOString()}`);
  next();
}

const authenticateJWT = (req, res, next) => {
  let authHeader = req.headers.authorization;
  console.log('authHeader ', authHeader);
  if (!authHeader) return res.status(400).send('Invalid credentials. Please login')
  console.log('authHeader again', authHeader);
  let token = authHeader.split(' ')[1];
  
  console.log('auth happening with token:', token);
  
  jwt.verify(token, accessTokenSecret, (error, decoded) => {
    console.log('decoded', decoded)
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
