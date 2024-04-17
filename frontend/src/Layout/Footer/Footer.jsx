import React from 'react';
import logo from '@/assets/KasaFooter.png';
import '@/styles/footer.css';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="logo-Footer">
                    <img src={logo} alt="Kasa Logo" />
                </div>
                <div className="text-Footer">
                    <p> © 2020 Kasa. All rights reserved </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;