import React from 'react';
import PropTypes from 'prop-types';

export default function Results(props) {
  return (
  <div>
    Your inner Beatle: <h1>{props.results}</h1>
  </div>
)}

Results.propTypes = {
  results: PropTypes.string.isRequired
}
