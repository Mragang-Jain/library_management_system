/**
* index.js - root file of the application
*/ 
/* REACT related imports*/
import React from 'react'
import ReactDOM from 'react-dom'

/* REDUX related imports*/
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import middlewares from './middlewares'

/* Styling and App's React components related imports*/
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import App from './components/App'

/* Creating the REDUX STORE const store */
const store = createStore(rootReducer, middlewares)

/* Loading the <App/> root view-component of the app
* <Provided/> by the {store}
* inside ReactDOM.render() */

ReactDOM.render(
  <Provider store={store}>
	  <App/>
  </Provider>,
document.getElementById('root')
)

