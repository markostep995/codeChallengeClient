import { combineReducers } from 'redux';
import navigation from './navigation';
import errorReducer from './errorReducer';
import securityReducer from './securityReducer';
import user from './user';

export default combineReducers({
  navigation: navigation,
  errors: errorReducer,
  loggedUser: securityReducer,
  user: user,
});
