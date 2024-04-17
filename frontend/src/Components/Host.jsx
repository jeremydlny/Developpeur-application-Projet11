import React from 'react';
import '@/styles/host.css';

const Host = ({ name, picture }) => {
    return (
        <div className="host-accommodation">
            <p>{name}</p>
            <img src={picture} alt={name} />
        </div>
    );
};

export default Host;