import React from 'react';
import PropTypes from 'prop-types';

export default function Results(props) {
  const {results, user} = props;
  let keys = Object.keys(results);

  return (
    <div>
      Congrats, {user}! Your spirit Beatle breakdown: {keys.map(x => <h1 key={x}>{x + ': ' + results[x]}</h1> )}
    </div>
)}

Results.propTypes = {
  results: PropTypes.object.isRequired,
  user: PropTypes.string.isRequired
}
