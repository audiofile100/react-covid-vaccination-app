import React from "react";
import {Button, CardActions, CardContent} from "@material-ui/core";
import Card from "@material-ui/core/Card";

function MakeUpdateAppointmentCard() {
    return (
        <Card>
            <CardContent>
                <h1>Step 2: Appointments</h1>
                <p>You can make appointments or update appointments here.</p>
            </CardContent>
            <CardActions>
                <Button size={"large"}>Enter</Button>
            </CardActions>
        </Card>
    )
}

export default MakeUpdateAppointmentCard;