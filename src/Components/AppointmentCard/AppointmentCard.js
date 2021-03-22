import React from "react";
import {Button, CardActions, CardContent} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import AppointmentComponent from "./AppointmentComponent";
import 'date-fns';

function AppointmentCard() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Card>
            <CardContent>
                <h1>Step 2: Select Date & Time</h1>
                <p>Select your preferred date and time for your appointment.</p>
            </CardContent>
            <CardActions>
                <AppointmentComponent open={open} onClose={handleClose} />
                <Button size={"large"} onClick={handleClickOpen}>Enter</Button>
            </CardActions>
        </Card>
    )
}

export default AppointmentCard;