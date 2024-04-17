import React from 'react';
import { NavLink } from 'react-router-dom';

import '@/styles/error.css';

const Error = () => {
    return (
        <section className='sectionError'>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <NavLink to="/" className="lien-404">Retourner sur la page d’accueil</NavLink>
        </section>
    );
};

export default Error;