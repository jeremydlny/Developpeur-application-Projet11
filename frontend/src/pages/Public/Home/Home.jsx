import React from 'react';

import Banner from '@/Components/Banner';
import Card from '@/Components/Card';

import AccomadationsService from "@/_Service/Accommodations.service";

import banner from '@/assets/Banner.png';

function Home() {
    return (
        <section className='sectionHome'>
            <Banner images={banner} title={"Chez vous, partout et ailleurs"} />
            <ul className="card-container">
                {AccomadationsService.GetAllAccomadations().map((accommodation) => (
                    <Card key={accommodation.id} accommodation={accommodation} />
                ))}
            </ul>
        </section>
    );
}

export default Home;