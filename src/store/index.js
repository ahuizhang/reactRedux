import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';

import rootReducer from './reducers';

const Store = createStore(
  rootReducer, //所有reducers方法的集合
  applyMiddleware(thunk, promiseMiddleware, logger) //引入中间件
);

export default Store;