import React from 'react'
import App from '../App'
import { Provider } from 'react-redux'
import Store  from '../store'

const Routes = () =>(
  <Provider store={Store}>
    <App />
  </Provider>
)


export default Routes