import React from "react";
import MenuLayout from "./components/common/layout/MenuLayout.jsx";
import { Route, Switch } from "react-router-dom";
import Signup from "./container/Signup.jsx"

function App() {
    return (
        <>
            <MenuLayout className="layout-main">
                <Switch>
                    <Route exact path='/signup' component={() => <Signup />} />
                </Switch>
            </MenuLayout>
        </>
    );
}

export default App;