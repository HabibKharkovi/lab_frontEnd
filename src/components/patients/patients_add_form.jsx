import React, { useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PrintComponent from './../print/printComponent';
import Table from './table';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { patient_data } from './../../redux/patient/patient_actions';


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
    patientFormWrapper: {
        padding: "40px 30px 20px 30px"
    },
    patientInnerFormWrapper: {
        justifyContent: "center"
    },
    submit: {
        padding: "12px 30px",
        margin: "20px 0"
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
    },
    rightSidebarInnerWrapper: {
        paddingTop: 40
    }
}));

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
];

export default function PatientForm(props) {
    const classes = useStyles();
    const result = useSelector(state =>  state)
    const dispatch = useDispatch()

    const [patientCredential, setpatientCredential] = React.useState({
        name: '',
        age: '',
        gender: 'male',
        ref: '',
        contact: '',
        email: '',
        total: '',
        discountPercentage: '',
        discount: '',
        paid: '',
        balance: ''
    });

    const [tests, setTests] = React.useState({ tests: [] });
    const [open, setOpen] = React.useState(true);

    const [printData, setPrintData] = React.useState({ printData: [] });

    const { name, age, gender, ref, contact, email, total, discountPercentage, discount, paid, balance } = patientCredential;

    const handleChange = e => {
        const { name, value } = e.target;
        setpatientCredential({ ...patientCredential, [name]: value });
    };

    const handleSubmit = e => {
        
        e.preventDefault();
        setOpen(false);
        patientCredential.tests = tests;

        dispatch(patient_data(patientCredential))
    }

    

    return (

        <Grid container >
            <Grid item xs={7}>
                <Paper className={classes.patientFormWrapper}>
                    {open ?
                        <form className={classes.root} xs onSubmit={handleSubmit} autoComplete="false" action="/print">
                            <Grid container xs className={classes.patientInnerFormWrapper}>
                                <Grid container item md={6} className={classes.innerFormWrapperLeft}>
                                    <Typography variant="h5" component="h5">
                                        Patient Information:
                                    </Typography>
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
                                        <TextField onChange={handleChange} id="ref" name="ref" value={ref} label="Refered By" type="text" />
                                    </Grid>
                                    <Grid item xs className={classes.inputWrap}>
                                        <TextField onChange={handleChange} id="contact" name="contact" value={contact} label="Contact Number" type="text" />
                                    </Grid>
                                    <Grid item xs className={classes.inputWrap}>
                                        <TextField onChange={handleChange} id="email" name="email" value={email} label="Email" type="email" />
                                    </Grid>
                                </Grid>
                                <Grid container item md={6} className={classes.innerFormWrapperRight}>
                                    <Typography variant="h5" component="h5">
                                        Panel's Tests:
                                    </Typography>
                                    <Autocomplete
                                        onChange={handleChange}
                                        multiple
                                        options={top100Films}
                                        disableCloseOnSelect
                                        getOptionLabel={option => option.title}
                                        onChange={(e, Value) => {
                                            setTests({ tests: Value });
                                        }}
                                        className={classes.servicesInputWrapper}
                                        renderOption={(option, { selected }) => (
                                            <React.Fragment>
                                                <Checkbox
                                                    icon={icon}
                                                    checkedIcon={checkedIcon}
                                                    style={{ marginRight: 8 }}
                                                    checked={selected}
                                                    className={classes.servicesCheckbox}
                                                />
                                                {option.title}
                                            </React.Fragment>
                                        )}

                                        renderInput={params => (
                                            <TextField
                                                {...params}
                                                label="Choose Test"
                                                placeholder="select"
                                                className={classes.servicesInput}
                                                fullWidth
                                            />
                                        )}
                                    />
                                    <Typography variant="h5" component="h5" className={classes.feeInfoText}>
                                        Fee Information:
                                    </Typography>
                                    <Grid item xs className={classes.inputWrap}>
                                        <TextField onChange={handleChange} id="totalFee" name="total" value={total} label="Total Fee" type="text" disabled />
                                    </Grid>
                                    <Grid container item xs className={classes.inputWrap}>
                                        <Grid item md={4} className={classes.discountPer}>
                                            <TextField onChange={handleChange} id="discountPercentage" name="discountPercentage" value={discountPercentage} label="% Discount" type="text" />
                                        </Grid>
                                        <Grid item md={4} className={classes.discount}>
                                            <TextField onChange={handleChange} id="discount" name="discount" value={discount} label="Discount" type="text" />
                                        </Grid>
                                        <Grid item md={4} className={classes.paid}>
                                            <TextField onChange={handleChange} id="paid" name="paid" value={paid} label="Paid" type="text" />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs className={classes.inputWrap}>
                                        <TextField onChange={handleChange} id="balance" name="balance" value={balance} label="Balance" type="text" disabled />
                                    </Grid>
                                </Grid>
                                <Button variant="contained" color="primary" type="submit" className={classes.submit}>
                                    Submit
                                </Button>
                            </Grid>
                        </form>
                        :
                        <PrintComponent printData={printData} />
                    }
                </Paper>
            </Grid>
            <Grid item xs={5} className={classes.rightSidebar}>
                <Paper className={classes.rightSidebarInnerWrapper}>
                    <Table/>
                </Paper>
            </Grid>
        </Grid>


    );
}
