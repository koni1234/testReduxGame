import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import App from './containers/App'
import './css/style.css'


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