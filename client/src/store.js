import {createStore, applyMiddleware} from 'redux';
//import logger from 'redux-logger';
import rootReducer from './_reducer/chatReducers';

const store = createStore(rootReducer);

export default store;