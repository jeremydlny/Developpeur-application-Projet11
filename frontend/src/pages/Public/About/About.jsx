import React from 'react';

import Banner from '@/Components/Banner';
import Collapse from '@/Components/Collapse';

import bannerimg from '@/assets/Banner.png';

import aboutinfo from "@/Data/aboutinfo.json";

function About() {

    return (
        <section className='sectionAbout'>
            <Banner images={bannerimg} title={""} />

            <ul className='listeabout'>
                {aboutinfo.map((item, index) =>
                    <Collapse key={index} title={item.title} text={item.text} />
                )
                }
            </ul>

        </section>
    )

}

export default About;