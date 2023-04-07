import React from 'react';
import { Link } from "react-router-dom";
import TextBlock from '../components/TextBlock';
import Tile from '../components/Tile';
import Footer from '../components/Footer';
import "./Theme.css";

const Theme = () => {
    return (
        <div class='themes'>
            <div className='header'>
                <img src={require('../assets/images/test.png')}/>
            </div>
            <div className='overview'>
                <h1 className='themes-header'>Main Themes</h1>
                <div className='tiles'>
                <Tile
                header="Education"
                body={[
                    "CCSF - Chinatown",
                    "Chinese for Affirmative Action"
                ]}
                image="test.png"
                />
                <Tile
                header="Public Health"
                body={[
                    "Chinese Hospital",
                    "Asian Mental Health",
                    "Traditional Medicine",
                    "Women’s Health"
                ]}                
                image="test.png"
                />
                <Tile
                header="Tenant Rights and Community Organizing"
                body={[
                    "International Hotel",
                    "Ping Yuen",
                    "Mei Lun Yuen",
                    "Housing and Community Organizing in Chinatown Today"
                ]}                               
                image="test.png"
                />
                <Tile
                header="Arts & Culture"
                body={[
                    "Kubla Khan Nightclub"
                ]}    
                image="test.png"
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
                image="test.png"
                />
                <Tile
                header="Location #6"
                body={[]}
                image="test.png"
                />
            </div>
            </div>
            <div className='theme-descriptions'>
                <div className="theme-section odd">
                    <div className='text-image'>
                        <div className='description'>
                            <TextBlock
                                header="Education"
                                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor lacus luctus accumsan tortor posuere ac ut consequat. At consectetur lorem donec massa sapien faucibus et molestie. Ultrices eros in cursus turpis massa. Dolor magna eget est lorem ipsum dolor sit. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Ut sem nulla pharetra diam. Nunc lobortis mattis aliquam faucibus purus. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Ut tortor pretium viverra suspendisse potenti nullam ac. Et netus et malesuada fames ac turpis egestas sed. Platea dictumst quisque sagittis purus sit amet.
                                In dictum non consectetur a erat nam at lectus. Ac tincidunt vitae semper quis. Etiam sit amet nisl purus in mollis. Urna cursus eget nunc scelerisque viverra mauris. Dui accumsan sit amet nulla. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Tellus elementum sagittis vitae et leo duis ut diam. Eu augue ut lectus arcu bibendum at. In tellus integer feugiat scelerisque varius morbi. Nisl rhoncus mattis rhoncus urna neque viverra. Fermentum iaculis eu non diam phasellus vestibulum lorem. Nisl nisi scelerisque eu ultrices. Orci ac auctor augue mauris."
                            />
                        </div>
                        <div className='image'>
                            <img src={require('../assets/images/test.png')}/>
                        </div>
                    </div>
                    <div className="buttons">
                        <Link to="/ccsf-chinatown">
                            <button className="aux-site-btn">
                                CCSF - Chinatown 
                            </button>
                        </Link>
                        <Link to="/cfaa">
                            <button className="aux-site-btn">
                                Chinese for Affirmative Action
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Theme