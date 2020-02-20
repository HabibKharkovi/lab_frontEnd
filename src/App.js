import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Sidebar from './components/sidebar/sidebar';
import PatientsTable from './components/patient/patients_table';
import PatientForm from './components/patient/patients_add_form';
import ServicesForm from './components/services/services_form';
import ServicesTable from './components/services/services_table';
import EmployeeForm from './components/employee/employee_form';
import EmployeeTable from './components/employee/employee_table';
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
          <Route exact path="/patients">
            <PatientsTable />
          </Route>
          <Route exact path="/patientForm">
            <PatientForm/>
          </Route>
          <Route exact path="/employeeForm">
            <EmployeeForm/>
          </Route>
          <Route exact path="/employes">
            <EmployeeTable/>
          </Route>
          <Route exact path="/servicesForm">
            <ServicesForm/>
          </Route>
          <Route exact path="/services">
            <ServicesTable/>
          </Route>
        </main>
      </Switch>
    </div>
  );
}