import React, { useState, useEffect } from 'react';
import { getRandomJoke } from '../../services/axiosService';
import Joke from '../joke';
import { ChuckJoke } from '../../models/chuckJoke.class';
import { Container, Paper, Button, ButtonGroup } from '@mui/material';

const Jokes = () => {
  const [joke, setJoke] = useState();
  const [votesJokes, setVotesJokes] = useState({
    positive: [],
    negative: []
  });

  useEffect(() => {
    getJoke()
  }, []);

  const getJoke = async () => {
    try {
      const jokeData = await getRandomJoke()
      if (jokeData.status !== 200 || !jokeData.data) {
        throw Error(jokeData?.data?.error)
      }
      const { id, icon_url, value, url } = jokeData.data
      const joke = new ChuckJoke(id, value, icon_url, url)

      if (isRepeated(joke)) {
        getJoke()
      } else {
        setJoke(joke)
      }
    } catch (error) {
      alert(`Something went wrong: ${error}`);
    }
  }

  const isRepeated = (joke) => {
    const isinPositive = votesJokes.positive.some(j => j.id === joke.id)
    const isinNegative = votesJokes.negative.some(j => j.id === joke.id)

    return isinPositive || isinNegative
  }

  const positiveVote = () => {
    const positiveVotes = [...votesJokes.positive]
    positiveVotes.push(joke)
    setVotesJokes({
      ...votesJokes,
      positive: positiveVotes
    })
    getJoke()
  }

  const negativeVote = () => {
    const negativeVotes = [...votesJokes.negative]
    negativeVotes.push(joke)
    setVotesJokes({
      ...votesJokes,
      negative: negativeVotes
    })
    getJoke()
  }

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '30px', margin: '30px' }}>
        <Button variant="contained" onClick={getJoke} style={{ marginBottom: '20px' }}>Random Joke</Button>
        {joke && joke.id ?
          (<Joke joke={joke} />)
          : <p>Get new Joke!</p>
        }
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button onClick={positiveVote}>Positive vote</Button>
          <Button color="secondary" onClick={negativeVote}>Negative vote</Button>
        </ButtonGroup>
        <div style={{ marginTop: '30px' }}>
          <h3>Total positive votes: {votesJokes.positive.length}</h3>
          {
            votesJokes.positive.length > 0 && (
              votesJokes.positive.map(joke => <Joke key={joke.id} joke={joke} img={false} />)
            )
          }
          <h3>Total negative votes: {votesJokes.negative.length}</h3>
          {
            votesJokes.negative.length > 0 && (
              votesJokes.negative.map(joke => <Joke key={joke.id} joke={joke} img={false} />)
            )
          }
        </div>
      </Paper>
    </Container>
  );
}

export default Jokes;
