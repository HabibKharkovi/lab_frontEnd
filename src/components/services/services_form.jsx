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
// import { services_data } from '../../redux/services/services_actions';


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
    servicesFormWrapper: {
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


export default function ServicesForm(props) {
    const classes = useStyles();
    const dispatch = useDispatch()

    const [servicesCredential, setservicesCredential] = React.useState({
        services_header: '',
        department: '',
        gender: 'male',
        tube_color: '',
        tube_type: '',
        sample_volume: '',
        discription: '',
        price: '',
        reporting_time: '',
        params: []
    });

    const { services_header, department, gender, tube_color, tube_type, sample_volume, discription, price, reporting_time, params} = servicesCredential;

    const handleChange = e => {
        const { name, value } = e.target;
        setservicesCredential({ ...servicesCredential, [name]: value });
    };

    const handleSubmit = e => {
        
        e.preventDefault();

        // dispatch(services_data(servicesCredential))
    }

    const handleAddParams = () => {
        setservicesCredential({ params: servicesCredential.params.concat([{ name: '' }])})
    }
    console.log(params)
    return (
       
        <Grid container >
            <Grid item xs>
                <Paper className={classes.servicesFormWrapper}>
                        <form className={classes.root} xs onSubmit={handleSubmit} autoComplete="false" action="/print">
                            <Typography variant="h5" component="h5">
                                Add Services:
                            </Typography>
                            <Grid container xs className={classes.servicesInnerFormWrapper}>
                                <Grid container item md={4} className={classes.innerFormWrapperLeft}>
                                    <Grid item xs className={classes.inputWrap}>
                                        <TextField onChange={handleChange} id="services_header" name="services_header" value={services_header} label="Services Header" type="text" />
                                    </Grid>
                                    <Grid item>
                                        <TextField onChange={handleChange} id="department" name="department" value={department} label="Department" type="text" />
                                    </Grid>
                                    <Grid container item xs className={classes.inputWrap}>
                                        <Grid item>
                                            <RadioGroup aria-label="gender" name="gender" value={gender} onChange={handleChange} className={classes.radioGroup}>
                                                <FormControlLabel
                                                    value="male"
                                                    control={<Radio color="primary" />}
                                                    label="Male"
                                                    labelPlacement="start"
                                                    className={classes.radio_male}
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
                                </Grid>
                                <Grid container item md={4} className={classes.innerFormWrapperRight}>
                                    <Grid item xs className={classes.inputWrap}>
                                        <TextField onChange={handleChange} id="tube_type" name="tube_type" value={tube_type} label="Tube Type" type="text" />
                                    </Grid>
                                    <Grid item xs className={classes.inputWrap}>
                                        <TextField onChange={handleChange} id="tube_color" name="tube_color" value={tube_color} label="Tube Color" type="text" />
                                    </Grid>
                                    <Grid item xs className={classes.inputWrap}>
                                        <TextField onChange={handleChange} id="sample_volume" name="sample_volume" value={sample_volume} label="Sample Volume" type="text" />
                                    </Grid>
                                </Grid>
                                <Grid container item md={4} className={classes.innerFormWrapperRight}>
                                    <Grid item xs className={classes.inputWrap}>
                                        <TextField onChange={handleChange} id="discription" name="discription" value={discription} label="Discription" type="text" />
                                    </Grid>
                                    <Grid item xs className={classes.inputWrap}>
                                        <TextField onChange={handleChange} id="price" name="price" value={price} label="Price" type="text" />
                                    </Grid>
                                    <Grid item xs className={classes.inputWrap}>
                                        <TextField onChange={handleChange} id="reporting_time" name="reporting_time" value={reporting_time} label="Reporting Time" type="text" />
                                    </Grid>
                                </Grid>                            
                            </Grid>
                            <Grid>
                                <Grid container xs className={classes.servicesParams}>
                                    <Grid item xs className={classes.inputWrap} md={2}>
                                        <TextField onChange={handleChange} id="tube_type" name="tube_type" value={tube_type} label="Tube Type" type="text" />
                                    </Grid>
                                    <Grid item xs className={classes.inputWrap} md={2}>
                                        <TextField onChange={handleChange} id="tube_color" name="tube_color" value={tube_color} label="Tube Color" type="text" />
                                    </Grid>
                                    <Grid item xs className={classes.inputWrap} md={2}>
                                        <TextField onChange={handleChange} id="sample_volume" name="sample_volume" value={sample_volume} label="Sample Volume" type="text" />
                                    </Grid>
                                    <Grid item xs className={classes.inputWrap} md={2}>
                                        <TextField onChange={handleChange} id="sample_volume" name="sample_volume" value={sample_volume} label="Sample Volume" type="text" />
                                    </Grid>
                                    <Grid item xs className={classes.inputWrap} md={2}>
                                        <TextField onChange={handleChange} id="sample_volume" name="sample_volume" value={sample_volume} label="Sample Volume" type="text" />
                                    </Grid>
                                    <Grid item xs className={classes.inputWrap} md={2}>
                                        <TextField onChange={handleChange} id="sample_volume" name="sample_volume" value={sample_volume} label="Sample Volume" type="text" />
                                    </Grid>
                                </Grid>
                                <Grid container xs className={classes.servicesParams}>
                                    <Grid item xs className={classes.inputWrap} md={3}>
                                        <TextField onChange={handleChange} id="tube_type" name="tube_type" value={tube_type} label="Tube Type" type="text" />
                                    </Grid>
                                    <Grid item xs className={classes.inputWrap} md={3}>
                                        <TextField onChange={handleChange} id="tube_color" name="tube_color" value={tube_color} label="Tube Color" type="text" />
                                    </Grid>
                                    <Grid item xs className={classes.inputWrap} md={3}>
                                        <TextField onChange={handleChange} id="sample_volume" name="sample_volume" value={sample_volume} label="Sample Volume" type="text" />
                                    </Grid>
                                    <Grid item xs className={classes.inputWrap} md={3}>
                                        <TextField onChange={handleChange} id="sample_volume" name="sample_volume" value={sample_volume} label="Sample Volume" type="text" />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Button variant="contained" color="primary" onClick={handleAddParams}>Add Params</Button>
                        </form>
                </Paper>
            </Grid>
        </Grid>


    );
}
