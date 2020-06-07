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
        <Route path="/events" component={Events}></Route>
        <Route path="/gallery" component={Gallery}></Route>
        <Route path="/clients" component={Clients}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/" exact component={FrontPage}></Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
