import React from 'react'
import { HashRouter, Routes as Switch, Route } from 'react-router-dom'
import Home from './components/core/Home'
import Shop from './components/core/Shop'
import Signup from './components/core/Signup'
import Signin from './components/core/Signin'

const Routes = () => {
  return (
    <HashRouter>
        <Switch>
            <Route path="/home" element={<Home />}/>
            <Route path="/shop" element={<Shop />} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/signup" element={<Signup />} />
        </Switch>
    </HashRouter>
  )
}

export default Routes