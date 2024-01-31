import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import '../../../styles/accommodation.css';

import Host from '../../../Components/Host';
import Tag from '../../../Components/Tag';
import Rating from '../../../Components/Rating';
import Carousel from '../../../Components/Carousel';
import Collapse from '../../../Components/Collapse';

import AccommodationsService from '../../../_Service/Accommodations.service';

const AccommodationSheet = () => {

    const [logement, setlogement] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    let { id } = useParams();
    let navigate = useNavigate();

    // Utilisation de useCallback pour éviter de recharger la page à chaque fois que l'on change de logement
    const getInfo = useCallback(async () => {
        await AccommodationsService.GetOneAccomadations(id)
            .then((data) => {
                if (data) {
                    setlogement(data);
                    setIsLoading(false);
                } else {
                    navigate("/404")
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id, navigate]); // On ajoute les dépendances à useCallback 

    useEffect(() => {
        getInfo()
    }, [getInfo]) // On ajoute les dépendances à useEffect


    if (isLoading) return (<h3>Chargement...</h3>)
    return (
        <div className="accommodation-sheet">


            <Carousel images={logement.pictures} />
            <section className="accommodation-sheet-description">
                <div>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    <div className="tag-container">
                        {logement.tags.map((tag, index) => <Tag key={index} tag={tag} />)}
                    </div>
                </div>
                <div className='host-rating'>
                    <Host name={logement.host.name} picture={logement.host.picture} />
                    <Rating rating={logement.rating} />
                </div>
            </section>

            <div className="accommodation-sheet-collapse">
                <Collapse title="Description" content={logement.description} />
                <Collapse title="Equipments" content={
                    <ul>
                        {logement.equipments.map((equipment, index) => <li key={index}>{equipment}</li>)}
                    </ul>
                } />

            </div>
        </div>
    );
};

export default AccommodationSheet;