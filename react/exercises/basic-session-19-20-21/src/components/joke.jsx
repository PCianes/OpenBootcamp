import React from 'react';
import PropTypes from 'prop-types';
import { ChuckJoke } from '../models/chuckJoke.class';

const Joke = ({ joke, img = true }) => {
  return (
    <div>
      {img && <img alt='avatar' src={joke.img} />}
      <p>{joke.text}</p>
    </div>
  );
}

Joke.propTypes = {
  joke: PropTypes.instanceOf(ChuckJoke).isRequired,
  img: PropTypes.bool
}

export default Joke;
