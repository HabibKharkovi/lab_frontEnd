import React, { useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
// import { Employee_data } from '../../redux/Employee/Employee_actions';


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            width: "100%",
        },
    },
    innerFormWrapperLeft: {
        flexDirection: "column",
        paddingRight: 20
    },
    innerFormWrapperRight: {
        flexDirection: "column",
        paddingLeft: 20
    },
    radioGroup: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-end",
        height: "100%"
    },
    inputWrap: {
        marginBottom: 10
    },
    servicesInputWrapper: {
        width: "100%!important"
    },
    servicesInput: {
        paddingBottom: 4
    },
    servicesCheckbox: {
        display: "none"
    },
    EmployeeFormWrapper: {
        padding: "40px 30px 20px 30px"
    },
    submit: {
        padding: "12px 30px",
        margin: "20px 0"
    },
    printBtn: {
        padding: "12px 30px",
        margin: "20px 0 20px 20px"
    },
    discountPer: {
        paddingRight: 15
    },
    discount: {
        paddingRight: 7,
        paddingLeft: 7
    },
    paid: {
        paddingLeft: 15
    },
    feeInfoText: {
        marginTop: 49
    },
    rightSidebar: {
        paddingLeft: 24
    }
}));


export default function EmployeeForm(props) {
    const classes = useStyles();
    const dispatch = useDispatch()

    const [employeeCredential, setemployeeCredential] = React.useState({
        name: '',
        age: '',
        gender: 'male',
        father_name: '',
        contact: '',
        cnic: '',
        email: '',
        salary: '',
        address: '',
        role: '',
        password: '',
        conform_password: ''
    });

    const { name, age, gender, cnic, contact, email, address, father_name, salary, password, conform_password } = employeeCredential;

    const handleChange = e => {
        const { name, value } = e.target;
        setemployeeCredential({ ...employeeCredential, [name]: value });
    };

    const handleSubmit = e => {
        
        e.preventDefault();

        // dispatch(Employee_data(employeeCredential))
    }

    return (
        <Grid container >
            <Grid item xs>
                <Paper className={classes.EmployeeFormWrapper}>
                        <form className={classes.root} xs onSubmit={handleSubmit} autoComplete="false" action="/print">
                            <Typography variant="h5" component="h5">
                                Employee Information:
                            </Typography>
                            <Grid container xs className={classes.EmployeeInnerFormWrapper}>
                                <Grid container item md={4} className={classes.innerFormWrapperLeft}>
                                    <Grid item xs className={classes.inputWrap}>
                                        <TextField onChange={handleChange} id="name" name="name" value={name} label="Name" type="text" />
                                    </Grid>
                                    <Grid container item xs className={classes.inputWrap}>
                                        <Grid item md={6}>
                                            <TextField onChange={handleChange} id="age" name="age" value={age} label="Age" type="text" />
                                        </Grid>
                                        <Grid item md={6}>
                                            <RadioGroup aria-label="gender" name="gender" value={gender} onChange={handleChange} className={classes.radioGroup}>
                                                <FormControlLabel
                                                    value="male"
                                                    control={<Radio color="primary" />}
                                                    label="Male"
                                                    labelPlacement="start"
                                                />
                                                <FormControlLabel
                                                    value="female"
                                                    control={<Radio color="primary" />}
                                                    label="Female"
                                                    labelPlacement="start"
                                                />
                                            </RadioGroup>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs className={classes.inputWrap}>
                                        <TextField onChange={handleChange} id="contact" name="contact" value={contact} label="Contact Number" type="text" />
                                    </Grid>
                                    <Grid item xs className={classes.inputWrap}>
                                        <TextField onChange={handleChange} id="cnic" name="cnic" value={cnic} label="CNIC" type="text" />
                                    </Grid>
                                    <Grid item xs className={classes.inputWrap}>
                                        <TextField onChange={handleChange} id="email" name="email" value={email} label="Email" type="email" />
                                    </Grid>
                                </Grid>
                                <Grid container item md={4} className={classes.innerFormWrapperRight}>
                                    <Grid item xs className={classes.inputWrap}>
                                        <TextField onChange={handleChange} id="address" name="address" value={address} label="Address" type="text" />
                                    </Grid>
                                    <Grid item xs className={classes.inputWrap}>
                                        <TextField onChange={handleChange} id="father_name" name="father_name" value={father_name} label="Father Name" type="text" />
                                    </Grid>
                                    <Grid item xs className={classes.inputWrap}>
                                        <TextField onChange={handleChange} id="salary" name="salary" value={salary} label="Salary" type="text" />
                                    </Grid>
                                    <Grid item xs className={classes.inputWrap}>
                                        <TextField onChange={handleChange} id="password" name="password" value={password} label="Password" type="text" />
                                    </Grid>
                                    <Grid item xs className={classes.inputWrap}>
                                        <TextField onChange={handleChange} id="conform_password" name="conform_password" value={conform_password} label="Conform Password" type="text" />
                                    </Grid>
                                </Grid>
                                <Grid container item md={4} className={classes.innerFormWrapperRight}>
                                    <Grid item xs className={classes.inputWrap}>
                                        <TextField onChange={handleChange} id="address" name="address" value={address} label="Address" type="text" />
                                    </Grid>
                                    <Grid item xs className={classes.inputWrap}>
                                        <TextField onChange={handleChange} id="father_name" name="father_name" value={father_name} label="Father Name" type="text" />
                                    </Grid>
                                    <Grid item xs className={classes.inputWrap}>
                                        <TextField onChange={handleChange} id="salary" name="salary" value={salary} label="Salary" type="text" />
                                    </Grid>
                                    <Grid item xs className={classes.inputWrap}>
                                        <TextField onChange={handleChange} id="password" name="password" value={password} label="Password" type="text" />
                                    </Grid>
                                    <Grid item xs className={classes.inputWrap}>
                                        <TextField onChange={handleChange} id="conform_password" name="conform_password" value={conform_password} label="Conform Password" type="text" />
                                    </Grid>
                                </Grid>
                                
                                {/* <Button variant="contained" color="primary" type="submit" className={classes.submit}>
                                    Save
                                </Button> */}
                            </Grid>
                        </form>
                        {/* <PrintComponent printData={printData} /> */}
                </Paper>
            </Grid>
        </Grid>


    );
}
