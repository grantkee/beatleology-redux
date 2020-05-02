import React from 'react';
import PropTypes from 'prop-types';

export default function Results(props) {
  const {results} = props;
  let keys = Object.keys(results);
  let obj = keys.map(key => results[key])
  console.log('results', results)
  console.log('keys',keys)
  console.log('obj', obj)
  let max = Math.max.apply(null, obj);
  console.log('max', max);
  let values = keys.filter(key => results[key] === max);
  console.log('values', values);
  debugger;
  return (
  <div>
    Your inner Beatle: {values.map(x => <h1>{x}</h1>)}
  </div>
)}

Results.propTypes = {
  results: PropTypes.object.isRequired
}
