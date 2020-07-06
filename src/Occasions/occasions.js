import React from 'react';
import './occasions.css'

function Uses() {
    return (
        <section className="occasion">
            <div className="occasion-body">
                <div className="occasion-box home">
                    <div className="occasion-text">
                        <h2>Home Decoration</h2>
                        <p>Freshly picked flowers for your personal use</p>
                    </div>
                    <div className="occasion-image"> 
                        <div><img src="./Images/Group (1).svg"/></div>
                        <a className="btn-secondary">view</a>
                    </div>
                </div>
                <div className="occasion-box work-space">
                    <div className="occasion-text">
                        <h2>Work Space Decoration</h2>
                        <p>Freshly picked flowers for your personal use</p>
                    </div>
                    <div className="occasion-image"> 
                        <div><img src="./Images/Group (1).svg"/></div>
                        <a className="btn-secondary">view</a>
                    </div>
                </div>
                <div className="occasion-box gift">
                    <div className="occasion-text">
                        <h2>Occasions & Gifts</h2>
                        <p>Freshly picked flowers for your personal use</p>
                    </div>
                    <div className="occasion-image"> 
                        <div><img src="./Images/Group (1).svg"/></div>
                        <a className="btn-secondary">view</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Uses;
