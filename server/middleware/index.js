const jwt = require('jsonwebtoken');

const logger = (req, res, next) => {
  console.log(`route: ${req.url} - ${new Date().toISOString()}`);
  next()
}

const authenticate = (req, res, next) => {
  let header = req.headers['auth'];
  if(!header) return res.status(400).send('Invalid credentials. Please login')
  console.log('header', header);
  let token = header.split(' ')[1];

  console.log('auth happening', token)

  jwt.verify(token, 'secret', (error, decoded) => {
    console.log('decoded', decoded)
    if(decoded){
      req.user = decoded;
      next();
    } else {
      console.log('error', error)
      res.sendStatus(400)
    }
  });
};

module.exports = {
  logger,
  authenticate
};
