import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/KasaHeader.png';
import '@/styles/header.css';

const Header = () => {
    return (
        <div className='Header'>
            <header>
                <div className="logo">
                    <Link to="/home">
                        <img src={logo} alt="Kasa Logo" />
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/home">Accueil</Link></li>
                        <li><Link to="/about">À propos</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;