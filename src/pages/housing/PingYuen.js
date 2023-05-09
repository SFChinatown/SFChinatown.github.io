import React from 'react';
import Footer from '../../components/Footer';
import "./PingYuen.css";
import "../PageStyle.css";

const PingYuen = () => {
    return (
        <div className="ping-yuen-page">
            <div className="ping-yuen-intro">
                <br/>
                <h2>Ping Yuen</h2>
                <p>Historically, Chinatown was vastly overcrowded as a result of Chinese people being unable to live in other parts of SF due to housing discrimination. A Chinese social worker in the 1920s lamented, “people say the Chinese live so crowded, but nobody will rent to us,” while a white resident of San Francisco proclaimed “Let the Chinese stay below Stockton. This is a white man’s land.”<sup>1</sup> In 1932, a permanent injunction was issued to bar Chinese people from occupying homes on Nob Hill,  just adjacent to Chinatown.<sup>2</sup> And in 1939, federal officials estimated that almost 90 percent of Chinatown dwelling units were substandard, and that almost 80 percent had no heating or private bathing or cooking facilities.<sup>3</sup> </p>
                <p>As soon as the San Francisco Housing Authority was established in 1938, community advocates called for more housing. Housing advocate Lim P. Lee, an immigrant from Hong Kong, wrote, “Chinatown can request the proper housing authorities to set up housing in this community for <sup>low income</sup> families.  In view of our congested conditions, this is one of the urgent needs.”<sup>4</sup> Organizations like the Chinese Young Women’s Christian Association also sent letters to the commission asking for a remedy to the overcrowded homes in Chinatown.<sup>5</sup> The Housing Authority moved forward with the Chinatown housing project, CAL 1-5, but nothing was built due to a lack of funding.</p>
                <p>In 1939, Chinatown housing activists took matters into their own hands and formed the Chinatown Housing Project Committee, composed of various Chinatown service organizations and groups like the Chinese Catholic Center and the Chinese Six Companies. They asserted that a new housing project would not only provide more housing and it might also help  decrease the  high tuberculosis rate in SF Chinatown, which at the time was among the highest in the nation and three times higher than in the rest of the city.<sup>6</sup> Ping Yuen, the new  housing  project, was finally opened in 1951, yielding 234 liveable units.<sup>7</sup></p>
                <div className="imgText">
                    <figure>
                        <img src={require('../../assets/images/pingyuen/image1.jpg')} className="vertical-img-taller"/>
                        <figcaption>
                            Celebration of the Opening of Ping Yuen 
                            <br/>
                            Citation: University of California, Berkeley, Ethnic Studies Library. Chinese Times, 1951.
                        </figcaption>
                    </figure>
                </div>
                <br/>
                <p>The construction of Ping Yuen was not nearly enough to alleviate Chinatown’s housing crisis. In 1968, 778 families were on the waitlist for an open apartment in Ping Yuen.<sup>8</sup> The 1970 census described 13.4% of Chinatown housing as overcrowded and estimated that a quarter of the population lived in such conditions.<sup>9</sup> </p>
                <p>Despite the high demand for housing in Ping Yuen, the complex also suffered from rundown conditions and security issues. In July 1977, a gang-related shootout took place in the housing project, leaving a 16 year old resident dead.  Julia La Chica, a Japanese Filipina artist and former resident who grew up in the Ping, recounted in an interview  that the building was wide open, “so anybody could come inside.” This presented  a safety issue, given the building’s proximity to the Red Light District.<sup>10</sup> She also recalled how the elevator was consistently broken and dirty and how the garbage chute was always overflowing.</p>
                <div className="imgText">
                    <figure>
                        <img src={require('../../assets/images/pingyuen/image2.jpg')} className="horizontal-img"/>
                        <figcaption>
                            Julia La Chica and her Family in their Living Room for their First Christmas in the Ping
                            <br/>
                            Citation: Julia la Chica, Personal Phototograph, December 1973
                        </figcaption>
                    </figure>
                </div>
                <br/>
                <p>Ping Yuen’s lack of security created dangerous conditions for its residents. One high profile incident occurred in 1978 when 19 year old Julia Wong was raped and murdered in a stairway of the Ping. According to La Chica, who was 13 at the time of the murder, the building “was dimly lit. It didn’t feel safe in that sense. Growing up there, I experienced seeing at least four deceased people in the building area… And I think the last straw was when [Julia Wong] was murdered. And everybody was up in arms. They wanted something done. [The residents]  wanted to feel safe again. I mean, I feel like I am still suffering from post-traumatic stress disorder over that murder. You know, I had seen her. I had told the police who she was; I took them to her apartment, to her family's home.”<sup>11</sup></p>
                                  
                <p>The death of Julia Wong finally spurred tenants to demand change. Between 1978 and 1979, 200 families participated in a rent strike that lasted months to protest the poor repair and security conditions. The strike was co-organized by future San Francisco Mayor Ed Lee, who was a law student at the time.<sup>12</sup> Residents paid their rent into an escrow holding account until their demands for guards, new gates, better lighting, and window bars were met. La Chica recalls that the activists were mostly Chinese women who were “very women-centered,” and that because of the successful organizing of the rent strike, the residents gained more strength and confidence to deal with the other issues in the building.<sup>13</sup></p>
                <br/>
                <div className="imgRow">
                    <div className="imgText">
                        <figure>
                            <img src={require('../../assets/images/pingyuen/image3.jpg')} className="vertical-img"/>
                            <figcaption>
                                Promise of Strength
                                <br/>
                                Citation: Julia la Chica, 2023
                            </figcaption>
                        </figure>
                    </div>
                    <div className="imgText">
                        <figure>
                            <img src={require('../../assets/images/pingyuen/image4.jpg')} className="vertical-img"/>
                            <figcaption>
                                Ping Yuen Entrance Today
                                <br/>
                                Citation: Maddi Wong, Personal Photograph, March 2023
                            </figcaption>
                        </figure>
                    </div>
                    <div className="imgText">
                        <figure>
                            <img src={require('../../assets/images/pingyuen/image5.jpg')} className="vertical-img"/>
                            <figcaption>
                                Ping Yuen Exterior Today
                                <br/>
                                Citation: Maddi Wong, Personal Photograph, March 2023
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <p>However, by the 2000s, as a result of chronic underfunding, the city of San Francisco again failed to address security concerns and renew aging infrastructure. Robberies and assaults were still common around Ping Yuen.<sup>14</sup> Finally, in 2013, the late Mayor Ed Lee replaced the housing authority commissioners and offloaded public housing properties, including Ping Yuen, to nonprofits better suited to manage housing renovations. The CCDC was able to leverage housing tax credits and EBT financing from the Rental Assistance Demonstration (RAD) to finally work together with tenants to fix the gates and to find temporary housing for tenants while the units were being upgraded.<sup>15</sup> </p>
                <div className="imgText">
                    <figure>
                        <img src={require('../../assets/images/pingyuen/image6.jpg')} className="vertical-img"/>
                        <figcaption>
                            Caption: Peace Garden Stay
                            <br/>Citation: Julia la Chica, 2023
                        </figcaption>
                    </figure>
                </div>
                <p>Reflecting on her experience growing up in Ping Yuen, La Chica expressed that the Ping is important because it is “low income housing for families, the elderly, and youths that would not [otherwise] be able to afford to live in San Francisco.”<sup>16</sup> She expressed concern about the current scarcity of public housing in Chinatown and is now working on a series of art pieces titled “Everybody Deserves a Place to Rest.” The series deals with her experience of  growing up in the Ping, her general  concerns around the homelessness crisis, and her belief that “ people, human beings, [deserve] a place to lay down their heads.”<sup>17</sup></p>
                <div className="imgText">
                    <figure>
                        <img src={require('../../assets/images/pingyuen/image7.jpg')} className="horizontal-img"/>
                        <figcaption>
                            The Ping
                            <br/>Citation: Julia La Chica, 2019, North Ping Yuen, S.F. Public Housing.
                        </figcaption>
                    </figure>
                </div>
            </div>
            {/* TODO: Figure out cleaner way to do citations, maybe with a component? */}
            <details className="citations">
                <summary>References</summary>
                <ul>
                    <li>
                        <sup>1</sup> Brookes, Charlotte. Alien Neighbors, Foreign Friends: Asian Americans, Housing, and the Transformation of Urban California. Chicago: Chicago: University of Chicago Press. (1971).
                    </li> 
                    <li>
                        <sup>2</sup>  Li, C. “Postwar Urban Redevelopment and the Politics of Exclusion: The Case of San Francisco’s Chinatown. Journal of Planning History,” 18(1), 27–43. (2019). <a href="https://doi.org/10.1177/1538513218755043">https://doi.org/10.1177/1538513218755043</a>.
                    </li> 
                    <li>
                        <sup>3</sup> San Francisco Planning Department. San Francisco Chinese American Historic Context Statement. (2021).
                    </li> 
                    <li>
                        <sup>4</sup> Lee, Lim P. “Chinatown’s Housing Problem Due for Airing,” Chinese Digest. (1937).
                    </li> 
                    <li>
                        <sup>5</sup> Brookes, Alien Neighbors, Foreign Friends: Asian Americans, Housing, and the Transformation of Urban California.
                    </li>
                    <li>
                        <sup>6</sup> Trauner, Joan B. “The Chinese as Medical Scapegoats in San Francisco, 1870-1905.” California History, Spring, 1978, Vol. 57, No. 1, The Chinese in California (Spring, 1978), pp. 70-87. http://www.jstor.com/stable/25157817.
                    </li> 
                    <li>
                        <sup>7</sup> “Ping Yuen.” Chinatown Community Development Center. <a href="https://www.chinatowncdc.org/our-portfolio/ping-yuen">https://www.chinatowncdc.org/our-portfolio/ping-yuen</a>.
                    </li> 
                    <li>
                        <sup>8</sup>  Brookes, Alien Neighbors, Foreign Friends: Asian Americans, Housing, and the Transformation of Urban California.
                    </li> 
                    <li>
                        <sup>9</sup> San Francisco (Calif.). Dept. of City Planning. “Chinatown, 1970 Census: Population and Housing, Summary and Analysis.” (1970). <a href="https://archive.org/details/chinatown1970cen1972sanf">https://archive.org/details/chinatown1970cen1972sanf</a>.
                    </li> 
                    <li>
                        <sup>10</sup> Julia La Chica (artist and former Ping Yuen resident) in discussion with Vivian Kuang, April 2023.
                    </li>
                    <li>
                        <sup>11</sup> Julia La Chica, 2023.
                    </li> 
                    <li>
                        <sup>12</sup> Kane, Will. “SF Mayor Ed Lee Never Forgot His Berkeley Roots.” University of California, November 8, 2021. <a href="https://www.universityofcalifornia.edu/news/sf-mayor-ed-lee-never-forgot-his-berkeley-roots">https://www.universityofcalifornia.edu/news/sf-mayor-ed-lee-never-forgot-his-berkeley-roots</a>.
                    </li> 
                    <li>
                        <sup>13</sup> Julia La Chica, 2023.
                    </li> 
                    <li>
                        <sup>14</sup> Examiner Staff. “Ping Yuen Residents Fear Crime in Chinatown Housing Project.” San Francisco Examiner, November 6, 2014. <a href="https://www.sfexaminer.com/news/ping-yuen-residents-fear-crime-in-chinatown-housing-project/article_99fef6db-b469-57a1-9b3d-32ce8ed97dba.html">https://www.sfexaminer.com/news/ping-yuen-residents-fear-crime-in-chinatown-housing-project/article_99fef6db-b469-57a1-9b3d-32ce8ed97dba.html.</a>.
                    </li> 
                    <li>
                        <sup>15</sup> “Ping Yuen.” Chinatown Community Development Center.
                    </li> 
                    <li>
                        <sup>16</sup> Julia La Chica, 2023.
                    </li> 
                    <li>
                        <sup>17</sup> Julia La Chica, 2023.
                    </li>  
                </ul>
            </details>
            <Footer />
        </div>
    )
}

export default PingYuen;
