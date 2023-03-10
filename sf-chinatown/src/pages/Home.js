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
                    <Link to="/map"><button>
                        Interactive Map 
                    </button>
                    </Link>
                </div>
                <div className='image'>
                    <img src={require('../assets/images/test.png')}/>
                </div>
            </div>
            <div className='tiles'>
                <Tile
                header="CCSF -- North Beach"
                body="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. "
                image="test.png"
                />
                <Tile
                header="Chinese Hospital"
                body="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. "
                image="test.png"
                />
                <Tile
                header="International Hotel"
                body="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. "
                image="test.png"
                />
                <Tile
                header="Kubla Khan Nightclub"
                body="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. "
                image="test.png"
                />
                <Tile
                header="Portsmouth Square"
                body="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. "
                image="test.png"
                />
                <Tile
                header="Location #6"
                body="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. "
                image="test.png"
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