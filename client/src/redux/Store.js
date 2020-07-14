import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger'; //middleware
import createSagaMiddleware from 'redux-saga'; 

import RootSaga from './RootSaga';  
import RootReducer from './RootReducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
} 

export const Store = createStore(RootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(RootSaga);

export const persistor = persistStore(Store);

export default {Store, persistor};