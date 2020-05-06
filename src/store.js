import logger from 'redux-logger'
import {applyMiddleware, createStore} from "redux";
import RootReducer from './reducers'
import {serverControl} from "./middleware";

const store = createStore(RootReducer, applyMiddleware(logger, serverControl));
export default store
