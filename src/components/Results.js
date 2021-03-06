import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function Results(props) {
  const {results, user} = props;
  let keys = Object.keys(results);

  return (
    <>
      <Typography align='center' variant='h3' paragraph>
        Congrats, {user ? user : 'Guest'}!
      </Typography>
      <Typography align='center' variant='h5'>
        Your spirit Beatle breakdown:
      </Typography>
      {keys.map(x => 
        <Typography key={x} align='center' variant='h6'>{x + ': ' + results[x]}</Typography>
      )}
      <br />
      <Typography align='center' variant='caption' paragraph><Link to='/'><i>Go Home</i></Link></Typography>
    </>
)}

Results.propTypes = {
  results: PropTypes.object.isRequired,
  user: PropTypes.string.isRequired
};
