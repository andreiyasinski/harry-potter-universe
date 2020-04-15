import { Button, makeStyles, Typography, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getFaculty } from '../redux/actions';
import Head from 'next/head';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: "#fff",
    fontFamily: 'Eagle Lake, cursive'
  },
  imageWrapper: {
    maxWidth: 500,
  },
  image: {
    maxWidth: '100%',
    marginBottom: 20
  },
  batton: {
    marginBottom: 20
  },
  typography: {
    fontFamily: 'inherit',
    lineHeight: 'inherit'
  }
}));

const Home = () => {
  const classes = useStyles();
  const { name, isFetching, error } = useSelector(state => state.faculty)
  
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getFaculty())
  }

  return (
    <div className={classes.root}>
      <Head>
        <title>Sorting Hat</title>
      </Head>
      <div className={classes.imageWrapper}>
        <img className={classes.image} src="/static/images/sortinghat.png" alt="sorting hat" />
      </div>
      <Button className={classes.batton} onClick={handleClick} variant="contained" color="secondary">
        Find out faculty
      </Button>
      {
        isFetching && <CircularProgress />
      }
      {
        error && !isFetching &&
        <Typography variant="h4" noWrap className={classes.typography}>
          Something went wrong. Please, try again.
        </Typography>
      }
      {
        !!name && !isFetching && !error &&
        <Typography variant="h4" noWrap className={classes.typography}>
          {`Congratulations! Your faculty is ${name}!`}
        </Typography>
      }
          
    </div>
  )
}

export default Home
