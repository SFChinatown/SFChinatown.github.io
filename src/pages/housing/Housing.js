import React from 'react';
import { Link } from "react-router-dom";
import CarouselHeader from '../../components/CarouselHeader';
import TextBlock from '../../components/TextBlock';
import Footer from '../../components/Footer';
import "./Housing.css";

const Housing = () => {
    return (
        <div class='housing'>
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
            <div className="housing-overview">
                <h2>Housing</h2>
                <p>Since its inception in the nineteenth century, San Francisco Chinatown was birthed as a result of segregationist policies and racist sentiments that made it difficult for Chinese people to live anywhere else in the city. As a result, SF Chinatown became one of the most densely populated neighborhoods in the country, as well as a bastion of affordable housing for low-income immigrants in an increasingly expensive city. From the 1930s to the present, Chinatown community members have taken it upon themselves to fight against the state for more affordable housing in their neighborhood. This has resulted in a long tradition of organizing that traces from the International Hotel in Manilatown, to Ping Yuen and Mei Lun Yuen, to the continued threat of gentrification to Chinatown today. This fight offers lasting lessons in community organizing and resilience in the face of capitalist interests, not just to preserve access to affordable housing, but to defend the place Chinatown residents call home.</p>
            </div>
            <Footer />
        </div>
    )
}

export default Housing