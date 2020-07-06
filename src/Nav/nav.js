import React from 'react';
import './nav.css'

function Nav() {
    return (
        <nav>
            <div className="nav">
                <div className="logo">
                    <p><img src="./Images/Vector (1).svg"/>rundy</p>
                </div>
                <ul className="nav1">
                    <li>for occassions</li>
                    <li>flowers</li>
                    <li>plant & gift</li>
                </ul>
                <ul className="nav2">
                    <li className="nav2-links"><img src="./Images/Vector (3).svg"/><p>search</p></li>
                    <li className="nav2-links"><img src="./Images/Compound Path.svg"/><p>cart</p></li>
                    <li className="btn-primary nav-btn"><img src="./Images/Vector (2).svg"/>account</li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;
