import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import counterReducer from './store/reducers/count';
import resultReducer from './store/reducers/result';
import { Provider } from 'react-redux';


/**
 * we are trying to merge the reducers now by using this method. 
 * we need to pass an object which maps different slices of our state to 
 * different reducers.
 */
const rootReducer = combineReducers({
      ctr : counterReducer,
      res : resultReducer
});

// now we pass the root reducer in the store. 
const store = createStore(rootReducer);

/**
 * provide is a helper component which helps us to connext our app with redux 
 * and inject our store into the app. 
 * we use the store prop for that. 
 */
ReactDOM.render(  <Provider store = { store } > 
                        <App/> 
                  </Provider>, 
                  document.getElementById('root'));

registerServiceWorker();
