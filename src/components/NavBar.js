import React from "react"
import { Link } from "react-router-dom"


const NavBar = () => {
  return(
    <nav>
      <Link to="/">Homepage</Link>
      -
      <Link to="/all-income">All Income</Link>
      -
      <Link to="all-expenses">All Expenses</Link>
    </nav>
  )
}

export default NavBar