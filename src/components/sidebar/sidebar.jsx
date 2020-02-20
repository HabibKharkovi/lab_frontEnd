import React from "react";
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxShadow: '0px 2px 4px -2px rgba(0,0,0,0.2)'
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: 0,
        [theme.breakpoints.up('sm')]: {
            width: 0,
        },
    },
    list: {
        marginTop: 20
    },
    listitem: {
        padding: 0,
        borderBottom: "1px solid #eee"
    },
    listlink: {
        padding: "15px 40px",
        display: "block",
        textDecoration: "none",
        fontSize: 16,
        width: "100%",
        color: "#000",
        fontWeight: 500,
        transition: "all 0.2s ease-out",
        '&:active': {
            color: "#000"
        },
        '&:focus': {
            outline: "none"
        },
        '&:hover': {
            color: "#fff",
            backgroundColor: "#3f51b5"
        }
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
}));

export default function Sidebar(props) {
    const classes = useStyles();
    const theme = useTheme();
    const { handleDrawerClose, open } = props;
    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>
            <Divider />
            <List className={classes.list}>
                <ListItem className={classes.listitem}>
                    <Link className={classes.listlink} to="/patientForm">Add Patient</Link>
                </ListItem>
                <ListItem className={classes.listitem}>
                    <Link className={classes.listlink} to="/employeeForm">Add Employee</Link>
                </ListItem>
                <ListItem className={classes.listitem}>
                    <Link className={classes.listlink} to="/servicesForm">Add Service</Link>
                </ListItem>
                <ListItem className={classes.listitem}>
                    <Link className={classes.listlink} to="/patients">All Patients</Link>
                </ListItem>
                <ListItem className={classes.listitem}>
                    <Link className={classes.listlink} to="/employes">All Employees</Link>
                </ListItem>
                <ListItem className={classes.listitem}>
                    <Link className={classes.listlink} to="/services">All Services</Link>
                </ListItem>
            </List>
        </Drawer>
    );
}