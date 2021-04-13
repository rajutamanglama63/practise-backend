import React from 'react'
import {Link} from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
        <div className="container">
            <div className="home_screen">
                <div className="side_bar">
                    <ul>
                        <li><Link to="/psy">Psychology</Link></li>
                        <li><Link to="/scifi">Sci-fi</Link></li>
                        <li><Link to="/research">Research</Link></li>
                        <li><Link to="/phil">Philoshopy</Link></li>
                        <li><Link to="/history">History</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Sidebar
