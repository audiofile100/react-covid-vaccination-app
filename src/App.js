import React from 'react';
import Container from "@material-ui/core/Container";
import SimpleTabs from "./Components/SimpleTabsComponent/SimpleTabsComponent";

function App() {
    return (
        <div>
            <Container maxWidth={"lg"}>
                <SimpleTabs />
            </Container>
        </div>
    );
}

export default App;