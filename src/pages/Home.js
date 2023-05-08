import React from 'react';
import { Link } from "react-router-dom";
import CarouselHeader from '../components/CarouselHeader';
import TextBlock from '../components/TextBlock';
import Tile from '../components/Tile';
import Footer from '../components/Footer';
import "./Home.css";

const Home = () => {
    const contactUsBtn = require("../assets/icons/contact-us.svg");
    const interactiveMapBtn = require("../assets/icons/interactive-map.svg");

    return (
        <div class='home'>
            <div className='carousel'>
                <CarouselHeader
                    items = {[
                        {
                            path: 'home-carousel/carousel-1.jpg',
                            alt: 'Portsmouth Square',
                            label: 'Portsmouth Square',
                        },
                        {
                            path: 'home-carousel/carousel-2.jpg',
                            alt: 'International Hotel',
                            label: 'International Hotel',
                        },
                        {
                            path: 'home-carousel/carousel-3.jpg',
                            alt: 'City College of San Francisco – Chinatown',
                            label: 'City College of San Francisco – Chinatown',
                        },
                        {
                            path: 'home-carousel/carousel-4.jpg',
                            alt: '(former) Kubla Khan Nightclub',
                            label: '(former) Kubla Khan Nightclub',
                        },
                        {
                            path: 'home-carousel/carousel-5.jpg',
                            alt: 'Chinese Hospital',
                            label: 'Chinese Hospital',
                        },
                    ]}
                />
            </div>
            <div className='intro'>
                <h1 className='intro-header'>Introduction</h1>
                <p>
                San Francisco’s Chinatown is the oldest Chinatown in North America and one of the largest and most influential ethnic Chinese enclaves outside Asia. With the onset of the California Gold Rush, San Francisco served as the entry point for Chinese migrants, mostly from the Guangdong Province, coming to California in search of fortune.  Beginning in the 1850s, Chinese merchants settled near Portsmouth Square and established shops, restaurants, and other services around Dupont Street (now Grant Avenue) to provision miners heading inland in search of gold and to support the growing Chinese community. With the building of the Transcontinental Railroad, about 15,000 Chinese male workers were brought to California, and when the railroad was completed in 1869, many of these workers found their way to San Francisco as well as other cities where Chinese enclaves had formed. Chinatown expanded to the area bordered by Stockton, Kearney, California, and Broadway streets and became the only geographical space where Chinese were able to inhabit, purchase, and inherit dwellings within the City. Unwelcomed in other parts of the City, Chinatown quickly became the most densely populated area in all of San Francisco. 
                </p>

                <p>
                As a result of rising anti-Chinese violence and widespread anti-Chinese sentiments, several legislations were passed to restrict Chinese immigration. The Page Act of 1875 effectively prohibited the immigration of Chinese women, while the Chinese Exclusion Act of 1882 expanded the prohibition to all Chinese laborers, thereby drastically curtailing Chinese immigration and the social reproduction of Chinese American families.
                </p>

                <p>
                When the Earthquake of 1906 destroyed the older parts of the City, discussions around the relocation of Chinatown emerged. However, the fear of loss of Chinese trade and labor in the City, along with pressures from the Chinese government thwarted these discussions, and Chinese merchants immediately began rebuilding Chinatown, drawing on orientalist motifs to present the grandeur of “Chinese culture” and to appeal to tourism.
                </p>

                <p>
                SF Chinatown endured over the decades, and with the passage of the Immigration and Nationality Act of 1965, Chinatown received a new wave of migrants. At the same time, the youth population became drawn into the Civil Rights movement, the anti-War movement, and the Third World Liberation Front. As Chinese American youth engaged in struggles for housing, healthcare, education, and public space, Chinatown became a critical site of social transformation. A range of organizations were founded to ensure sustained support for the community. And although Chinatown continues to evolve, the legacy of community struggle and activism remains strongly imprinted in its social infrastructure.
                </p>

                <p>
                Without contest, SF Chinatown has been the hub of Asian American activism and civil rights mobilization. It is the cultural-political center where Asian Americans have organized against anti-Asian violence since the Chinese exclusion era; advocated for immigrant access to bilingual education, better housing, and healthcare; and built a social infrastructure to serve its vulnerable populations. In short, this project takes the emblematic site of SF Chinatown to examine the politics of place-making for Asian Americans.
                </p>

                <p>
                This website attempts to capture some of the major themes reflected in the radical histories of San Francisco Chinatown. They include housing, public space, public health, education, and cultural enterprise.
                </p>
            </div>
            <div className='explore-peek'>
                <div className='description'>
                    <TextBlock
                        header="Explore Chinatown"
                        body="Bracketed by the towering Financial District and the wealthy elites of Nob Hill, San Francisco's Chinatown is unique in its merciless compaction of space. Though historical bounded to only seventeen blocks, revisions to racial exclusion laws has allowed for expansion beyond predetermined borders. Explore SF Chinatown and our Sites of Interest through the Interactive Map below."
                    />
                    <div className="explore-button">
                        <Link to="/map">
                            <img className="button-img" src={interactiveMapBtn}></img>
                        </Link>
                    </div>
                </div>
                <div className='image'>
                    <img src={require('../assets/images/Map_preview.gif')}/>
                </div>
            </div>
            <div className='tiles'>
                <Tile
                header="Culture"
                body={[
                    "Grant Ave Follies",
                    "Kearny Street Workshop",
                    "Kubla Khan Nightclub",
                    "Mr. Jiu's / Chop Suey (Food)",
                    "The Forbidden City",
                    "The Golden Dragon Massacre"
                ]}    
                image={{
                    link:"/culture",
                    path:"Card_KublaKhan.jpg",
                    alt:"Arts & culture theme"
                }}
                />
                <Tile
                header="Education"
                body={[
                    "CCSF - Chinatown",
                    "Chinese for Affirmative Action",
                    "Lau v. Nichols",
                    "The Model Minority Myth"
                ]}
                image={{
                    link:"/education",
                    path:"Card_CCSF.jpg",
                    alt:"Education"
                }}
                />
                <Tile
                header="Housing"
                body={[
                    "Housing and Community Organizing in Chinatown Today",
                    "International Hotel",
                    "Mei Lun Yuen",
                    "Ping Yuen",
                    "Reimagining Community Safety"
                ]}                               
                image={{
                    link:"/housing",
                    path:"Card_I-Hotel.jpg",
                    alt:"Housing theme"
                }}
                />
                <Tile
                header="Public Health"
                body={[
                    "Asian Mental Health",
                    "Chinese Hospital",
                    "Traditional Medicine",
                    "Women’s Health"
                ]}                
                image={{
                    link:"/public-health",
                    path:"Card_ChineseHospital.jpg",
                    alt:"Public health"
                }}
                />
                <Tile
                header="Public Space"
                body={[
                    "Alleyways Program",
                    "Portsmouth Square",
                    "Willie Wong Playground",
                    "Woh Hei Yuen Park",
                ]}                    
                image={{
                    link:"/public-space",
                    path:"Card_PortsmouthSquare.jpg",
                    alt:"Public Space theme"
                }}
                />
            </div>
            <div className="contact-us">
                <div className="contact-description">
                    <h5>We'd love to hear your feedback, thoughts, and questions!</h5>
                </div>
                <div className="contact-button">
                    <Link to="/">
                        <img className="button-img" src={contactUsBtn}></img>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home