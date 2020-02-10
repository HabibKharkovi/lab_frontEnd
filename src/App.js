import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import PatientsTable from './components/patients/patients_table';
import Sidebar from './components/sidebar/sidebar';
import PatientForm from './components/patients/patients_add_form';
import Header from './components/header/header';

import {
  Switch,
  Route
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: 66
  }
}));

export default function App() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header handleDrawerOpen={handleDrawerOpen} open={open}/>
      <Sidebar handleDrawerClose={handleDrawerClose} open={open}/>
      <Switch>
        <main className={classes.content}>
          <Route path="/search">
            <PatientsTable />
          </Route>
          <Route path="/add_patient">
            <PatientForm/>
          </Route>
        </main>
      </Switch>
    </div>
  );
}