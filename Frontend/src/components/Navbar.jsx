import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">

      <div className="container">

        <NavLink
          className="navbar-brand"
          to="/"
        >
          Course Manager
        </NavLink>

        <NavLink
          className="btn btn-success"
          to="/add"
        >
          Add Course
        </NavLink>

      </div>

    </nav>
  )
}

export default Navbar