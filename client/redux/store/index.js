import { createStore, combineReducers } from 'redux';
import dataReducer from '../reducers/data.js';

const reducers = {
  data: dataReducer
};

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default store;
