import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './App';

import './index.css';

import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools }          from 'redux-devtools-extension';

import logger       from 'redux-logger';
import thunk        from 'redux-thunk';
import { Provider } from 'react-redux';

import { reducer } from './reducers';

const store = createStore( reducer, composeWithDevTools( applyMiddleware( thunk, logger ) ) );

ReactDOM.render( <Provider store={ store }><App /></Provider>, document.getElementById( 'root' ) );
