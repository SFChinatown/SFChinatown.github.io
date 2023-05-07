import React from 'react';
import Footer from '../../components/Footer';
import "./Housing.css";
import CarouselHeader from '../../components/CarouselHeader';

const Housing = () => {
    return (
        <div class='housing'>
            <div className="carousel">
            <CarouselHeader
                    items = {[
                        {
                            path: 'housing-carousel/image1.png',
                            alt: 'Housing and Community Organizing Today',
                            label: 'Housing and Community Organizing Today',
                        },
                        {
                            path: 'housing-carousel/image2.jpeg',
                            alt: 'International Hotel',
                            label: 'International Hotel',
                        },
                        {
                            path: 'housing-carousel/image3.png',
                            alt: "Mei Lun Yuen",
                            label: "Mei Lun Yuen",
                        },
                        {
                            path: 'housing-carousel/image4.jpg',
                            alt: "Ping Yuen",
                            label: "Ping Yuen",
                        },
                        {
                            path: 'housing-carousel/image5.png',
                            alt: "Reimagining Community Safety",
                            label: "Reimagining Community Safety",
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