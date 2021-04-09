import React from "react";
import {Button, CardActions, CardContent} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import AppointmentComponent from "./AppointmentComponent";
import 'date-fns';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login, saveAppointment} from "../../State/Action";

function AppointmentCard(props) {
    const [open, setOpen] = React.useState(false);

    //let username = props.user && props.user.username ? props.user.username : "";

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

AppointmentCard.propTypes = {
    user : PropTypes.object.isRequired
}

let mapStateToProps = (state)=>{
    return {
        user : state.user
    }
}

export default connect(mapStateToProps, null)(AppointmentCard);