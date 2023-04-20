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
                    link:"/tenants-community",
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
            </div>
            </div>
            <div className='theme-descriptions'>
                {/* Each section could be a component at some point */}

                {/* Section 1: Education */}
                <div className="theme-section even">
                    <div className='text-image'>
                        <div className='description'>
                            <TextBlock
                                header="Education"
                                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor lacus luctus accumsan tortor posuere ac ut consequat. At consectetur lorem donec massa sapien faucibus et molestie. Ultrices eros in cursus turpis massa. Dolor magna eget est lorem ipsum dolor sit. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Ut sem nulla pharetra diam. Nunc lobortis mattis aliquam faucibus purus. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Ut tortor pretium viverra suspendisse potenti nullam ac. Et netus et malesuada fames ac turpis egestas sed. Platea dictumst quisque sagittis purus sit amet.
                                In dictum non consectetur a erat nam at lectus. Ac tincidunt vitae semper quis. Etiam sit amet nisl purus in mollis. Urna cursus eget nunc scelerisque viverra mauris. Dui accumsan sit amet nulla. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Tellus elementum sagittis vitae et leo duis ut diam. Eu augue ut lectus arcu bibendum at. In tellus integer feugiat scelerisque varius morbi. Nisl rhoncus mattis rhoncus urna neque viverra. Fermentum iaculis eu non diam phasellus vestibulum lorem. Nisl nisi scelerisque eu ultrices. Orci ac auctor augue mauris."
                            />
                            <div className="buttons">
                                <Link to="/education/ccsf-chinatown">
                                    <button className="aux-site-btn">
                                        CCSF - Chinatown 
                                    </button>
                                </Link>
                                <Link to="/education/lau-nichols">
                                    <button className="aux-site-btn">
                                        Lau v Nichols
                                    </button>
                                </Link>
                                <Link to="/education/cfaa">
                                    <button className="aux-site-btn">
                                        Chinese for Affirmative Action
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='image'>
                            <img src={require('../assets/images/test.png')}/>
                        </div>
                    </div>
                </div>

                {/* Section 2: Public Health */}
                <div className="theme-section odd">
                    <div className='text-image'>
                        <div className='image'>
                            <img src={require('../assets/images/test.png')}/>
                        </div>
                        <div className='description'>
                            <TextBlock
                                header="Public Health"
                                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor lacus luctus accumsan tortor posuere ac ut consequat. At consectetur lorem donec massa sapien faucibus et molestie. Ultrices eros in cursus turpis massa. Dolor magna eget est lorem ipsum dolor sit. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Ut sem nulla pharetra diam. Nunc lobortis mattis aliquam faucibus purus. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Ut tortor pretium viverra suspendisse potenti nullam ac. Et netus et malesuada fames ac turpis egestas sed. Platea dictumst quisque sagittis purus sit amet.
                                In dictum non consectetur a erat nam at lectus. Ac tincidunt vitae semper quis. Etiam sit amet nisl purus in mollis. Urna cursus eget nunc scelerisque viverra mauris. Dui accumsan sit amet nulla. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Tellus elementum sagittis vitae et leo duis ut diam. Eu augue ut lectus arcu bibendum at. In tellus integer feugiat scelerisque varius morbi. Nisl rhoncus mattis rhoncus urna neque viverra. Fermentum iaculis eu non diam phasellus vestibulum lorem. Nisl nisi scelerisque eu ultrices. Orci ac auctor augue mauris."
                            />
                            <div className="buttons">
                                <Link to="/chinese-hospital">
                                    <button className="aux-site-btn">
                                        Chinese Hospital
                                    </button>
                                </Link>
                                <Link to="/asian-mental-health">
                                    <button className="aux-site-btn">
                                        Asian Mental Health
                                    </button>
                                </Link>
                                <Link to="/traditional-medicine">
                                    <button className="aux-site-btn">
                                        Traditional Medicine
                                    </button>
                                </Link>
                                <Link to="/womens-health">
                                    <button className="aux-site-btn">
                                        Women's Health
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3: Tenants Rights and Community Organizing */}
                <div className="theme-section even">
                    <div className='text-image'>
                        <div className='description'>
                            <TextBlock
                                header="Tenants Rights and Community Organizing"
                                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor lacus luctus accumsan tortor posuere ac ut consequat. At consectetur lorem donec massa sapien faucibus et molestie. Ultrices eros in cursus turpis massa. Dolor magna eget est lorem ipsum dolor sit. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Ut sem nulla pharetra diam. Nunc lobortis mattis aliquam faucibus purus. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Ut tortor pretium viverra suspendisse potenti nullam ac. Et netus et malesuada fames ac turpis egestas sed. Platea dictumst quisque sagittis purus sit amet.
                                In dictum non consectetur a erat nam at lectus. Ac tincidunt vitae semper quis. Etiam sit amet nisl purus in mollis. Urna cursus eget nunc scelerisque viverra mauris. Dui accumsan sit amet nulla. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Tellus elementum sagittis vitae et leo duis ut diam. Eu augue ut lectus arcu bibendum at. In tellus integer feugiat scelerisque varius morbi. Nisl rhoncus mattis rhoncus urna neque viverra. Fermentum iaculis eu non diam phasellus vestibulum lorem. Nisl nisi scelerisque eu ultrices. Orci ac auctor augue mauris."
                            />
                            <div className="buttons">
                                <Link to="/i-hotel">
                                    <button className="aux-site-btn">
                                        International Hotel
                                    </button>
                                </Link>
                                <Link to="/ping-yuen">
                                    <button className="aux-site-btn">
                                        Ping Yuen
                                    </button>
                                </Link>
                                <Link to="/mei-lun-yuen">
                                    <button className="aux-site-btn">
                                        Mei Lun Yuen
                                    </button>
                                </Link>
                                <Link to="/housing-community-today">
                                    <button className="aux-site-btn">
                                        Housing and Community Organizing in Chinatown Today
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='image'>
                            <img src={require('../assets/images/test.png')}/>
                        </div>
                    </div>
                </div>

                {/* Section 4: Arts & Culture */}
                <div className="theme-section odd">
                    <div className='text-image'>
                        <div className='image'>
                            <img src={require('../assets/images/test.png')}/>
                        </div>
                        <div className='description'>
                            <TextBlock
                                header="Arts & Culture"
                                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor lacus luctus accumsan tortor posuere ac ut consequat. At consectetur lorem donec massa sapien faucibus et molestie. Ultrices eros in cursus turpis massa. Dolor magna eget est lorem ipsum dolor sit. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Ut sem nulla pharetra diam. Nunc lobortis mattis aliquam faucibus purus. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Ut tortor pretium viverra suspendisse potenti nullam ac. Et netus et malesuada fames ac turpis egestas sed. Platea dictumst quisque sagittis purus sit amet.
                                In dictum non consectetur a erat nam at lectus. Ac tincidunt vitae semper quis. Etiam sit amet nisl purus in mollis. Urna cursus eget nunc scelerisque viverra mauris. Dui accumsan sit amet nulla. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Tellus elementum sagittis vitae et leo duis ut diam. Eu augue ut lectus arcu bibendum at. In tellus integer feugiat scelerisque varius morbi. Nisl rhoncus mattis rhoncus urna neque viverra. Fermentum iaculis eu non diam phasellus vestibulum lorem. Nisl nisi scelerisque eu ultrices. Orci ac auctor augue mauris."
                            />
                            <div className="buttons">
                                <Link to="/kubla-khan-nightclub">
                                    <button className="aux-site-btn">
                                        Kubla Khan Nightclub
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 5: Public Space */}
                <div className="theme-section even">
                    <div className='text-image'>
                        <div className='description'>
                            <TextBlock
                                header="Public Space"
                                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor lacus luctus accumsan tortor posuere ac ut consequat. At consectetur lorem donec massa sapien faucibus et molestie. Ultrices eros in cursus turpis massa. Dolor magna eget est lorem ipsum dolor sit. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Ut sem nulla pharetra diam. Nunc lobortis mattis aliquam faucibus purus. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Ut tortor pretium viverra suspendisse potenti nullam ac. Et netus et malesuada fames ac turpis egestas sed. Platea dictumst quisque sagittis purus sit amet.
                                In dictum non consectetur a erat nam at lectus. Ac tincidunt vitae semper quis. Etiam sit amet nisl purus in mollis. Urna cursus eget nunc scelerisque viverra mauris. Dui accumsan sit amet nulla. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Tellus elementum sagittis vitae et leo duis ut diam. Eu augue ut lectus arcu bibendum at. In tellus integer feugiat scelerisque varius morbi. Nisl rhoncus mattis rhoncus urna neque viverra. Fermentum iaculis eu non diam phasellus vestibulum lorem. Nisl nisi scelerisque eu ultrices. Orci ac auctor augue mauris."
                            />
                            <div className="buttons">
                                <Link to="/portsmouth-square">
                                    <button className="aux-site-btn">
                                        Portsmouth Square
                                    </button>
                                </Link>
                                <Link to="/willie-wong-playground">
                                    <button className="aux-site-btn">
                                        Willie Wong Playground
                                    </button>
                                </Link>
                                <Link to="/st-marys-square">
                                    <button className="aux-site-btn">
                                        St. Mary's Square
                                    </button>
                                </Link>
                                <Link to="/woh-hei-yuen-park">
                                    <button className="aux-site-btn">
                                        Woh Hei Yuen Park
                                    </button>
                                </Link>
                                <Link to="/betty-ann-ong-rec-center">
                                    <button className="aux-site-btn">
                                        Betty Ann Ong Recreation Center
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='image'>
                            <img src={require('../assets/images/test.png')}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Theme