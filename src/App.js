import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom"

import FrontPage from "./components/FrontPage"
import Events from "./components/Events"
import Gallery from "./components/Gallery"
import Clients from "./components/Clients"
import About from "./components/About"
import Contact from "./components/Contact"
import AdminPanel from "./components/AdminPanel"
import Footer from "./components/Footer"

import './App.scss'


function App() {
  return (
    <div className="App">
      <div className="header"></div>
      <Switch>
        <Route path="/stargazer/about">
          <About />
        </Route>
        <Route path="/stargazer/admin">
          <AdminPanel />
        </Route>
        <Route path="/stargazer/clients">
          <Clients />
        </Route>
        <Route path="/stargazer/contact">
          <Contact />
        </Route>
        <Route path="/stargazer/events">
          <Events />
        </Route>
        <Route path="/stargazer/gallery">
          <Gallery />
        </Route>
        <Route path="/stargazer/" >
          <FrontPage />
        </Route>

        <Redirect to="/stargazer/" />


      </Switch>
      <Footer />
    </div>
  )
}

export default App
