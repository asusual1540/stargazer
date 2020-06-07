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
        <Route path="/events" component={Events} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/clients" component={Clients} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={FrontPage} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
