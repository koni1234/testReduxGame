//import React from 'react'
//import { render } from 'react-dom'
//import { Provider } from 'react-redux'
//import { createStore } from 'redux'
//import memoryApp from './reducers'
//import App from './components/App'
//import registerServiceWorker from './registerServiceWorker';
//
//let store = createStore(memoryApp)
//
//render(
//  <Provider store={store}>
//    <App />
//  </Provider>,
//  document.getElementById('root')
//)
//registerServiceWorker();

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
//import todoApp from './reducers'
import App from './components/App'


import thunk from 'redux-thunk'
import { getGames } from './actions'
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker';


const middleware = [ thunk ]; 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
)

store.dispatch(getGames())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();