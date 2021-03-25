import React from 'react';
import PermanentDrawerLeft from "./Components/MainComponent/MainComponent";

import Loadable from 'react-loadable';

function Loading() {
    return (
        <div>
            Loading Project...
        </div>
    )
}

const User = Loadable({
    loader: () => import("./Containers/User/UserContainer"),
    loading: Loading
});

function App() {
    return (
        <div>
            <PermanentDrawerLeft />
        </div>
    );
}

export default App;