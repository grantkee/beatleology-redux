const handleSQLError = (res, err) => {
  console.log('Error: ', err);
  return res.status(500).send('Error has occurred');
};

module.exports = {
  handleSQLError
};