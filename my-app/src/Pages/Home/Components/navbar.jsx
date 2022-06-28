import React from 'react';
import logo from '../../../images/Group1.png';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="nav_bar">
            <div className="nav_h">
                <img src={logo} alt="Logo"/>
                <h2>INVOS</h2>
            </div>

            <div className="nav_menu">
                <p><Link to="/" className="nav_p">Home</Link></p>
                <p><Link to="/Dashboard" className="nav_p">Dashboard</Link></p>
                <p><Link to="/Contact" className="nav_p">Contact</Link></p>
                <button className="nav_b">Login</button>
            </div> 
        </div>
    )
}
