import React from 'react';
import { Link } from "react-router-dom";
import CarouselHeader from '../components/CarouselHeader';
import TextBlock from '../components/TextBlock';
import Tile from '../components/Tile';
import Footer from '../components/Footer';
import "./Home.css";

const Home = () => {
    return (
        <div class='home'>
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
                        {
                            path: 'home-carousel/carousel-6.jpg',
                            alt: 'Sixth slide',
                            label: 'Sixth slide label',
                            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        },
                        {
                            path: 'home-carousel/carousel-7.jpg',
                            alt: '7 slide',
                            label: '7 slide label',
                            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        },
                        {
                            path: 'home-carousel/carousel-8.jpg',
                            alt: '8 slide',
                            label: '8 slide label',
                            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        },
                        {
                            path: 'home-carousel/carousel-9.png',
                            alt: '9 slide',
                            label: '9 slide label',
                            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        },
                        {
                            path: 'home-carousel/carousel-10.png',
                            alt: '10 slide',
                            label: '10 slide label',
                            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        },
                        {
                            path: 'home-carousel/carousel-11.jpg',
                            alt: '11 slide',
                            label: '11 slide label',
                            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        }
                    ]}
                />
            </div>
            <div className='intro'>
                <h1 className='intro-header'>Introduction</h1>
                <TextBlock 
                    header="Heading #1"
                    body="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
                />
                <TextBlock 
                    header="Heading #2"
                    body="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
                />
            </div>
            <div className='explore-peek'>
                <div className='description'>
                    <TextBlock
                        header="Explore Chinatown"
                        body="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem."
                    />
                    <div className="explore-button">
                        <Link to="/map">
                            <button>
                                Interactive Map 
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='image'>
                    <img src={require('../assets/images/test.png')}/>
                </div>
            </div>
            <div className='tiles'>
                <Tile
                header="Education"
                body={[
                    "CCSF - Chinatown",
                    "Chinese for Affirmative Action"
                ]}
                image={{
                    link:"/education",
                    path:"test.png",
                    alt:"Education"
                }}
                />
                <Tile
                header="Public Health"
                body={[
                    "Chinese Hospital",
                    "Asian Mental Health",
                    "Traditional Medicine",
                    "Women’s Health"
                ]}                
                image={{
                    link:"/public-health",
                    path:"test.png",
                    alt:"Public health"
                }}
                />
                <Tile
                header="Tenant Rights and Community Organizing"
                body={[
                    "International Hotel",
                    "Ping Yuen",
                    "Mei Lun Yuen",
                    "Housing and Community Organizing in Chinatown Today"
                ]}                               
                image={{
                    link:"/tenant-rights-community",
                    path:"test.png",
                    alt:"Tenant Rights and Community Organizing theme"
                }}
                />
                <Tile
                header="Arts & Culture"
                body={[
                    "Kubla Khan Nightclub"
                ]}    
                image={{
                    link:"/arts-culture",
                    path:"test.png",
                    alt:"Arts & culture theme"
                }}
                />
                <Tile
                header="Public Space"
                body={[
                    "Portsmouth Square",
                    "Willie Wong Playground",
                    "St. Mary's Square",
                    "Woh Hei Yuen Park",
                    "Betty Ann Ong Recreation Center"
                ]}                    
                image={{
                    link:"/public-space",
                    path:"test.png",
                    alt:"Public Space theme"
                }}
                />
                <Tile
                header="Location #6"
                body={[]}
                image={{
                    link:"/test-location",
                    path:"test.png",
                    alt:"test"
                }}
                />
            </div>
            <div className="contact-us">
                <div className="contact-description">
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</h5>
                </div>
                <div className="contact-button">
                    <Link to="/">
                        <button>Contact Us</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home