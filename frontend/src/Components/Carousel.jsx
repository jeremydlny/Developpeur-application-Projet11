import React, { useState } from 'react';

import ArrowGauche from '@/assets/gauche.png';
import ArrowDroite from '@/assets/droite.png';

import '../styles/carousel.css';

// On déclare un composant qui prend en paramètre un tableau de photos
const Carousel = ({ images }) => {

    const [index, setIndex] = useState(0);
 
    const previousImage = () => {
        setIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1)
    }

    const nextImage = () => {
        setIndex((prevIndex) => prevIndex + 1 === images.length ? 0 : prevIndex + 1)
    }

    return (

        <div className="slideshow">
            {
                images.length > 1 && (
                    <img className="arrowLeft" src={ArrowGauche} alt="flèche gauche" onClick={() => previousImage()} />
                )
            }
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {images.map((image, index) => (
                    <div className="slide" key={index} style={{ background: `no-repeat center/cover url(${image})` }}></div>

                ))}
            </div>
            {
                images.length > 1 && (
                    <>
                        <img className="arrowRight" src={ArrowDroite} alt="flèche droite" onClick={() => nextImage()} />
                        <span className="paging"> {index + 1} / {images.length} </span>
                    </>
                )
            }
        </div>
    );
};

export default Carousel;
