import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from './reducer';

// import createHistory from 'history/createBrowserHistory';

// export const history = createHistory();

export const store = createStore(
  reducer, composeWithDevTools(applyMiddleware(thunk)));
