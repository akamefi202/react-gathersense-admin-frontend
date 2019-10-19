import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import Root from './root'
import * as serviceWorker from './serviceWorker';

import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import { logger } from 'redux-logger';
import reducer from './reducers';
import rootSaga from './sagas';

require('react-web-vector-icons/fonts');

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
   reducer,
   applyMiddleware(
       sagaMiddleware, 
    //    logger
    ),
);
sagaMiddleware.run(rootSaga);


ReactDOM.render(
    <Provider store={store}>
        <Root/>
    </Provider>, 
    document.getElementById('root'));
serviceWorker.unregister();
