import React from 'react';
// import logo from '../../Logo_Game_of_Thrones.png';
import './navbar.scss';

export default function Navbar(){
    return(
        <nav className="navbar">
            <h1>Game of Thrones</h1>
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link active">
                        Houses
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link">
                        Characters
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link">
                        Kingdoms
                    </a>
                </li>
            </ul>
        </nav>
    )
}