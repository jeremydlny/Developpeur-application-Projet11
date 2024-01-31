import React, { useState } from 'react';
import '../styles/collapse.css';
import ArrowIcon from '../assets/Arrow.svg';


// On déclare un composant qui prend en paramètre un tableau de photos
const Carousel = ({ images }) => {

    const [index, setIndex] = useState(0)

    // On déclare deux fonctions qui permettent de passer à la photo suivante ou précédente
    const nextSlide = () => {
        setIndex((prevIndex) => prevIndex + 1 === images.length ? 0 : prevIndex + 1)
    };

    const prevSlide = () => {
        setIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1)
    };

    console.log(images)
    // On retourne un composant qui affiche la photo courante, les boutons pour passer à la photo suivante ou précédente et le compteur de photos
    return (
        <div className='carousel'>
            <div style={{ backgroundImage: `url(${images[index]})` }} alt={`Slide ${index + 1}`} className="carousel-image" />
            {
                images.length > 1 && (
                    <>
                        <button className='carousel-button carousel-button-left' onClick={prevSlide}>
                            <img src={ArrowIcon} alt="Previous slide" />
                        </button>
                        <button className='carousel-button carousel-button-right' onClick={nextSlide}>
                            <img src={ArrowIcon} alt="Next slide" />
                        </button>
                        <p className='carousel-counter'>{index + 1} / {images.length}</p>
                    </>
                )
            }

        </div>
    );
};

export default Carousel;
