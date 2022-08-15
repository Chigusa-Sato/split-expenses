import { combineReducers } from 'redux';
import counter from './counter';
import price from './price';

export default combineReducers({ counter, price });
