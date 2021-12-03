import React from "react";
import Menu from "./common/Menu.jsx"
import { Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css"
import { PersonalData } from "./components/PersonalData.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import ParentForm from "./components/ParentForm.jsx";

function App() {
    return (
        <>
            <Provider store={store}>
                <Menu />
                <Switch>
                    <Route exact path='/signup' component={() => <><ParentForm /></>} />
                </Switch>
            </Provider>
        </>
    );
}

export default App;