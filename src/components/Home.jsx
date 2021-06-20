import React from 'react'
import { Button } from 'react-bootstrap';

import { NavLink } from 'react-router-dom'
import logo from '../logo.svg';

/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="titleTag">Sahu's The Classic Education</h1>
        <p>Your Love Is My Success</p>
        <NavLink to="/main">
        <Button variant="outline-primary" className="HomeButon">Let's Start</Button>
        </NavLink>
          </header>
    </div>
   )
  }


export default Home

