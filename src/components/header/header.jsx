import React from 'react';
import clsx from 'clsx';
import { makeStyles, fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#fff"
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxShadow: '0px 2px 4px -2px rgba(0,0,0,0.2)'
  },
  menuButton: {
    marginRight: 36,
  },
  menuIcon: {
    fill: "#000"
  },
  brandLogo: {
    color: "#000",
  },
  hide: {
    display: 'none',
  },
  loginBtn: {
    color: "#000",
    marginLeft: 10
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: 66
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: "auto",
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
    border: "1px solid #ddd"
  },
  searchIconWrap: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchIcon: {
    fill: "#000"
  },
  inputRoot: {
    color: '#000',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 200,
      '&:focus': {
        width: 250,
      },
    },
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const {handleDrawerOpen, open} = props;

  return (
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
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
            <Typography className={classes.brandLogo} variant="h6" noWrap>
              MLT LOGO
          </Typography>

            <div className={classes.search}>
              <div className={classes.searchIconWrap}>
                <SearchIcon className={classes.searchIcon} />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <Button className={classes.loginBtn}>Login</Button>
          </Toolbar>
        </AppBar>
  );
}