import { combineReducers } from 'redux';
import Numbers from './number';
import Age from './age';

const rootReducer = combineReducers({    //把所有reducer函数都集中到这里
  Numbers,
  Age
});


export default rootReducer