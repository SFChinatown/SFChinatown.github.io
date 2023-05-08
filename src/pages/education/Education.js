import React from 'react';
import Footer from '../../components/Footer';
import "./Education.css";
import CarouselHeader from '../../components/CarouselHeader';

const Education = () => {
    return (
        <div class='education'>
            <div className="carousel">
            <CarouselHeader
                    items = {[
                        {
                            path: 'education-carousel/image1.jpg',
                            alt: 'CCSF',
                            label: 'CCSF',
                        },
                        {
                            path: 'education-carousel/image2.jpg',
                            alt: 'CFAA',
                            label: 'CFAA',
                        },
                        {
                            path: 'education-carousel/image3.jpeg',
                            alt: "CCSF Campus",
                            label: "CCSF Campus",
                        },
                        {
                            path: 'education-carousel/image4.jpeg',
                            alt: "CCSF Community",
                            label: "CCSF Community",
                        },
                    ]}
                />
            </div>
            <div className="education-overview">
                <h2>Education</h2>
                <p>Access to education not only serves as a chance at a better life, but is also key to integrating with the larger community. However, formal education has always been a struggle for San Francisco's Chinatown. Segregationist laws, inadequate resources, and lack of bilingual education had created systemic and self-perpetuating oppression for recently arrived immigrants. Without the ability to learn English, many could never confidently leave the boundaries of Chinatown–severing what little chance they had at better-paying jobs downtown as well as the possibility of integrating with the larger SF community.</p>
                <p>Though many generations have passed and racially segregated education has collapsed, the dedication to bilingual education remains–not only as a resource to those who have recently arrived, but also as a symbol of Chinatown's resilience. Whether committing to broader representation or establishing more learning opportunities, educational issues have persisted at the forefront of Chinatown's politics. Education in Chinatown continues to empower immigrants and nurture their voice, building opportunity and a better San Francisco.</p>
            </div>
            <Footer />
        </div>
    )
}

export default Education