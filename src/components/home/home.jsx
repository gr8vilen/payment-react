import React from 'react'
import Nav from './nav/nav'
import Page from './page/page'
import A from './payment/a/a'
import B from './payment/b/b'
import About from './about/about'

import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";


function Home() {
  return (

   <Router>
    <Nav/>
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/a" element={<A />} />
      <Route path="/b" element={<B />} />
      <Route path="/about" element={<About />} />


    </Routes>

   </Router>

  )
}

export default Home