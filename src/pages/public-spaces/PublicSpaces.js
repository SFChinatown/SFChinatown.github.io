import React from 'react';
import Footer from '../../components/Footer';
import "./PublicSpaces.css";
import CarouselHeader from '../../components/CarouselHeader';

const PublicSpaces = () => {
    return (
        <div class='public-spaces'>
            <div className="carousel">
            <CarouselHeader
                    items = {[
                        {
                            path: 'public-spaces-carousel/image1.jpeg',
                            alt: 'Portsmouth Square',
                            label: 'Portsmouth Square',
                        },
                        {
                            path: 'public-spaces-carousel/image2.jpg',
                            alt: 'Willy Wong Playground',
                            label: 'Willy Wong Playground',
                        },
                        {
                            path: 'public-spaces-carousel/image3.png',
                            alt: 'Woh Hei Yuen Park',
                            label: 'Woh Hei Yuen Park',
                        },
                    ]}
                />
            </div>
            <div className="public-spaces-overview">
                <h2>Public Spaces</h2>
                <p>
                Ensuring access to open space is essential for any successful city. Parks and plazas serve as important sites for people of all ages to socialize, exercise, and play. This is doubly true for underserved neighborhoods like Chinatown, which has served as a landing pad for multi-generational immigrant families throughout its history. Due to the high cost of living and a lack of economic opportunities, many of these families are forced to live in small, overcrowded spaces. Residents lack space to gather with friends and family. Despite knowing this intense need for open space, it is extremely challenging to address the issue due to the neighborhood’s lack of undeveloped land. As such, Chinatown has the smallest amount of park space per resident of any San Francisco neighborhood. 
                </p>
                <p>
                Over the decades, disinvestment, bulky new construction, and bureaucracy have threatened Chinatown’s limited public spaces. Grassroots advocacy organizations like the Committee for Better Parks and Recreation in Chinatown have fought to preserve the quantity and quality of Chinatown’s public open spaces. Through legal battles, public-nonprofit partnerships, and community-centered design, they have successfully protected and improved the quality of Willie “Woo Woo” Wong Playground and Portsmouth Square. Through political maneuvering and creative designs, they have also expanded Chinatown’s open space portfolio to include the Alleyways Program and the Woh Hei Yuen Park.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default PublicSpaces