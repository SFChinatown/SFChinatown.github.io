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
                This project was created through an upper-level Asian American & Asian Diaspora Studies seminar at UC Berkeley, through the collaborative efforts of twenty-two undergraduate students and led by Professor Lok Siu and TA Jessica Jiang. As part of “A Year on Angel Island,” the course was cross-listed under the Humanities and Environmental Design departments, and formed part of a year-long series of programming on the histories and futures of immigration.
                </p>

                <p>
                Students began the course by reading existing scholarship on SF Chinatown’s history, from its origins in the 1850s to its present day, accompanied with class visits and a guided tour of Chinatown from community members. In these first few weeks we collectively brainstormed ideas for how we wanted to organize our project, identifying five broad themes we felt were important to cover in a survey of Chinatown’s history: Public health, education, housing and activism, green space, and cultural enterprise. We identified five locations as “anchoring sites” for the project based on existing connections and availability of archives, with each site corresponding to one of these broad themes. In the following weeks, students broke into small groups according to these themes and dove into independent research in archives and with community members.
                </p>

                <p>
                Platform was an important question that we had many conversations about. We needed a platform that would help readers maintain an awareness of time and space in Chinatown, while also communicating complex webs of relationships between people, places, and politics. After exploring several existing digital humanities platforms, we ultimately settled on the form that you see now, a website and interactive map coded from scratch by students. A small group of students focused on building the website, working closely with the other small groups to develop unique designs for each research theme.
                </p>

                <p>
                While each group of students began their research with their respective anchoring site, we spent the next few weeks building the scope of the research out inductively. As students encountered other places, events, and topics in the course of their research, they produced additional write-ups that helped to fill out each broader theme, as well as the interactive map. The last few weeks of class were spent revising and fine-tuning the write-ups for digital publication.
                </p>

                <p>
                This first iteration of the project only represents the tip of the iceberg that is SF Chinatown’s vibrant history. While future classes will continue working on the site, the design and content of the website you see now is the product of our students’ hard work and diverse skills in research, multimedia journalism, web development, and design. Moreover, this project would not have been possible without the generosity of our community partners, who were eager to encourage our research. Thank you to the many community members across the Bay Area who fielded our emails, hopped on Zoom calls to answer questions, invited us to community events, gave us building tours, and shared their archives and memories with us.
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
                    "Kubla Khan Nightclub"
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