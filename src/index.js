import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';


const store = createStore(reducer);

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
