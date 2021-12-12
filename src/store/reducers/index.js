import counter from './couter';
import movie from './movie';

import { combineReducers } from 'redux';

export default combineReducers({
  counter,
  movie,
});
