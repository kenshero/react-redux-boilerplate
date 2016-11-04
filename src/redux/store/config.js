import { createStore, applyMiddleware, compose } from 'redux';
import combineReducer from '../reducers/index';
// import {logger, crashReporter, thunk} from '../middleware/index';
import { crashReporter } from '../middleware/index';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

var store = createStore(combineReducer, compose(
    applyMiddleware(createLogger(), crashReporter, thunk)))
export default store;