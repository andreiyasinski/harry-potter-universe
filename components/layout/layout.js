import AppBar from '@material-ui/core/AppBar';
import { fade, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import SearchIcon from '@material-ui/icons/Search';
// import InputBase from '@material-ui/core/InputBase';
import clsx from 'clsx';
import { useState } from 'react';
import ScrollTop from '../scrollTop/scrollTop'
import { Fab } from "@material-ui/core"
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Link from 'next/link'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#263238",
    color: "#fff"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    background: "url(/static/images/bg.jpg)",
    minHeight: "100vh",
    position: "relative"
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#fff'
  },
  logoWrapper: {
    flexGrow: 1
  },
  logo: {
    width: 50
  }
}));

const Layout = (props) => {
  const { children } = props;
  const classes = useStyles();
  // const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.logoWrapper}>
            <Link href="/">
              <a><img className={classes.logo} src="/static/images/logo.png" alt="logo" /></a>
            </Link>
          </div>
          {/* <div className={classes.search}>
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
            />
          </div> */}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton
            onClick={handleDrawerClose}
            color="inherit"
            aria-label="open drawer"
            edge="start"
            className={classes.menuButton}
          >
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link href="/">
            <a className={classes.link}>
            <ListItem button>
              <ListItemText primary="Sorting Hat"/>
            </ListItem>
            </a>
          </Link>
          <Link href="/characters">
            <a className={classes.link}>
            <ListItem button>
              <ListItemText primary="Characters"/>
            </ListItem>
            </a>
          </Link>
          <Link href="/houses">
            <a className={classes.link}>
            <ListItem button>
              <ListItemText primary="Houses"/>
            </ListItem>
            </a>
          </Link>
          <Link href="/spells">
            <a className={classes.link}>
            <ListItem button>
              <ListItemText primary="Spells"/>
            </ListItem>
            </a>
          </Link>
        </List>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Toolbar style={{minHeight: 0}} id="back-to-top-anchor" />
        {children}
        <ScrollTop {...props}>
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </main>
    </div>
  )
};

export default Layout;



