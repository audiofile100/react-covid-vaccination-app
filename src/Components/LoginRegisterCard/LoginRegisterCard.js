import React from "react";
import {Button, CardActions, CardContent} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import LoginRegisterComponent from "../LoginRegisterComponent/LoginRegisterComponent";

function LoginRegisterCard() {
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
                <h1>Step 1: Login or Register</h1>
                <p>Please login or register for a new account.</p>
            </CardContent>
            <CardActions>
                <LoginRegisterComponent open={open} onClose={handleClose} />
                <Button size={"large"} onClick={handleClickOpen}>Enter</Button>
            </CardActions>
        </Card>
    )
}

export default LoginRegisterCard;