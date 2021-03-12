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

    onChangeText = (evt) => {
        let target = evt.target;
        let classlist = target.classList.toString();
        let typedValue = target.value;

        if (classlist.indexOf("username") >= 0) {
            this.setState({
                username: typedValue
            });
        } else if (classlist.indexOf("password") >= 0) {
            this.setState({
                password: typedValue
            });
        }
    }

    handleClose = () => {
        this.props.onClose();
    }

    handleSubmit = () => {
        alert(this.state.username + " " + this.state.password);
    }
    render() {
        return (
            <Dialog onClose={this.handleClose} open={this.props.open}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <TextField className={"username"}
                                   variant={"outlined"}
                                   placeholder="username"
                                   onChange={this.onChangeText}
                                   value={this.state.username} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField className={"password"}
                                   variant={"outlined"}
                                   placeholder="password"
                                   onChange={this.onChangeText}
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