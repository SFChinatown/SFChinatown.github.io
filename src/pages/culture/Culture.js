import React from 'react';
import { Link } from "react-router-dom";
import CarouselHeader from '../../components/CarouselHeader';
import TextBlock from '../../components/TextBlock';
import Footer from '../../components/Footer';
import "./Culture.css";

const Culture = () => {
    return (
        <div class='culture'>
            <div className='carousel'>
                <CarouselHeader
                    items = {[
                        {
                            path: 'home-carousel/carousel-1.jpg',
                            alt: 'First slide',
                            label: 'CBPR',
                            caption: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
                        },
                        {
                            path: 'home-carousel/carousel-2.jpg',
                            alt: 'Second slide',
                            label: 'Second slide label',
                            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        },
                        {
                            path: 'home-carousel/carousel-3.jpg',
                            alt: 'Third slide',
                            label: 'Third slide label',
                            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        },
                        {
                            path: 'home-carousel/carousel-4.jpg',
                            alt: 'Fourth slide',
                            label: 'Fourth slide label',
                            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        },
                        {
                            path: 'home-carousel/carousel-5.jpg',
                            alt: 'Fifth slide',
                            label: 'Fifth slide label',
                            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        },
                    ]}
                />
            </div>
            <div className="culture-overview">
                <h2>Culture</h2>
                <p>From its very formation, San Francisco’s Chinatown has always been a site of community agency and empowerment. Faced with discrimination and prejudice outside the boundaries of Kearny, Powell, California, & Broadway, residents of Chinatown created for themselves a self-sustaining community, with everything from the likes of culturally-appropriate groceries to Chinese theaters and herb shops. Of great significance is Chinatown’s long list of cultural enterprises — with a vibrant history of arts, entertainment, and culture, Chinatown has been home to many notable places and events, like the iconic Golden Age nightclubs Kubla Khan and Forbidden City, the Golden Dragon Massacre, the long-standing community arts institution Kearny St. Workshop, and now, a new generation of high-end restaurants, like the Michelin star-earning Mister Jiu’s. These pieces of history have all been a part of forming the social fabric of Chinatown, and continue to shape Chinese American identities, community, and culture. Groups like the Grant Ave. Follies carry on the legacy of the Golden Age of Chinese Nightclubs, while artistic and cultural hotspots like the Kearny St. Workshop and Mister Jiu’s take charge of what it means to be Asian American. These are only some examples of the ways culture thrives in San Francisco’s Chinatown. Through art, community, and innovation, San Francisco’s Chinatown continues to be a beacon of Chinese diasporic culture in the United States and beyond. </p>
            </div>
            <Footer />
        </div>
    )
}

export default Culture