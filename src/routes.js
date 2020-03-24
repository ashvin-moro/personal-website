import React from "react"
import { Switch, Route } from "react-router-dom"
import home from "./pages/home/home-container"
import errorPage from "./pages/404error/errorPage"

const routes = [
  {
    page: home,
    path: "/"
  },
]

const Switcher = () => {
  return (
    <Switch>
      {routes.map((page, index) => {
        return (<Route exact key={index} path={page.path} component={page.page}></Route>)
      })}
      <Route component={errorPage}></Route>
    </Switch>
  )
}

export default Switcher
