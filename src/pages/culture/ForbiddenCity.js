import React from 'react';
import Footer from '../../components/Footer';
import "./ForbiddenCity.css";
import "../PageStyle.css";

const ForbiddenCity = () => {
    return (
        <div className="forbidden-city-page">
            <div className="forbidden-city-intro">
                <br/>
                <h2>The Forbidden City </h2>
                <p>Charlie Low’s Forbidden City is perhaps the most famous of all the nightclubs of the Golden Age, with its vivid interiors, $1.50 chop suey, and a Golden Buddha watching from above.<sup>1</sup><sup>2</sup> The Forbidden City’s promises of the mysterious and bizarre brought countless patrons into the nightclub. More than that, it provided a platform for aspiring Asian American performing artists to showcase their talents, and a uniquely Asian American performing arts space. As Frances Chun recounts, “It was the first place we could really call our own.”<sup>3</sup> </p>
                <div className="imgText left">
                    <figure>
                        <img src={require('../../assets/images/forbiddencity/image1.jpg')} className="horizontal-img"/>
                        <figcaption>
                            Credit: Coby Yee
                        </figcaption>
                    </figure>
                </div>
                <br/>
                <p>Charlie Low, the proprietor of the Forbidden City, opened the nightclub at 363 Sutter Street in 1938, after the success of his cocktail bar, Chinese Village. However, the Forbidden City was not always successful from the start—namely, it did not reach its high levels of success until Low began to market the nightclub’s Chinese performers.<sup>4</sup> One of the most popular acts was the burlesque bubble and fan dance, performed by Noel Toy, known as the “Chinese Sally Rand”. Other popular acts included Larry Ching, the “Chinese Frank Sinatra”; Dorothy Toy and Paul Wing, the “Chinese Ginger Rogers and Fred Astaire”; Tony Wing; Coby Yee, “China’s Most Daring Dancing Doll”; and Frances Quan Chun, also known as “Chinese Frances Langford”. Each performer had a loyal following of fans, which kept the Forbidden City alive, according to Tony Wing: “That’s what kept the club going: we all had a following.”<sup>5</sup></p>
                <div className="imgText right">
                    <figure>
                        <img src={require('../../assets/images/forbiddencity/image2.jpg')} className="vertical-img"/>
                        <figcaption>
                        Photo of Jadin Wong
                        <br/>Credit: Courtesy of Arthur Dong’s <a href="https://www.google.com/url?q=https://www.deepfocusproductions.com/films/forbidden-city-usa/&sa=D&source=editors&ust=1683522438800039&usg=AOvVaw3wrUGkTmIpFtxj03T-RVBI">"Forbidden City, USA”</a><br/> Chinatown Nightclubs Collection.
                        </figcaption>
                    </figure>
                </div>
                <br/>
                <p>Many of these performers had experienced racial discrimination elsewhere and were not able to find many performance opportunities where they felt their talent was recognized. In the words of Dorothy Toy of dance duo Toy and Wing, “We found that we had to be much better than the American dance team, the Caucasians, or else we wouldn’t get the bookings.” Larry Ching provides insight on the racial dynamics of the time: “Orientals were just novelties because they’d never seen an Oriental do this type of singing and dancing. This was something new to everybody—even for ourselves it was new.” The Forbidden City allowed them a stage to shine, as well as additional performance opportunities as people began to realize the performers’ potentials as more than the Chinese so-and-so. </p>
                                  
                <p>Though the Forbidden City capitalized on outdated racial stereotypes of Asian Americans, it also was a site of innovation, revolution, and created a new Chinese American culture. According to Frances Chun, “What we did in the thirties and forties was shocking to the Chinese community and confusing to the Cauasian people… but to be a singer and a dancer? Well, that’s quite different, quite unique.” The performers at the time were not only able to change the way that Asian Americans were viewed, but also able to bring about new opportunities for Asian American entertainers. After the Forbidden City, headlining dancer Jadin Wong went on to start a talent agency specializing in Asian Americans, nurturing upcoming artists in ways that were not possible during her time: in her words, “All my experience and what I’ve learned, now I try to give to the Asian American actors that are coming into this business—to help them and nurture them so that they can have a future in this business with less heartaches than I had when I first started.” Tony Wing taught dance in San Francisco at the YWCA for thirty years, continuing to inspire young people interested in performing arts. These Asian American artists were trailblazers. In the words of Larry Ching, “One thing I’m glad about is that we were breakin’ the ice for all the people, you know. We gave ‘em a good start. So I mean, now it’s a lot better for them. We showed ‘em that we had a little talent—and we had some talent.”<sup>7</sup></p>
                <br/>
                <div className="imgText lastPic">
                    <figure>
                        <img src={require('../../assets/images/forbiddencity/image3.jpg')}/>
                        <figcaption>
                        Tony Wing with his students at YWCA, San francisco
                        <br/>Credit: Courtesy of Arthur Dong’s <a href="https://www.google.com/url?q=https://www.deepfocusproductions.com/films/forbidden-city-usa/&sa=D&source=editors&ust=1683522438800039&usg=AOvVaw3wrUGkTmIpFtxj03T-RVBI">"Forbidden City, USA”</a><br/> Chinatown Nightclubs Collection.
                        </figcaption>
                    </figure>
                </div>
            </div>
            {/* TODO: Figure out cleaner way to do citations, maybe with a component? */}
            <details className="citations">
                <summary>References</summary>
                <ul>
                    <li>
                        <sup>1</sup><i>Forbidden City</i>, U.S.A., n.d.
                    </li> 
                    <li>
                        <sup>2</sup>ayanac2411, “Forbidden City the Double Entendre and the Emergence of Chinese American,” digital Humanities studio, May 31, 2022, <a href="https://docstudio.org/2021/12/16/forbidden-city-the-double-entendre-and-the-emergence-of-chinese-american/">https://docstudio.org/2021/12/16/forbidden-city-the-double-entendre-and-the-emergence-of-chinese-american/</a>.
                    </li> 
                    <li>
                        <sup>3</sup>Arthur E. Dong, Lorraine Dong, and Lisa See, <i>Forbidden City, USA: Chinatown Nightclubs, 1936-1970</i> (Los Angeles, CA: DeepFocus Productions, 2015).
                    </li> 
                    <li>
                        <sup>4</sup>Arthur E. Dong, Lorraine Dong, and Lisa See, <i>Forbidden City, USA: Chinatown Nightclubs, 1936-1970</i> (Los Angeles, CA: DeepFocus Productions, 2015).
                    </li> 
                    <li>
                        <sup>5</sup>Arthur E. Dong, Lorraine Dong, and Lisa See, <i>Forbidden City, USA: Chinatown Nightclubs, 1936-1970</i> (Los Angeles, CA: DeepFocus Productions, 2015).
                    </li>
                    <li>
                        <sup>6</sup>Arthur E. Dong, Lorraine Dong, and Lisa See, <i>Forbidden City, USA: Chinatown Nightclubs, 1936-1970</i> (Los Angeles, CA: DeepFocus Productions, 2015).
                    </li>
                    <li>
                        <sup>7</sup>Arthur E. Dong, Lorraine Dong, and Lisa See, <i>Forbidden City, USA: Chinatown Nightclubs, 1936-1970</i> (Los Angeles, CA: DeepFocus Productions, 2015).
                    </li>
                </ul>
            </details>
            <Footer />
        </div>
    )
}

export default ForbiddenCity;
