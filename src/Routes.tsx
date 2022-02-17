import React from 'react'
import { HashRouter, Routes as Switch, Route } from 'react-router-dom'
import Home from './components/core/Home'
import Shop from './components/core/Shop'

const Routes = () => {
  return (
    <HashRouter>
        <Switch>
            <Route path="/home" element={<Home />}/>
            <Route path="/shop" element={<Shop />} />
        </Switch>
    </HashRouter>
  )
}

export default Routes