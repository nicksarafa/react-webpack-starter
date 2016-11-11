import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { combineReducers } from 'redux-immutable'
import { Provider } from 'react-redux'

import Button from './components/button'

const store = createStore(combineReducers({
  // List ../reducers here to create Redux store
}))

ReactDOM.render(
  <Provider store={store}>
    <div>
      <div>hello, 🌎</div>
      <Button />
    </div>
  </Provider>
  , document.querySelector('.app')
)
