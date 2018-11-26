import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import loggerMiddleware from 'redux-logger';
import './index.css';

import App from './components/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(
        loggerMiddleware,
        )
    )
);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.querySelector('.root'));
