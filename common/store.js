import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import createReducer from './createReducer'

export function configureStore (initialState) {
  let store = createStore(createReducer, initialState, compose(
    applyMiddleware(
      thunk.withExtraArgument({ axios })
    ),

    process.env.NODE_ENV === 'development' &&
    typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined'
      ? window.devToolsExtension()
      : f => f
  ))

  return store
}

