import { useSelector, useDispatch } from "react-redux";
import CharacterItem from "./characterItem/characterItem";
import { CircularProgress, makeStyles, fade, Typography } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import styles from './charactersList.module.css';
import { useState } from "react";
import { useEffect } from "react";
import { increaseCardAmount } from "../../redux/actions";

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
    color: '#fff'
  }
}));

const CharactrersList = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleInput = (e) => {
    setSearchInput(e.target.value)
  }
  
  const amount = useSelector(state => state.cardAmount.amount)
  const { isFetching, error } = useSelector(state => state.characters);
  const items = useSelector(state => (
    state.characters.items.filter(item => 
      item.name.toLowerCase().includes(searchInput.toLowerCase().trim())
      ).slice(0, amount)
  ));

  const classes = useStyles();
  const dispatch = useDispatch()
  
  useEffect(() => (
    window.addEventListener('scroll', function() {
      if (document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight) {        
        dispatch(increaseCardAmount(12))
      }
    })
  ),[])
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
      {
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
      }
    </div>
  );
};

export default CharactrersList;