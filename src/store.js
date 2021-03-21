import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import user from './State/UserReducer';

let myLogger = () => (next) => (action) => {
    next(action);
};

export default createStore(
    combineReducers({
        user
    }),
    {},
    applyMiddleware(myLogger, thunk, promise)
)