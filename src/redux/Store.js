import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger'; //middleware
import thunk from 'redux-thunk';

import RootReducer from './RootReducer';

const middlewares = [thunk];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
} 

export const Store = createStore(RootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(Store);

export default {Store, persistor};