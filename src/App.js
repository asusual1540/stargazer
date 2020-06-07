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
        <Route path="/about">
          <About />
        </Route>
        <Route path="/admin">
          <AdminPanel />
        </Route>
        <Route path="/clients">
          <Clients />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/" >
          <FrontPage />
        </Route>

        <Redirect to="/" />


      </Switch>
      <Footer />
    </div>
  )
}

export default App
