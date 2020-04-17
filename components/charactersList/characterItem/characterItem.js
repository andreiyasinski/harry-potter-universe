import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '25%',
    padding: "0 15px",
    marginBottom: 30,
    [theme.breakpoints.down('md')]: {
      width: '33.3333%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '50%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
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
    height: '100%'
  },
  media: {
    height: 140,
    position: 'relative'
  },
  symbol: {
    position: 'absolute',
    top: 0,
    height: 140
  },
  desc: {
    color: '#000'
  },
  name: {
    [theme.breakpoints.down('md')]: {
      fontSize: 18
    },
  }
}));

const CharacterItem = ({item, searchInput}) => {
  const { name, house, school, role, species, bloodStatus, alias, wand } = item;

  const classes = useStyles();

  const createMarkup = () => {
    if(searchInput.trim()) {
      var re = new RegExp(`${searchInput.trim()}`, 'gi')
      return {__html: name.replace(re, '<span style="background: #ffe633">'+ "$&" +'</span>')};
    }
    return {__html: name};
  }

  return (
    <li className={classes.root}>
      <Card className={classes.card}>
        {/* <CardActionArea className={classes.cardActionArea}> */}
          {
            house ?
            <>
              <CardMedia
                className={classes.media}
                image={`/static/images/${house}_hi-res.png`}
                title={name}
              >
                <img className={classes.symbol} src={`/static/images/${house}_House_Symbol.svg`} alt="Symbol" />
              </CardMedia>
            </> :
            <CardMedia
              className={classes.media}
              image={`/static/images/Hogwarts.jpg`}
              title={name}
            />
          }
          <CardContent className={classes.cardContent}>
            <Typography className={classes.name} gutterBottom variant="h5" component="h2" dangerouslySetInnerHTML={createMarkup()} />
            {
              !!alias && 
              <Typography variant="body2" color="textSecondary" component="p">
                <span className={classes.desc}>Alias:</span> {alias}
              </Typography>
            }
            {
              !!role && 
              <Typography variant="body2" color="textSecondary" component="p">
                <span className={classes.desc}>Role:</span> {role}
              </Typography>
            }
            {
              !!house && 
              <Typography variant="body2" color="textSecondary" component="p">
                <span className={classes.desc}>House:</span> {house}
              </Typography>
            }
            {
              !!school && 
              <Typography variant="body2" color="textSecondary" component="p">
                <span className={classes.desc}>School:</span> {school}
              </Typography>
            }
            {
              !!wand && 
              <Typography variant="body2" color="textSecondary" component="p">
                <span className={classes.desc}>Wand:</span> {wand}
              </Typography>
            }
            {
              !!species && 
              <Typography variant="body2" color="textSecondary" component="p">
                <span className={classes.desc}>Species:</span> {species}
              </Typography>
            }
            {
              !!bloodStatus && 
              <Typography variant="body2" color="textSecondary" component="p">
                <span className={classes.desc}>Blood status:</span> {bloodStatus}
              </Typography>
            }
          </CardContent>
        {/* </CardActionArea> */}
      </Card>
    </li>
  );
};

export default CharacterItem;