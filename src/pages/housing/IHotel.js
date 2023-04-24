import React from 'react';
import Footer from '../../components/Footer';
import CarouselHeader from '../../components/CarouselHeader'
import "./IHotel.css";
import "../PageStyle.css";

const IHotel = () => {
    return (
        <div className="ihotel-page">
            <div className="carousel">
            <CarouselHeader
                    items = {[
                        {
                            path: 'ihotel-carousel/carousel-1.jpeg',
                            alt: 'First slide',
                            label: 'An I-Hotel Tenant Association newspaper',
                            caption: 'Paunawa Newspaper, October 1970, AAS ARC 2019/2, box 1, folder 2, Save the International Hotel Records, Ethnic Studies Library, UC Berkeley.'
                        },
                        {
                            path: 'ihotel-carousel/carousel-2.jpeg',
                            alt: 'Second slide',
                            label: 'A victory song, with lyrics in 3 languages to reflect the Filipino, American, and Chinese participants in the anti-eviction struggle.',
                            caption: 'Victory song, n.d., AAS ARC 2019/2, box 1, folder 10, Save the International Hotel Records, Ethnic Studies Library, UC Berkeley.                            '
                        },
                        {
                            path: 'ihotel-carousel/carousel-3.png',
                            alt: 'Third slide',
                            label: 'A cartoon in an I-Hotel Tenant Association newspaper.',
                            caption: 'Paunawa Newspaper, n.d., AAS ARC 2019/2, box 1, folder 2, Save the International Hotel Records, Ethnic Studies Library, UC Berkeley.'
                        },
                        {
                            path: 'ihotel-carousel/carousel-4.png',
                            alt: 'Fourth slide',
                            label: 'An I-Hotel Tenant Association newsletter.',
                            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        },
                        {
                            path: 'ihotel-carousel/carousel-5.jpeg',
                            alt: 'Fifth slide',
                            label: 'The front page of an 1972 issue of Kalayaan, the KDP newspaper.',
                            caption: 'Kalayaan Front Page, February-March 1972, Kalayaan, vol 1, no. 6 page 1, Ethnic Studies Library, UC Berkeley.'
                        },
                        {
                            path: 'ihotel-carousel/carousel-6.jpeg',
                            alt: 'Sixth slide',
                            label: 'A page in a 1972 issue of Kalayaan, the KDP newspaper.',
                            caption: 'Kalayaan page, February-March 1972, Kalayaan, vol 1, no. 6 page 13, Ethnic Studies Library, UC Berkeley.'
                        },
                        {
                            path: 'ihotel-carousel/carousel-7.png',
                            alt: '7 slide',
                            label: 'A sign at the Manilatown Heritage Foundation, with the names of each original I-Hotel tenant that was evicted in 1977.',
                            caption: 'Vivian Kuang, personal photo, March 25, 2023.'
                        },
                        {
                            path: 'ihotel-carousel/carousel-8.JPG',
                            alt: '8 slide',
                            label: 'A replica of what an average I-Hotel unit would have looked like, on display at the Manilatown Heritage Foundation. An average unit was 7 by 10 feet – ironically, smaller than a parking space.',
                            caption: ' Maddi Wong, personal photo, March 26, 2023.'
                        },
                    ]}
                />
            </div>
            <div className="ihotel-intro">
                <h2>Origins of the International Hotel</h2>
                <p>Originally built in 1854, San Francisco’s International Hotel spanned three locations in its over 150 years of history, and was the site of one of the Asian American Movement’s most iconic struggles in the 1970s. For the first 20 years of its life, the hotel was located on Jackson Street; it moved to 848 Kearny Street in 1873. In 1906, the hotel building was destroyed by a fire. The rebuilt I-Hotel was the focal point of the 1960s and 70s anti-eviction protests<sup>1</sup>. Standing at 3 stories tall, this new I-Hotel contained 184 residential rooms for tenants to live in, with communal kitchens and bathrooms for residents to share. Additional stores and businesses were located on the ground floor of the building.<sup>2</sup></p>
                <div className="imgText">
                    <figure>
                        <img src={require('../../assets/images/ihotel/I-Hotel_1.jpeg')} className="vertical-img-taller"/>
                        <figcaption>
                            The International Hotel before its demolition, with the newly built Holiday Inn in the background. 
                            <br/>
                            Citation: Photograph of the I-Hotel, n.d., AAS ARC 2019/2, box 1, folder 2, Save the International Hotel Records, Ethnic Studies Library, UC Berkeley.
                        </figcaption>
                    </figure>
                </div>
                <br/>
                <p>By 1920, a majority of the I-Hotel’s tenants were Filipino immigrants working in the U.S. as farm workers, maids, sailors, military crew, and other service workers. These workers formed businesses and community organizations to serve hotel tenants and the Manilatown neighborhood more broadly. The ground floor was home to barbershops, billiard halls, retail shops, and eventually community institutions such as the <a href="https://www.kearnystreet.org/">Kearny Street Workshop</a><sup>3</sup> and  Everybody’s Bookstore<sup>4</sup> — the first Asian American bookstore in the U.S., which would later become <a href="https://www.asiabookcenter.com/">Eastwind Books in Berkeley</a>. This vibrant network of shops and organizations helped make the I-Hotel not just a place for people to live, but a home for residents of San Francisco’s Filipino community.<sup>5</sup></p>
                <div className="imgText">
                    <figure>
                        <img src={require('../../assets/images/ihotel/I-Hotel_2.jpg')} className="horizontal-img"/>
                        <figcaption>
                            Everybody's Bookstore in 1972.
                            <br/>Citation: Steve Louie, Wei Min She and Asian Community Center Photographs, 1970-1980, AAS ARC 2015/3, Ethnic Studies Library, UC Berkeley.
                        </figcaption>
                    </figure>
                </div>
                <br/>
                <p>In an oral interview, Jeanette Lazam, an original tenant at the I-Hotel as a young organizer living in Manilatown, described the community as a family. “The minute you walked through the door and walked up the stairs, everybody was hanging out. And they’d say, have you eaten yet? … I believe I had 45 fathers and seven mothers when I lived here.” Despite most of the tenants being older, single men, “You were <it>never</it> alone,” Lazam said.<sup>6</sup></p>
                <p>In 1968, Filipino residents still made up a majority of the I-Hotel residents, with a notable number of Chinese residents living there as well. The residents still worked primarily in the service industry, but also served as political leaders in Manilatown. Most of these residents were elderly, as the I-Hotel was one of few affordable housing options for low-income residents of Manilatown. The I-Hotel maintained its role as a central community space for the San Francisco Filipino community.<sup>7</sup></p>
            
                <br/>
                <h3>The Fight to Save the I-Hotel</h3>
                <p>  The threat of eviction for the International Hotel’s elderly Filipino residents began in late 1968. The I-Hotel was owned by managing corporation Milton Meyer and Company, whose President and Director, Walter Shorenstein, was a well-established San Francisco real-estate mogul and local politician who believed in the capitalist expansion of the city.<sup>8</sup> In June of 1968, Milton Meyer and Company applied for the demolition of the I-Hotel building, with the intention of turning the property into a parking lot to be used by Financial District employees. The tenants of the I-Hotel did not find out about this plan until that October.<sup>9</sup> Opposition to the destruction was immediate, as San Francisco was already lacking affordable housing in general;<sup>10</sup> there would be no alternative place for elderly Filipinos to live. Later, in 1973, Shorenstein sold the property to the Thailand-based Four Seas Investment Corporation.<sup>11</sup></p>
                <div className="imgText">
                    <figure>
                        <img src={require('../../assets/images/ihotel/I-Hotel_3.png')} className="vertical-img"/>
                        <figcaption>
                            A sign at a demonstration to protect the I-Hotel.
                            <br/>Citation: Photograph of a demonstration from an IHTA newspaper, n.d., AAS ARC 2019/2, box 1, folder 2, Save the International Hotel Records, Ethnic Studies Library, UC Berkeley.
                        </figcaption>
                    </figure>
                </div>
                <br/>
                <p>In response to these efforts to demolish the I-Hotel, its tenants began organizing into the United Filipino Association in 1969, which later became the International Hotel Tenants Association (IHTA). The IHTA advocated for the preservation of the I-Hotel as low-income housing and engaged in a variety of protests and legal actions against the Four Seas Investment Corporation, including taking their cause to a public hearing at the City Permit Appeals Board<sup>12</sup>. Many of the tenants were manongs (a term loosely translated as “older brother,” used to refer to the first generation of Filipino American immigrants) who either came from a labor movement or social movement background, or grew into leadership roles during the anti-eviction movement. With their experiences, they brought valuable insight, leadership, and militancy to the movement.<sup>13</sup></p>
                <p>The I-Hotel movement is also notable in the sense that it was intergenerational, bringing the young and elderly together for a common cause. As the Third World Liberation Front Strikes arose at San Francisco State University and UC Berkeley, Asian American student activists demanded an education that was relevant to Third World people and followed their principle of “Serve the People.” Inspired by the organizing of the older tenants and the IHTA, the I-Hotel became a community hub for the student activists. Meetings and classes were held in the basement of the hotel, and the eviction defense itself was a major rallying point for them to take action to materially improve the circumstances of working-class Asian Americans.<sup>14</sup> While a wide range of Asian American students built ties to the community through the I-Hotel, the most notable student group was Katipunan ng mga Demokratikong Pilipino (KDP), or the Union of Democratic Filipinos, which worked directly with the tenants to defend the I-Hotel.<sup>15</sup></p>
                <div className="imgText">
                    <figure>
                        <img src={require('../../assets/images/ihotel/I-Hotel_4.jpg')} className="vertical-img"/>
                        <figcaption>
                            A feature on the I-Hotel in the KDP newspaper Kalayaan.
                            <br/>Citation: Kalayaan I-Hotel feature, n.d., Kalayaan, vol 1, no. 1 page 7, Ethnic Studies Library, UC Berkeley.
                        </figcaption>
                    </figure>
                </div>
                <br/>
                <p>	Over time, the I-Hotel anti-eviction movement spanned a wide range of organizations and communities throughout the Bay Area, including labor unions, faith groups, the anti-war movement, LGBTQ+ activists, and even major San Francisco politicians. As Estella Habal, a student organizer with the KDP at the time, wrote of the I-Hotel struggle, “It was a fight for housing rights versus private-property rights; for a neighborhood’s existence versus extinction and dispersal; and for the extension of  democratic rights to the poor and working class.” In a sense, the I-Hotel became a symbol of resistance and community power against the commercialization of the city at the time, which unified a broad coalition of leftist constituencies in the city under one cause. Consequently, defenders of the I-Hotel did not just seek to prevent evictions; they were driven by a broader vision of community care for the working class residents of Manilatown. For instance, KDP and IHTA activists were inspired by Black Panther initiatives such as providing free lunch programs to children; similarly, the KDP developed a childcare program at the I-Hotel that allowed parents, especially mothers, to remain involved with the cause even after having children. </p>
                <div className="imgRow">
                    <div className="imgText">
                        <figure>
                            <img src={require('../../assets/images/ihotel/I-Hotel_5.jpeg')} className="vertical-img"/>
                            <figcaption>
                                A demonstration at the I-Hotel. <br/> A chant sheet for demonstrators. A poster about the I-Hotel struggle.
                                <br/>Citation: A demonstration at the I-Hotel, n.d., AAS ARC 2019/2, box 1, folder 1, Save the International Hotel Records, Ethnic Studies Library, UC Berkeley.
                            </figcaption>
                        </figure>
                    </div>
                    <div className="imgText">
                        <figure>
                            <img src={require('../../assets/images/ihotel/I-Hotel_6.jpeg')} className="vertical-img"/>
                            <figcaption>
                                A chant sheet for demonstrators, n.d., AAS ARC 2019/2, box 1, folder 10, Save the International Hotel Records, Ethnic Studies Library, UC Berkeley.
                            </figcaption>
                        </figure>
                    </div>
                    <div className="imgText">
                        <figure>
                            <img src={require('../../assets/images/ihotel/I-Hotel_7.png')} className="vertical-img"/>
                            <figcaption>
                            Poster, 1970-1979, AAS ARC 2019/2, oversized folder 1, Save the International Hotel Records, Ethnic Studies Library, UC Berkeley.
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <br/>
                <p>As the developers continued to apply pressure, many of the I-Hotel tenants began to move out, with only 80 of the 130 original tenants remaining in 1976.<sup>18</sup> The conflict reached a turning point on the night of August 3, 1977 into the early morning of August 4. Despite a human barricade formed by protestors around the building, police ultimately evicted the tenants, swinging batons, riding horses into the crowd, and beating protestors.<sup>19</sup></p>
                <div className="imgText">
                    <figure>
                        <img src={require('../../assets/images/ihotel/I-Hotel_8.jpg')} className="vertical-img"/>
                        <figcaption>
                            The human barricade formed in front of the I-Hotel on eviction night.
                            <br/> Citation: Nancy Wong, Protesters in front of the International Hotel, photograph, Wikimedia Commons, August 4, 1977, <a href="https://commons.wikimedia.org/wiki/File:Protesters_in_front_of_the_International_Hotel.jpg">https://commons.wikimedia.org/wiki/File:Protesters_in_front_of_the_International_Hotel.jpg</a>.
                        </figcaption>
                    </figure>
                </div>
                <br/>

                <h3>Aftermath of the Eviction</h3>
                <p>The demolition of the I-Hotel did not end its story. Despite immense pressure to develop on the land the I-Hotel formerly stood on, sustained community activism prevented the progression of commercial development for nearly 30 years.<sup>20</sup> During this time, the demolished lot, with just a hole in the ground remaining, was a symbol of the enduring activism of the I-Hotel coalition. After the eviction, strong outcry from I-Hotel supporters soon pressured the city to establish the International Hotel Block Development Citizens Advisory Committee (IHCAC), a group devoted to advocating for the displaced tenants, and to pass a zoning ordinance that required housing to be developed on the I-Hotel block. According to Linda Wang, chairwoman of the IHCAC, they were motivated because “this was a fight not just for the hotel, but a longstanding fight against Financial District encroachment. The financial district in San Francisco is east of Kearny Street… There were hotels along Kearny Street, <sup>which</sup> housed Filipino families and then Chinese elderly for the most part. Building by building, these spaces would get sold. The financial district was encroaching into Manilatown on Kearny Street, bordering Chinatown. The I-Hotel <sup>was</sup> a last stand.”<sup>21</sup></p>
                <p>For the following decade, the IHCAC, city of San Francisco, and Four Seas Company negotiated development agreements, with the IHCAC gradually securing more funds for block development from US Department of Housing & Urban Development grants. The IHCAC agreed to a joint development project with St. Mary’s Chinese Schools and Catholic Center with the Chinatown Community Development Center as the housing developer, and in 1998, the Four Seas company sold the I-Hotel site to the Catholic Church. The Manilatown Heritage Foundation was also incorporated into the effort, as it began to search for and bring back former I-Hotel tenants.</p>
                <p>Finally, in 2005, the new I-Hotel was opened. Today, the I-Hotel continues to provide 104 units of low-income housing and a Manilatown Center with programming to serve its tenants and the Filipino community in San Francisco. The Manilatown Heritage Foundation continues its critical work to preserve the history of the I-Hotel struggle, as well as create opportunities for organizing and community building in the present day.</p>
                {/* The following is very ugly )-: */}
                <div className="imgText">
                    <figure>
                        <div className="imgRow">
                            <div className="imgText">
                                <figure>
                                    <img src={require('../../assets/images/ihotel/I-Hotel_9.png')} className="vertical-img"/>
                                    <figcaption>
                                        The I-Hotel today, with the Transamerica Pyramid in the background.
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="imgText">
                                <figure>
                                    <img src={require('../../assets/images/ihotel/I-Hotel_10.jpg')} className="vertical-img"/>
                                    <figcaption>
                                        The original I-Hotel sign is displayed in the lobby of the <br/>modern-day I-Hotel senior housing building.
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <figcaption>
                            Vivian Kuang, personal photo, March 25, 2023.
                        </figcaption>
                    </figure>
                </div>
                <br/>
                <p>Putting the I-Hotel struggle in perspective, it stands out amongst the rich history of Chinatown and San Francisco as a whole as a uniquely intergenerational, pan-Asian, cross-racial, and radical movement for a city that belonged to everyone, regardless of their race or socioeconomic status. Beyond the eviction defense, the movement was at its core fighting for a world in which working class Asian Americans were resourced and empowered. Over 40 years later, the I-Hotel continues to work towards this goal, whether it be through the activists and community organizations that were cultivated in its basement, the networks of solidarity created through the movement, or the living legacy of those continuing to fight for Manilatown and Chinatown.</p>
            </div>
            
            {/* TODO: Figure out cleaner way to do citations, maybe with a component? */}
            <details className="citations">
                <summary>References</summary>
                <ul>
                    <li>
                        <sup>1</sup>Estella Habal, San Francisco's International Hotel: Mobilizing the Filipino American Community in the Anti-Eviction Movement (Philadelphia: Temple University Press, 2007), 9.
                    </li> 
                    <li>
                        <sup>2</sup>Habal, San Francisco’s International Hotel, 11.
                    </li> 
                    <li>
                        <sup>3</sup>Nicole Clark, “How Kearny Street Workshop created a platform for Asian American artists in the Bay Area,” The San Francisco Chronicle, October 22, 2019, https://datebook.sfchronicle.com/entertainment/how-kearny-street-workshop-created-a-platform-for-asian-american-artists-in-the-bay-area#:~:text=Started%20in%201972%20as%20an,eviction%20and%20labor%20abuses%2C%20Kearny/ 
                    </li> 
                    <li>
                        <sup>4</sup>Iris Kwok, “One of nation’s first Asian American bookstores is closing after 41 years,” Berkeleyside, March 21, 2023, https://www.berkeleyside.org/2023/03/21/eastwind-books-berkeley-harvey-beatrice-dong-university-avenue-asian-american?fbclid=IwAR0DS_Am821Pq5sAKxKnHdZR_nah6tCowuE5Il0-4gXKfD80hE-ktWVu6oA.
                    </li> 
                    <li>
                        <sup>5</sup>Habal, San Francisco’s International Hotel, 10-11.
                    </li>
                    <li>
                        <sup>6</sup>Jeanette Gandioco Lazam (original and current I-Hotel tenant), in discussion with Vivian Kuang and Emily Ho, San Francisco, CA, March 2023.
                    </li> 
                    <li>
                        <sup>7</sup>Habal, San Francisco’s International Hotel, 34.
                    </li> 
                    <li>
                        <sup>8</sup>Habal, San Francisco’s International Hotel, 40.
                    </li> 
                    <li>
                        <sup>9</sup>Habal, San Francisco’s International Hotel, 33.
                    </li> 
                    <li>
                        <sup>10</sup>Habal, San Francisco’s International Hotel, 3.
                    </li> 
                    <li>
                        <sup>11</sup>“The I-Hotel - San Francisco Timeline,” The International Hotel Senior Housing Inc., accessed April 6, 2023, https://www.ihotel-sf.org/organization-and-governance/.
                    </li>
                    <li>
                        <sup>12</sup>Chuo Li. “Postwar Urban Redevelopment and the Politics of Exclusion: The Case of San Francisco’s Chinatown,” Journal of Planning History 18, no. 1 (2018: 34).
                    </li> 
                    <li>
                        <sup>13</sup>Estella Habal, San Francisco's International Hotel: Mobilizing the Filipino American Community in the Anti-Eviction Movement (Philadelphia: Temple University Press, 2007), 21-22.
                    </li> 
                    <li>
                        <sup>14</sup>Habal, San Francisco’s International Hotel, 23.
                    </li> 
                    <li>
                        <sup>15</sup>Habal, San Francisco’s International Hotel, 1-2.
                    </li> 
                    <li>
                        <sup>16</sup>Habal, San Francisco’s International Hotel, 3.
                    </li> 
                    <li>
                        <sup>17</sup>Estella Habal, "I Hotel: Feminist Perspectives on a Social Movement" (presentation, Asian American Research Center, Berkeley, CA, March 16, 2023).
                    </li> 
                    <li>
                        <sup>18</sup>Li. “Postwar Urban Redevelopment,” 34.
                    </li>  
                    <li>
                        <sup>19</sup>Habal, San Francisco’s International Hotel, 1.
                    </li> 
                    <li>
                        <sup>20</sup>Needs citation - how to cite the panel?
                    </li> 
                    <li>
                        <sup>21</sup>Linda Wang (chairwoman of the IHCAC), in discussion with Emily Ho, San Francisco, CA, March 2023.
                    </li>
                </ul>
            </details>
            <Footer />
        </div>
    )
}

export default IHotel