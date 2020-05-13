import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import counterReducer from './store/reducers/count';
import resultReducer from './store/reducers/result';
import { Provider } from 'react-redux';


const rootReducer = combineReducers({
      ctr : counterReducer,
      res : resultReducer
});

/**
 * now we make our own middleware, its just a function as we said. 
 * it takes store as the param because we connect the store with the middleware 
 * through a method of redux which will inturn execute the middleware. 
 * so, it requires store as a param. 
 * 
 * then this function returns another function which is again executed by redux. 
 * it gets next as the param which a function related to express in js. its 
 * used to pass the action to continue to the next stage and go to the reducer. 
 * 
 * this function also returns a function which takes action as the param, and 
 * here we can do what we want. 
 * 
 * we can also modfy the action here but do with caution.  
 * we many land in an unpredictable state or break the app. 
 *   
 * then we call next() to to let the action continue its journey onto the 
 * reducer.
 */
const logger = store => {
      return next => {
            return action => {
                  console.log(' [MIDDLEWARE] diaptching ', action);
                  const result = next(action);
                  console.log(' [MIDDLEWARE] next state ', store.getState());
                  return result;
            }
      }
}


/**
 * here the second argument is an enhancer, which is is our middleware here. 
 * we just need to pass the name of the middleware here and it will execute that. 
 * we can pass multiple middlewars also here in the applyMiddleware() and they 
 * will be executed in order. 
 */


 /**
  * this window wala line is a variable which is injected by the redux devtools
  * extension into the js code, so its avaailable. 
  * the compose is a redux method which helps to combine multiple enhancers 
  * together. 
  * so, we create composeEnhancers. its a method, if the dev tools extension 
  * is there, then first one is used, else compose is used. 
  */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// this is the syntax, we give the composeEnhancers() and the applyMiddleware() 
// there. 
const store = createStore(rootReducer, 
                          composeEnhancers( applyMiddleware(logger) ));

// const store = createStore(rootReducer, applyMiddleware(logger));



ReactDOM.render(  <Provider store = { store } > 
                        <App/> 
                  </Provider>, 
                  document.getElementById('root'));

registerServiceWorker();
