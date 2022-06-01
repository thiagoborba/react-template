import React from 'react'
import {
  BrowserRouter,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { Template } from '../Containers'
import { PAGE } from '../constants'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='*' element={<Template/>}/>
        <Route path={PAGE.TEMPLATE()} element={<Template/>}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes