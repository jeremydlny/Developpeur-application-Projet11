import React from 'react';
import { Link } from 'react-router-dom';
import '@/styles/card.css';

const Card = ({ accommodation }) => {
    const { id, title, cover } = accommodation;

    return (
        <li className="cards-background">
            <Link to={`/accommodation-sheet/${id}`}>
                <img src={cover} alt={title} />
                <p>{title}</p>
            </Link>
        </li>
    );
};

export default Card;