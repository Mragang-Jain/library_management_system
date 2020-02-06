/**
* middlewares - logger
*/
import logger from './logger'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'

export default applyMiddleware(
  thunk, // will always be the first middleware
  logger, // will always be the last middleware, just before the Action hits the Reducer
) 

