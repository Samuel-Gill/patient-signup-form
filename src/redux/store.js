import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/index";
import logger from "redux-logger";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;