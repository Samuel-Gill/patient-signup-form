import React from "react";
import MenuLayout from "./components/common/layout/MenuLayout.jsx";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import SignupForm from "./container/SignupForm.jsx";

function App() {
    return (
        <>
            <Provider store={store}>
                <MenuLayout className="layout-main">
                    <Switch>
                        <Route exact path='/signup' component={() => <><SignupForm /></>} />
                    </Switch>
                </MenuLayout>
            </Provider>
        </>
    );
}

export default App;