import React from "react"
import { Link } from "react-router-dom"


const NavBar = () => {
  return(
    <nav>
      <Link to="/">Homepage</Link>
      -
      <Link to="/income-page">All Income</Link>
      -
      <Link to="/expenses-page">All Expenses</Link>
    </nav>
  )
}

export default NavBar