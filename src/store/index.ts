import { applyMiddleware, createStore, compose } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import createRootReducer from "./reducers"

export const history = createBrowserHistory()

const store = createStore(
    createRootReducer(history), 
    compose(
        applyMiddleware(
            routerMiddleware(history)
        ),
    )
)

export default store