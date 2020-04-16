import CharacterItem from "./characterItem/characterItem";
import { CircularProgress, makeStyles, fade, Typography } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import styles from './charactersList.module.css';
import { useState } from "react";
import { useEffect } from "react";
// import { increaseCardAmount } from "../../redux/actions";

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.85),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.95),
    },
    marginLeft: 0,
    width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing(1),
    //   width: 'auto',
    // },
    marginBottom: 30
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   width: '12ch',
    //   '&:focus': {
    //     width: '20ch',
    //   },
    // },
  },
  typography: {
    textAlign: 'center',
    color: '#fff',
    whiteSpace: 'normal',
  }
}));

const CharactrersList = ({characters, err}) => {
  const [searchInput, setSearchInput] = useState('');
  const [amount, setAmount] = useState(28);
  const handleInput = (e) => {
    setSearchInput(e.target.value)
  }

  const items = characters.filter(item => 
    item.name.toLowerCase().includes(searchInput.toLowerCase().trim())
  ).slice(0, amount);

  const classes = useStyles();
  
  const handleCardAmount = () => {
    if (document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight) {        
      setAmount(prev => prev + 12)
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleCardAmount)
    return () => window.removeEventListener('scroll', handleCardAmount)
  }, [])

  if (err) {
    return (
      <Typography variant="h4" noWrap className={classes.typography}>
        Something went wrong. Please reload the page.
      </Typography>
    )
    
  }

  return (
    <div id="test">
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          value={searchInput}
          onChange={handleInput}
        />
      </div>
      {/* {
        isFetching && <CircularProgress color="secondary" className={styles.loader} />
      }
      {
        error && !isFetching &&
        <Typography variant="h4" noWrap className={classes.typography}>
          Something went wrong. Please reload the page.
        </Typography>
      }
      {
        !isFetching && !error &&
        <ul className={styles.list}>
          {
            items.map(item => (
              <CharacterItem item={item} key={item._id} />
            ))
          }
        </ul>
      } */}
      <ul className={styles.list}>
        {
          items.map(item => (
            <CharacterItem item={item} key={item._id} />
          ))
        }
      </ul>
      {
        characters.length > amount && !searchInput &&
        <div className={styles.loaderWrapper}>
          <CircularProgress color="secondary" />
        </div>
      }
    </div>
  );
};

export default CharactrersList;