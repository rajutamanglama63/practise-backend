import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="container">
                    <div className="nav_content">
                        <Link to='/'>
                            <h1>Books</h1>
                        </Link>
                        <div className="right_section">
                            <h3>Hello User</h3>
                            <span className="logout">(LOGOUT)</span>
                            <Link to='/cart'>
                                <p>Cart<span className="qty">1</span></p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
