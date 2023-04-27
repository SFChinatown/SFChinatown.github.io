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
                header="Housing"
                body={[
                    "International Hotel",
                    "Ping Yuen",
                    "Mei Lun Yuen",
                    "Housing and Community Organizing in Chinatown Today"
                ]}                               
                image={{
                    link:"/tenants-community",
                    path:"test.png",
                    alt:"Housing theme"
                }}
                />
                <Tile
                header="Arts & Culture"
                body={[
                    "Kubla Khan Nightclub"
                ]}    
                image={{
                    link:"/culture",
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

                {/* Section 3: Housing*/}
                <div className="theme-section even">
                    <div className='text-image'>
                        <div className='description'>
                            <TextBlock
                                header="Housing"
                                body="Since its inception in the nineteenth century, San Francisco Chinatown was birthed as a result of segregationist policies and racist sentiments that made it difficult for Chinese people to live anywhere else in the city. As a result, SF Chinatown became one of the most densely populated neighborhoods in the country, as well as a bastion of affordable housing for low-income immigrants in an increasingly expensive city. From the 1930s to the present, Chinatown community members have taken it upon themselves to fight against the state for more affordable housing in their neighborhood. This has resulted in a long tradition of organizing that traces from the International Hotel in Manilatown, to Ping Yuen and Mei Lun Yuen, to the continued threat of gentrification to Chinatown today. This fight offers lasting lessons in community organizing and resilience in the face of capitalist interests, not just to preserve access to affordable housing, but to defend the place Chinatown residents call home.                                "
                            />
                            <div className="buttons">
                                <Link to="/housing/i-hotel">
                                    <button className="aux-site-btn">
                                        International Hotel
                                    </button>
                                </Link>
                                <Link to="/housing/ping-yuen">
                                    <button className="aux-site-btn">
                                        Ping Yuen
                                    </button>
                                </Link>
                                <Link to="/housing/mei-lun-yuen">
                                    <button className="aux-site-btn">
                                        Mei Lun Yuen
                                    </button>
                                </Link>
                                <Link to="/housing/housing-community-today">
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
                                body="From its very formation, San Francisco’s Chinatown has always been a site of community agency and empowerment. Faced with discrimination and prejudice outside the boundaries of Kearny, Powell, California, & Broadway, residents of Chinatown created for themselves a self-sustaining community, with everything from the likes of culturally-appropriate groceries to Chinese theaters and herb shops. Of great significance is Chinatown’s long list of cultural enterprises — with a vibrant history of arts, entertainment, and culture, Chinatown has been home to many notable places and events, like the iconic Golden Age nightclubs Kubla Khan and Forbidden City, the Golden Dragon Massacre, the long-standing community arts institution Kearny St. Workshop, and now, a new generation of high-end restaurants, like the Michelin star-earning Mister Jiu’s. These pieces of history have all been a part of forming the social fabric of Chinatown, and continue to shape Chinese American identities, community, and culture. Groups like the Grant Ave. Follies carry on the legacy of the Golden Age of Chinese Nightclubs, while artistic and cultural hotspots like the Kearny St. Workshop and Mister Jiu’s take charge of what it means to be Asian American. These are only some examples of the ways culture thrives in San Francisco’s Chinatown. Through art, community, and innovation, San Francisco’s Chinatown continues to be a beacon of Chinese diasporic culture in the United States and beyond."
                            />
                            <div className="buttons">
                                <Link to="/culture/kubla-khan-nightclub">
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
                                <Link to="/public-space/portsmouth-square">
                                    <button className="aux-site-btn">
                                        Portsmouth Square
                                    </button>
                                </Link>
                                <Link to="/public-space/willie-wong-playground">
                                    <button className="aux-site-btn">
                                        Willie Wong Playground
                                    </button>
                                </Link>
                                <Link to="/public-space/st-marys-square">
                                    <button className="aux-site-btn">
                                        St. Mary's Square
                                    </button>
                                </Link>
                                <Link to="/public-space/woh-hei-yuen-park">
                                    <button className="aux-site-btn">
                                        Woh Hei Yuen Park
                                    </button>
                                </Link>
                                <Link to="/public-space/betty-ann-ong-rec-center">
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