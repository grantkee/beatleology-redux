import React from 'react';
import PropTypes from 'prop-types';

export default function Results(props) {
  const {results, quizLength} = props;
  let percentages = results;
  for (let i in percentages){
    if(typeof percentages[i] === 'number'){
      percentages[i] = (percentages[i] / quizLength * 100).toFixed(2) + '%';
    }
  }
  let keys = Object.keys(percentages);
  let obj = keys.map(key => percentages[key])
  console.log('percentages', percentages)
  console.log('keys',keys)
  console.log('obj', obj)
  // let max = Math.max.apply(null, obj);
  // console.log('max', max);
  let values = keys.filter(key => percentages[key] === 'Paul');
  // console.log('values', values);
  debugger;
  return (
  <div>
    Your inner Beatle: {keys.map(x => <h1 key={x}>{x + ': ' + percentages[x]}</h1> )}
  </div>
)}

Results.propTypes = {
  results: PropTypes.object.isRequired,
  quizLength: PropTypes.number.isRequired
}
