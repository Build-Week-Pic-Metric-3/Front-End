import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './App';

import './index.css';

import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools }          from 'redux-devtools-extension';

import logger       from 'redux-logger';
import thunk        from 'redux-thunk';
import { Provider } from 'react-redux';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

import { reducer } from './reducers';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore( persistedReducer, composeWithDevTools( applyMiddleware( thunk, logger ) ) );

const persistor = persistStore( store );

ReactDOM.render( 
  <Provider store={ store }><PersistGate loading={ null } persistor={ persistor }>
    <App />
  </PersistGate></Provider>,
  document.getElementById( 'root' )
);
