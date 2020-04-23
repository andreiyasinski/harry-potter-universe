import axios from 'axios';
import { Button, makeStyles, Typography, CircularProgress } from '@material-ui/core';
import Head from 'next/head';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#fff',
    fontFamily: 'Eagle Lake, cursive',
  },
  imageWrapper: {
    maxWidth: 500,
    [theme.breakpoints.down('md')]: {
      maxWidth: 450,
    },
  },
  image: {
    maxWidth: '100%',
  },
  batton: {
    marginBottom: 20,
  },
  typography: {
    fontFamily: 'inherit',
    lineHeight: 'inherit',
    whiteSpace: 'normal',
    textAlign: 'center',
    [theme.breakpoints.down(768)]: {
      fontSize: 24,
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    setIsFetching(true);
    try {
      const res = await axios(
        'https://www.potterapi.com/v1/sortingHat?key=$2a$10$yKgF8QD9Uz5dAGtiJ46VcumjgC.X2vuQhIBuIfZRtv9z45oLH.jkS'
      );
      setName(res.data);
      setIsFetching(false);
      setError(null);
    } catch (error) {
      setError(error.message);
      setIsFetching(false);
    }
  };

  return (
    <div className={classes.root}>
      <Head>
        <title>Sorting Hat</title>
      </Head>
      <div className={classes.imageWrapper}>
        <img className={classes.image} src="/static/images/sortinghat.png" alt="sorting hat" />
      </div>
      <Button
        className={classes.batton}
        size="large"
        onClick={handleClick}
        variant="contained"
        color="secondary"
      >
        Find out faculty
      </Button>
      {isFetching && <CircularProgress />}
      {error && !isFetching && (
        <Typography variant="h4" noWrap className={classes.typography}>
          Something went wrong. Please, try again.
        </Typography>
      )}
      {!!name && !isFetching && !error && (
        <Typography variant="h4" noWrap className={classes.typography}>
          {`Congratulations! Your faculty is ${name}!`}
        </Typography>
      )}
    </div>
  );
};

export default Home;
