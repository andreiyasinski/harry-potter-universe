import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '25%',
    padding: '0 15px',
    marginBottom: 30,
    [theme.breakpoints.down('md')]: {
      width: '33.3333%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '50%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  card: {
    height: '100%',
    background: '#f0f8ff',
  },
  cardContent: {
    // height: '100%'
  },
  cardActionArea: {
    height: '100%',
  },
  media: {
    height: 140,
    position: 'relative',
  },
  symbol: {
    position: 'absolute',
    top: 0,
    height: 140,
  },
  desc: {
    color: '#000',
  },
  name: {
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
    },
  },
}));

const HouseItem = ({ item }) => {
  const { name, mascot, headOfHouse, houseGhost, founder } = item;

  const classes = useStyles();

  return (
    <li className={classes.root}>
      <Card className={classes.card}>
        {/* <CardActionArea className={classes.cardActionArea}> */}
        <>
          <CardMedia
            className={classes.media}
            image={`/static/images/${name}_hi-res.png`}
            title={name}
          >
            <img
              className={classes.symbol}
              src={`/static/images/${name}_House_Symbol.svg`}
              alt="Symbol"
            />
          </CardMedia>
        </>
        <CardContent className={classes.cardContent}>
          <Typography
            className={classes.name}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span className={classes.desc}>Founder:</span> {founder}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span className={classes.desc}>Head of house:</span> {headOfHouse}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span className={classes.desc}>House ghost:</span> {houseGhost}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span className={classes.desc}>Mascot:</span> {mascot}
          </Typography>
        </CardContent>
        {/* </CardActionArea> */}
      </Card>
    </li>
  );
};

export default HouseItem;
