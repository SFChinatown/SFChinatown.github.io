import React from 'react';
import Jumbotron from '../components/Jumbotron';
import CarouselHeader from '../components/CarouselHeader';

const Home = () => {
    return (
        <CarouselHeader
            items = {[
                {
                    path: 'test.png',
                    alt: 'First slide',
                    label: 'First slide label',
                    caption: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
                },
                {
                    path: 'test.png',
                    alt: 'Second slide',
                    label: 'Second slide label',
                    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                }
            ]}
        />
    )
}

export default Home