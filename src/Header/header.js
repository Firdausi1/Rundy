import React from 'react';
import './header.css'

function Header() {
    return (
        <header>
            <div className="header">
                <div className="header-text">
                    <h1>
                        Freshly delivered flowers from local florist
                    </h1>
                    <p>hand picked just for you</p>
                    <div className="btn-primary header-btn"><img src="./Images/Vector.svg"/><a >shop fresh flowers</a></div>
                </div>
                <div className="header-image">
                    <img src="./Images/Group.svg" alt="florist"/>
                </div>
            </div>
        </header>
    )
}

export default Header;
