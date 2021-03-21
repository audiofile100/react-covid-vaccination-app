import React from "react";
import {Button, Dialog, Grid, TextField} from "@material-ui/core";

class LoginRegisterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    setUsername = event => {
        this.setState({
            username: event.target.value
        });
    };

    setPassword = event => {
        this.setState({
            password: event.target.value
        });
    };

    handleClose = () => {
        this.props.onClose();
    }

    handleSubmit = () => {
        //alert(this.state.username + " " + this.state.password);
        console.log("PROPS", this.props);
        //this.props.login(this.state);
    }

    render() {
        return (
            <Dialog onClose={this.handleClose} open={this.props.open}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <TextField variant={"outlined"}
                                   placeholder="username"
                                   onChange={this.setUsername}
                                   value={this.state.username} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField variant={"outlined"}
                                   placeholder="password"
                                   onChange={this.setPassword}
                                   value={this.state.password} />
                    </Grid>
                    <Grid item xs={6}>
                        <Button size={"large"} variant={"contained"} color={"primary"} onClick={this.handleSubmit}>Submit</Button>
                    </Grid>
                </Grid>
            </Dialog>
        )
    }
}

export default LoginRegisterComponent;