import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import counterReducer from './store/reducers/count';
import resultReducer from './store/reducers/result';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';


const rootReducer = combineReducers({
      ctr : counterReducer,
      res : resultReducer
});

const logger = store => {
      return next => {
            return action => {
                  console.log(' [MIDDLEWARE] disptching ', action);
                  const result = next(action);
                  console.log(' [MIDDLEWARE] next state ', store.getState());
                  return result;
            }
      }
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, 
                          composeEnhancers( applyMiddleware(logger, thunk) ));



ReactDOM.render(  <Provider store = { store } > 
                        <App/> 
                  </Provider>, 
                  document.getElementById('root'));

registerServiceWorker();
