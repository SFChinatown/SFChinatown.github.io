import React from 'react';
import Footer from '../../components/Footer';
import "./PublicHealth.css";
import CarouselHeader from '../../components/CarouselHeader';

const PublicHealth = () => {
    return (
        <div class='public-health'>
            <div className="carousel">
            <CarouselHeader
                    items = {[
                        {
                            path: 'public-health-carousel/image1.jpg',
                            alt: 'Chinese Hospital',
                            label: 'Chinese Hospital',
                        },
                        {
                            path: 'public-health-carousel/image2.png',
                            alt: 'Traditional Medicine',
                            label: 'Traditional Medicine',
                        },
                        {
                            path: 'public-health-carousel/image3.png',
                            alt: "Women's Health",
                            label: "Women's Health",
                        },
                    ]}
                />
            </div>
            <div className="public-health-overview">
                <h2>Public Health</h2>
                <p>Healthcare in San Francisco Chinatown is a complex and interweaving issue, spanning from historical barriers in Chinese-American’s experience to access, the racialisation of disease, to recent concerns such as COVID-19 and the provision of mental health services. </p>
                <p>At the heart of this topic is the San Francisco Chinese Hospital, a community owned non-profit hospital founded in 1925 to provide much-needed medical care to a population that was historically excluded from Western medical institutions.</p>
                <p>In taking a snapshot at community healthcare, physicians and healthcare providers face challenges with linguistic differences and relationships with Traditional Chinese Medicine. The backdrop suits power dynamics, racial prejudices, and cultural transformations that continue to impact Chinese-Americans in San Francisco's accessibility to healthcare.</p>
            </div>
            <Footer />
        </div>
    )
}

export default PublicHealth
