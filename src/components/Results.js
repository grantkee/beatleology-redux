import React from 'react';
import PropTypes from 'prop-types';

export default function Results(props) {
  const {results} = props;
  let keys = Object.keys(results);

  return (
    <div>
      Your inner Beatle: {keys.map(x => <h1 key={x}>{x + ': ' + results[x]}</h1> )}
    </div>
)}

Results.propTypes = {
  results: PropTypes.object.isRequired
}
