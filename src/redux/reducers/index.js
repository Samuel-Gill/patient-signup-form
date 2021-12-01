import insuranceStatus from "./insurance.js";

import { combineReducers } from "redux";

const reducers = combineReducers(
    {
        insurance: insuranceStatus,
    }
);

export default reducers;