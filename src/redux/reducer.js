import { combineReducers } from 'redux';
import postReducer from './reducers/postReducer';
// import authUser from './reducers/authUser';
// import common from './reducers/common';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  posts:postReducer,
  // authUser,
  // common,
  router: routerReducer
});
