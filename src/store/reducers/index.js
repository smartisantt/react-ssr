import counter from './couter';
import movies from './movies';

import { combineReducers } from 'redux';

export default combineReducers({
  counter,
  movies,
});
