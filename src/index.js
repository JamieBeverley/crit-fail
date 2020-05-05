import {render} from 'react-dom'
import {Provider} from 'react-redux'
import CritFail from './containers/CritFail';
import React from 'react';
import logger from 'redux-logger'
import {applyMiddleware, createStore} from "redux";
import RootReducer from './reducers'


const store = createStore(RootReducer, applyMiddleware(logger));

render(
    (
        <Provider store={store}>
            <CritFail/>
        </Provider>
    ),
    document.getElementById('root')
);
