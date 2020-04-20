import HouseItem from './houseItem/houseItem';
import {
  CircularProgress,
  makeStyles,
  fade,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  typography: {
    fontFamily: 'Eagle Lake, cursive',
    marginBottom: 30,
    textAlign: 'center',
    color: '#fff',
    whiteSpace: 'normal',
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 -15px',
  },
  loaderWrapper: {
    display: 'flex',
    justifyContent: 'center',
    padding: '15px 0',
  },
}));

const HousesList = ({ houses, err }) => {
  const classes = useStyles();

  if (err) {
    return (
      <Typography variant="h4" noWrap className={classes.typography}>
        Something went wrong. Please reload the page.
      </Typography>
    );
  }

  return (
    <div>
      <Typography variant="h4" noWrap className={classes.typography}>
        Houses
      </Typography>
      <ul className={classes.list}>
        {houses.map((item) => (
          <HouseItem item={item} key={item._id} />
        ))}
      </ul>
    </div>
  );
};

export default HousesList;
