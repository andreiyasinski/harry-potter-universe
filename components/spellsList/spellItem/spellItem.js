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
    backgroundPosition: 'bottom',
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

const SpellItem = ({ item, searchInput }) => {
  const { spell, type, effect } = item;

  const classes = useStyles();

  const createMarkup = () => {
    if (searchInput.trim()) {
      var re = new RegExp(`${searchInput.trim()}`, 'gi');
      return {
        __html: spell.replace(
          re,
          '<span style="background: #ffe633">' + '$&' + '</span>'
        ),
      };
    }
    return { __html: spell };
  };

  return (
    <li className={classes.root}>
      <Card className={classes.card}>
        {/* <CardActionArea className={classes.cardActionArea}> */}
        {/* {house ? (
          <>
            <CardMedia
              className={classes.media}
              image={`/static/images/${house}_hi-res.png`}
              title={name}
            >
              <img
                className={classes.symbol}
                src={`/static/images/${house}_House_Symbol.svg`}
                alt="Symbol"
              />
            </CardMedia>
          </>
        ) : (
          <CardMedia
            className={classes.media}
            image={`/static/images/Hogwarts.jpg`}
            title={name}
          />
        )} */}
        <CardMedia
          className={classes.media}
          image={`/static/images/${type}.jpg`}
          title={spell}
        />
        <CardContent className={classes.cardContent}>
          <Typography
            className={classes.name}
            gutterBottom
            variant="h5"
            component="h2"
            dangerouslySetInnerHTML={createMarkup()}
          />
          <Typography variant="body2" color="textSecondary" component="p">
            <span className={classes.desc}>Type:</span> {type}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span className={classes.desc}>Effect:</span> {effect}
          </Typography>
        </CardContent>
        {/* </CardActionArea> */}
      </Card>
    </li>
  );
};

export default SpellItem;
