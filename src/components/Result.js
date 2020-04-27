import React from 'react';
import PropTypes from 'prop-types';

export default function Result(props) {
  return (
  <div>
    Your inner Beatle: <h1>{props.result}</h1>
  </div>
)}

Result.propTypes = {
  result: PropTypes.string.isRequired
}
