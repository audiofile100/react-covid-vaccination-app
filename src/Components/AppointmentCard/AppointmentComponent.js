import 'date-fns';
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Button, Dialog, Grid, TextField} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {connect} from "react-redux";
import {saveAppointment} from "../../State/Action";

function AppointmentComponent(props) {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleClose = () => {
        props.onClose();
    }

    const [vaccine, setVaccine] = React.useState('');
    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');

    const handleSelect = (event) => {
        setVaccine(event.target.value);
    };

    const handleFirstName = (event) => {
        setFirstname(event.target.value);
    };

    const handleLastName = (event) => {
        setLastname(event.target.value);
    };

    const handleSubmit = (event) => {
        console.log(selectedDate);
        console.log(vaccine);
        console.log(props);
        let apptObj = {
            "firstname" : firstname,
            "lastname" : lastname,
            "datetime" : selectedDate,
            "vaccine" : vaccine,
        }
        props.saveAppointment(apptObj);
    };

    return (
        <Dialog onClose={handleClose} open={props.open}>
            <Grid container className={classes.outline}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid item xs={6}>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date picker dialog"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="Time picker"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
            </Grid>

            <Grid container className={classes.outline} spacing={3}>
                <Grid item xs={12}>
                    <FormControl variant={"outlined"} className={classes.formControl}>
                        <InputLabel id="Vaccine Select">Vaccine</InputLabel>
                        <Select
                            labelId="Vaccine Select"
                            id="vaccineselect"
                            value={vaccine}
                            onChange={handleSelect}
                            label="Vaccine"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Pfizer"}>Pfizer</MenuItem>
                            <MenuItem value={"Moderna"}>Moderna</MenuItem>
                            <MenuItem value={"Johnson & Johnson"}>Johnson & Johnson</MenuItem>
                            <MenuItem value={"AstraZeneca"}>AstraZeneca</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField id={"firstname"}
                               variant={"outlined"}
                               label={"First Name"}
                               onChange={handleFirstName}
                               className={classes.formControl} />
                </Grid>
                <Grid item xs={6}>
                    <TextField id={"lastname"}
                               variant={"outlined"}
                               label={"Last Name"}
                               onChange={handleLastName}
                               className={classes.formControl}/>
                </Grid>
                <Grid item xs={6}>
                    <Button size={"large"} variant={"contained"} color={"primary"} onClick={handleSubmit}>Submit</Button>
                </Grid>
            </Grid>
        </Dialog>
    )
}

const useStyles = makeStyles((theme) => ({
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 250,
    },
    outline: {
        margin: theme.spacing(2),
    },
}));

let mapDispatchToProps = (dispatch) => {
    return {
        saveAppointment: (apptObj) => {
            dispatch(saveAppointment(apptObj));
        }
    }
}

export default connect(null, mapDispatchToProps)(AppointmentComponent);