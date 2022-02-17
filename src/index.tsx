import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './App';
import { API } from './config';
import store from './store/index'

console.log(API)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

