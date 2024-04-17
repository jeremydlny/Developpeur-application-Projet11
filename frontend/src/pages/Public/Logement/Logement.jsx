import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import '@/styles/accommodation.css';

import Host from '@/Components/Host';
import Tag from '@/Components/Tag';
import Rating from '@/Components/Rating';
import Carousel from '@/Components/Carousel';
import Collapse from '@/Components/Collapse';

import AccommodationsService from '@/_Service/Accommodations.service';

const AccommodationSheet = () => {

    const [logement, setlogement] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => { // On récupère les données du logement en fonction de l'id
        const getInfo = async () => {
            await AccommodationsService.GetOneAccomadations(id)
                .then((data) => {
                    if (data) { // Si les données existent on les stocke dans le state logement et on passe isLoading à false
                        setlogement(data);
                        setIsLoading(false);
                    } else {
                        navigate("/404") // Sinon on redirige vers la page 404
                    }
            })
            .catch((error) => { // En cas d'erreur on affiche l'erreur dans la console
                console.log(error)
            })
        } 
        
        // Appel de la fonction getInfo
        getInfo()
    }, [id, navigate]) // Ajout de id et navigate dans les dépendances

    if (isLoading) return (<h3>Chargement...</h3>)
    return (
        <div className="accommodation-sheet">

            <Carousel images={logement.pictures} />
            <section className="accommodation-sheet-description">
                <div>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    <ul className="tag-container">
                        {logement.tags.map((tag, index) => <Tag key={index} tag={tag} />)}
                    </ul>
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