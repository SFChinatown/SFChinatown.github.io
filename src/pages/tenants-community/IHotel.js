import React from 'react';
import Footer from '../../components/Footer';
import Tile from '../../components/Tile';
import "./IHotel.css";

const IHotel = () => {
    return (
        <div className="ihotel-page">
            <div className='header'>
                <img src={require('../../assets/images/test.png')}/>
            </div>
            <div className="ihotel-intro">
                <h2>Origins of the International Hotel</h2>
                <p>Originally built in 1854, San Francisco’s International Hotel spanned three locations in its over 150 years of history, and was the site of one of the Asian American Movement’s most iconic struggles in the 1970s. For the first 20 years of its life, the hotel was located on Jackson Street; it moved to 848 Kearny Street in 1873. In 1906, the hotel building was destroyed by a fire. The rebuilt I-Hotel was the focal point of the 1960s and 70s anti-eviction protests<sup>1</sup>. Standing at 3 stories tall, this new I-Hotel contained 184 residential rooms for tenants to live in, with communal kitchens and bathrooms for residents to share. Additional stores and businesses were located on the ground floor of the building.<sup>2</sup></p>
                <img src={require('../../assets/images/ihotel/I-Hotel_1.jpeg')} className="vertical-img"/>
                <br/><br/>
                <p>By 1920, a majority of the I-Hotel’s tenants were Filipino immigrants working in the U.S. as farm workers, maids, sailors, military crew, and other service workers. These workers formed businesses and community organizations to serve hotel tenants and the Manilatown neighborhood more broadly. The ground floor was home to barbershops, billiard halls, retail shops, and eventually community institutions such as the <a href="https://www.kearnystreet.org/">Kearny Street Workshop</a><sup>3</sup> and  Everybody’s Bookstore<sup>4</sup> — the first Asian American bookstore in the U.S., which would later become <a href="https://www.asiabookcenter.com/">Eastwind Books in Berkeley</a>. This vibrant network of shops and organizations helped make the I-Hotel not just a place for people to live, but a home for residents of San Francisco’s Filipino community.<sup>5</sup></p>
                <img src={require('../../assets/images/ihotel/I-Hotel_2.jpg')} className="horizontal-img"/>
                <br/><br/>
                <p>In an oral interview, Jeanette Lazam, an original tenant at the I-Hotel as a young organizer living in Manilatown, described the community as a family. “The minute you walked through the door and walked up the stairs, everybody was hanging out. And they’d say, have you eaten yet? … I believe I had 45 fathers and seven mothers when I lived here.” Despite most of the tenants being older, single men, “You were <it>never</it> alone,” Lazam said.<sup>6</sup></p>
                <p>In 1968, Filipino residents still made up a majority of the I-Hotel residents, with a notable number of Chinese residents living there as well. The residents still worked primarily in the service industry, but also served as political leaders in Manilatown. Most of these residents were elderly, as the I-Hotel was one of few affordable housing options for low-income residents of Manilatown. The I-Hotel maintained its role as a central community space for the San Francisco Filipino community.<sup>7</sup></p>
            </div>
            <div className='ccsf-tiles'>
                <Tile
                header="CAA"
                body={[
                    "Interview"
                ]}
                image={{
                    link:"/education/ccsf-chinatown/caa-interview",
                    path:"test.png",
                    alt:"CAA Interview"
                }}
                />
                <Tile
                header="Lau v Nichols"
                body={[
                    "Write-up"
                ]}                
                image={{
                    link:"/education/ccsf-chinatown/lau-nichols",
                    path:"test.png",
                    alt:"Lau v Nichols"
                }}
                />
                <Tile
                header="Model Minority"
                body={[
                    "Model Minority"
                ]}                               
                image={{
                    link:"/education/ccsf-chinatown/model-minority",
                    path:"test.png",
                    alt:"Model Minority"
                }}
                />
                <Tile
                header="CCSF Amenities & Community"
                body={[
                    "CCSF Amenities",
                    "CCSF Community"
                ]}    
                image={{
                    link:"/education/ccsf-chinatown/amenities",
                    path:"test.png",
                    alt:"Amenities"
                }}
                />
            </div>
            {/* TODO: Figure out cleaner way to do citations, maybe with a component? */}
            <div className="citations">
                <ul>
                    <li>
                        <sup>1</sup>Estella Habal, <it>San Francisco's International Hotel: Mobilizing the Filipino American Community in the Anti-Eviction Movement</it> (Philadelphia: Temple University Press, 2007), 9.
                    </li>
                    <li>
                        <sup>2</sup>Habal, <it>San Francisco’s International Hotel</it>, 11.
                    </li>
                    <li>
                        <sup>3</sup>Ibid
                    </li>
                    <li>
                        <sup>4</sup>Park, Roberta J. 2020. “Sport and Recreation Among Chinese American Communities of the Pacific Coast From Time of Arrival to the “Quiet Decade” of the 1950s.” Journal of Sport History 27 (3): 448.
                    </li>
                    <li>
                        <sup>5</sup>Ibid, 460.
                    </li>
                    <li>
                        <sup>6</sup>Wong, Scott K. 2005. Americans First: Chinese Americans and the Second World War. Cambridge, Massachusetts: Harvard University Press, 21.
                    </li>
                    <li>
                        <sup>7</sup>Ling-chi Wang, L. “‘Not in Your Backyard!’: A Community Struggle for the Rights of Immigrant Adult Education in San Francisco’s Chinatown,” n.d. aapi nexus Vol. 7, No. 2 (Fall 2009), 6.
                    </li>
                    <li>
                        <sup>8</sup>Ibid.
                    </li>
                    <li>
                        <sup>9</sup>Ibid.
                    </li>
                    <li>
                        <sup>10</sup>Ibid, 8-10.
                    </li>
                    <li>
                        <sup>11</sup>Ling-chi Wang, L. “‘Not in Your Backyard!’: A Community Struggle for the Rights of Immigrant Adult Education in San Francisco’s Chinatown,” n.d. aapi nexus Vol. 7, No. 2 (Fall 2009), 5.
                    </li>
                    <li>
                        <sup>12</sup><it>Block by Block: The Struggle to Bring Community College to San Francisco Chinatown</it>. Documentary, 2023.
                    </li>
                    <li>
                        <sup>13</sup>Ling-chi Wang, L. “‘Not in Your Backyard!’: A Community Struggle for the Rights of Immigrant Adult Education in San Francisco’s Chinatown,” n.d. aapi nexus Vol. 7, No. 2 (Fall 2009), 3.
                    </li>
                    <li>
                        <sup>14</sup><it>Block by Block: The Struggle to Bring Community College to San Francisco Chinatown</it>. Documentary, 2023.
                    </li>
                    <li>
                        <sup>15</sup>Ibid.
                    </li>
                    <li>
                        <sup>16</sup>Ibid.
                    </li>
                    <li>
                        <sup>17</sup>Ibid.
                    </li>
                    <li>
                        <sup>18</sup>Ibid.
                    </li>
                    <li>
                        <sup>19</sup>Ibid.
                    </li>
                    <li>
                        <sup>20</sup>Ibid.
                    </li>
                    <li>
                        <sup>21</sup>Ibid.
                    </li>
                    <li>
                        <sup>22</sup>Ibid.
                    </li>
                    <li>
                        <sup>23</sup>Ibid.
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default IHotel