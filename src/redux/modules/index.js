import {
  combineReducers
} from 'redux';

import {
  navigationReducer
} from './navigation';

export const rootReducer = combineReducers({
  navigation: navigationReducer,
});