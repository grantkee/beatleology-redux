import React from 'react';
import PropTypes from 'prop-types';

export default function Results(props) {
  const {results, quizLength} = props;
  for (let i in results){
    results[i] = (results[i] / quizLength * 100).toFixed(2) + '%';
  }
  let keys = Object.keys(results);
  let obj = keys.map(key => results[key])
  console.log('results', results)
  console.log('keys',keys)
  console.log('obj', obj)
  // let max = Math.max.apply(null, obj);
  // console.log('max', max);
  let values = keys.filter(key => results[key] === 'Paul');
  // console.log('values', values);
  debugger;
  return (
  <div>
    Your inner Beatle: {keys.map(x => <h1 key={x}>{x}</h1> + ' : ' + <h2>{results}</h2>)}
  </div>
)}

Results.propTypes = {
  results: PropTypes.object.isRequired
}
