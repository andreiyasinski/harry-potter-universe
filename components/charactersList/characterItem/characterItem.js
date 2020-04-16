import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '25%',
    padding: "0 15px",
    marginBottom: 30,
  },
  card: {
    height: '100%',
    background: '#f0f8ff',
  },
  media: {
    height: 140,
  },
  symbol: {
    position: 'absolute',
    top: 0,
    height: 140
  },
});

const CharacterItem = ({item}) => {
  const { name, house } = item;

  const classes = useStyles();

  return (
    <li className={classes.root}>
      <Card className={classes.card}>
        <CardActionArea className={classes.cardActionArea}>
          {
            house ?
            <>
              <CardMedia
                className={classes.media}
                image={`/static/images/${house}_hi-res.png`}
                title={name}
              />
              <img className={classes.symbol} src={`/static/images/${house}_House_Symbol.svg`} alt="Symbol" />
            </> :
            <CardMedia
              className={classes.media}
              image={`/static/images/Hogwarts.jpg`}
              title={name}
            />
          }
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </li>
  );
};

export default CharacterItem;