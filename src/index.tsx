import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
// import { ConnectedRouter } from 'connected-react-router'
import App from './App';
import { API } from './config';
// import store, {history} from './store/index'
import store from './store/index'
import './style.css'

console.log(API)

ReactDOM.render(
    <Provider store={store}>
        
        {/* <ConnectedRouter history={history}> */}
         <App />
        {/* </ConnectedRouter> */}
        
    </Provider>,
  document.getElementById('root')
);

