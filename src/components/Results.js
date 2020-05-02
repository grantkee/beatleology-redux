import React from 'react';
import PropTypes from 'prop-types';

export default function Results(props) {
  console.log('results rendering....')
  return (
  <div>
    Your inner Beatle: <h1>results go here</h1>
  </div>
)}

Results.propTypes = {
  results: PropTypes.array.isRequired
}
