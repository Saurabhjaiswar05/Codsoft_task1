import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
     
  return (
    <section id='top'>
        <div className="container">
    <nav className="navbar">
        <h1>Saurabh</h1>
        <div className="menu">
            <ul>
                <li><Link className='active'  to="/">Home</Link></li>
                <li><Link className='active'  to="/about">About</Link></li>
                <li><Link className='active'  to="/projects">Projects</Link></li>
                <li><Link className='active'  to="/contact">Contact</Link></li>
            </ul>
        </div>
    </nav>
    </div>
    </section>
  )
}

export default Navbar
