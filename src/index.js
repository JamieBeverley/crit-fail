import {render} from 'react-dom'
import {Provider} from 'react-redux'
import CritFail from './containers/CritFail';
import React from 'react';
import store from "./store";

render(
    (
        <Provider store={store}>
            <CritFail/>
        </Provider>
    ),
    document.getElementById('root')
);
