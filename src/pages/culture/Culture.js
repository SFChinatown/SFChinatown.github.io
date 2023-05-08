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
                            path: 'culture-carousel/img1.jpg',
                            alt: 'Grant Ave Follies',
                            label: 'Grant Ave Follies',
                        },
                        {
                            path: 'culture-carousel/img2.png',
                            alt: 'Kearny St Workshop',
                            label: 'Kearny St Workshop',
                        },
                        {
                            path: 'culture-carousel/img3.jpg',
                            alt: 'Kubla Khan Nightclub',
                            label: 'Kubla Khan Nightclub',
                        },
                        {
                            path: 'culture-carousel/img4.png',
                            alt: 'Mr Jiu\'s / Chop Suey (Food)',
                            label: 'Mr Jiu\'s / Chop Suey (Food)',
                        },
                        {
                            path: 'culture-carousel/img5.jpg',
                            alt: 'The Forbidden City',
                            label: 'The Forbidden City',
                        },
                        {
                            path: 'culture-carousel/img6.jpg',
                            alt: 'The Golden Dragon Massacre',
                            label: 'The Golden Dragon Massacre',
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