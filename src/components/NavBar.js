import React from "react"
import { Link } from "react-router-dom"
import '../css/NavBar.css'
import {withRouter} from 'react-router-dom'



const NavBar = () => {

  return(
    
<nav class="navbar navbar-expand-lg navbar-light" id="navy">
  <Link to="/"></Link>
  <h4 className="logo">Baller-on-a-Budget</h4>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    <li class="nav-item ">
      <Link to='/' class="nav-link">Mainpage</Link>
      </li>
      <li class="nav-item ">
      <Link to='user-main-page' class="nav-link">My Dashboard</Link>
      </li>
      <li class="nav-item">
      <Link to='all-income' class="nav-link">All-Income</Link>
      </li>
      <li class="nav-item">
      <Link to='all-expenses' class="nav-link">All-Expenses</Link>
      </li>
    </ul>
  </div>
</nav> 
)
}

export default withRouter(NavBar)


