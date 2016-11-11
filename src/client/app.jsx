import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { combineReducers } from 'redux-immutable'
import { Provider } from 'react-redux'

const store = createStore(combineReducers({
  // List ../reducers here to create Redux store
}))

ReactDOM.render(
  <Provider store={store}>
    <div>hello, 🌎</div>
  </Provider>
  , document.querySelector('.app')
)
