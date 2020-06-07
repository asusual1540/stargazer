import React from 'react'
import { Switch, Route } from "react-router-dom"

import FrontPage from "./components/FrontPage"
import Events from "./components/Events"
import Gallery from "./components/Gallery"
import Clients from "./components/Clients"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

import './App.scss'


function App() {
  return (
    <div className="App">
      <div className="header"></div>
      <Switch>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/clients">
          <Clients />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <FrontPage />
        </Route>
        <Route path="/">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
