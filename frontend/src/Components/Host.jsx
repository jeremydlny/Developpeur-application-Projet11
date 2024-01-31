import React from 'react';

const Host = ({ name, picture }) => {
    return (
        <div className="host-accommodation">
            <p>{name}</p>
            <img src={picture} alt={name} />
        </div>
    );
};

export default Host;