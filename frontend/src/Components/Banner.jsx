import React from 'react';

import '@/styles/banner.css';

const Banner = ({ images, title }) => {
    return (
        <div className="landscape-container">
            <div className="text-banner">
                <h1>{title}</h1>
            </div>
            <img src={images} alt="bannière" />
        </div>
    );
};

export default Banner;