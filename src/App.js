import React from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import SimpleTabs from "./Components/SimpleTabsComponent/SimpleTabsComponent";
import LoginRegisterCard from "./Components/LoginRegisterCard/LoginRegisterCard";
import MakeUpdateAppointmentCard from "./Components/MakeUpdateAppointmentCard/MakeUpdateAppointmentCard";

function App() {
    return (
        <div>
            <Container maxWidth={"lg"}>
                <SimpleTabs />
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <LoginRegisterCard />
                    </Grid>
                    <Grid item xs={6}>
                        <MakeUpdateAppointmentCard />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default App;