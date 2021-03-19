import { combineReducers } from 'redux';
import { locationValReducer } from './locationValReducer';
import { guestQtyReducer } from './guestQtyReducer';

export const rootReducers = combineReducers({
  locationValReducer,
  guestQtyReducer,
});
