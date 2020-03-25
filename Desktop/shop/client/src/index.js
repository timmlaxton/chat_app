import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/styles.css';

import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';

import { Provider } from 'react-redux';
import {createStore, applyMiddleware }  from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThnk from 'redux-thunk';

import Reducer from './Reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,ReduxThnk)(createStore)


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}> 
 <BrowserRouter> 
    <Routes />
</BrowserRouter>
</Provider>
 , document.getElementById('root')
);


