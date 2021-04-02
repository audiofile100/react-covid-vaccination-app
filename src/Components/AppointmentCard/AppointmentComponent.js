import 'date-fns';
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Button, Dialog, Grid} from '@material-ui/core';
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

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function AppointmentComponent(props) {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleClose = () => {
        props.onClose();
    }

    const [vaccine, setVaccine] = React.useState('');

    const handleChange = (event) => {
        setVaccine(event.target.value);
    };

    const handleSubmit = (event) => {
        console.log(selectedDate);
        console.log(vaccine);
    };

    return (
        <Dialog onClose={handleClose} open={props.open}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
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
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Vaccine</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={vaccine}
                    onChange={handleChange}
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
            <Grid item xs={6}>
                <Button size={"large"} variant={"contained"} color={"primary"} onClick={handleSubmit}>Submit</Button>
            </Grid>
        </Dialog>
    )
}