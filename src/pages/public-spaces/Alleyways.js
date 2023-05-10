import React from 'react';
import Footer from '../../components/Footer';
import AudioPlayer from '../../components/AudioPlayer';
import "./Alleyways.css";
import "../PageStyle.css";

const Alleyways = () => {
    return (
        <div className="alleyways-page">
            <div className="alleyways-intro">
                <h2>Alleyways Program</h2>
                <p>At first glance, Chinatown’s alleyways seem to be secluded and private spaces. While popular media represent alleyways as neglected, deserted, even dangerous, with many housing dumpsters and serving as sites for unwanted activities,<sup>1</sup> Chinatown alleyways present a different reality. In Chinatown, alleyways could well serve as gathering places, mini gardens, and public art spaces that enrich Chinatown’s community and infrastructure. Upon closer inspection, city leaders and community activists have found that the alleyways hold great potential to combat the shortage of open recreational space in San Francisco’s Chinatown.</p>
                <h3>A Space for Socialization</h3>
                <div className="imgText">
                    <figure>
                        <img src={require('../../assets/images/alleyways/image2.jpg')} className="vertical-img"/>
                        <figcaption>
                            Ross Alley<sup>2</sup>
                        </figcaption>
                    </figure>
                </div>
                <br/>
                <p>The alleyways in Chinatown are numerous, but three key sites emblematic of their characteristics are the Spofford, St. Louis, and Salmon alleys. For clarity, the following observations are drawn from historical documents, pre-renovation. Spofford is a mixed-used alleyway situated between Stockton Street and Grant Avenue, and connecting Clay and Washington Street on the opposite ends. Seven mixed-use buildings<sup>3</sup> line its front border, all of which also house residential units, naturally eliciting a plethora of ‘neighborly’ social activity throughout the day. Sewing shops and factories generate an incessant buzz of commercial noise and activity. Everyday conversations and busy SF traffic add to the ambient noise. Meanwhile, workers will trickle in and out of buildings during various times, gathering outside during rest breaks and mealtimes. The loudest gatherings are on the weekends at noon, when friends and family will arrive to pick up workers and chat by the door, right along the street perimeter. Especially when schools are not in session, on the weekends, after-hours, and breaks, children are brought to play in the alleyways as their mothers work away in the bordering sweatshops. Old men are another major demographic in these spaces, and can be seen walking to and from the social clubs. As a result, visitors have described the alley as “neighborly” and lax. Also, because vehicular traffic is mostly limited to commercial trucks dropping off goods for local merchants, pedestrians will often crowd the center of the alley during non-business hours. The population using the alleyway is thus cross-sectional and intergenerational. Yet despite (or perhaps because of) the social function of the Spofford alley, cleanliness has been a pressing issue.  Trash and debris pile onto the streets and are often blown in different directions by the wind, creating an environment that actually works against the intended use of the alley space.</p>
                <div className="imgText">
                    <figure>
                        <img src={require('../../assets/images/alleyways/image1.png')} className="horizontal-img"/>
                        <figcaption>
                            Spofford St, Washington St entrance<sup>4</sup> 
                        </figcaption>
                    </figure>
                </div>
                <br />
                <p>St. Louis is also home to many mixed-use buildings, but it is nonetheless evident that a sense of community and neighborhood still exists there —the alley is best described not as “cramped,” but “cozy.” St. Louis differs from Spofford, however, in that it is a 10-foot wide dead-end alley permitting only pedestrians to come in and out.<sup>5</sup> Being closed off to traffic, it has conveniently enabled the development of ‘seating areas’ in the rear. During afternoon hours, for example, the alley is transformed into a social hub, providing space for factory workers to take breaks and socialize.</p>
                <p>The alley borders several reading rooms gambling and mah-jong clubs, and sewing factories. There, women are greeted by their spouses and children when they take breaks from work and mah-jong games. People gather and have conversations with one another. The elderly and the youth mingle as they flow from one place to the next. Children use the alley as their playground as they invent  simple games such as “line-racing” down these long, narrow spaces. Like Spofford, the St. Louis alley is prone to neglect and trash build-up. Keeping these alleys in optimal condition remains a challenge.</p>
                <h3>A Public and Private Area</h3>
                <p>Who “owns” these alleys remains ambiguous. By federal law, they are an open, public pedestrian way. Yet, the locals have a strong sense of ownership over them.<sup>6</sup> After all, without the attention and care of the residents and businesses, the alleyways would become abandoned, discarded, and lifeless. While used mostly by locals, non-locals often visit the alleyways out of curiosity, and the residents embrace their interest with open arms, allowing them to fully appreciate the bustling Chinese culture, smells, and vitality nested inside.</p>
                <p>And even though the alleyways are officially public roads, they seem to occupy the nexus of public and private. The alleyways are spaces shared by occupants whose buildings outline the perimeter of the alleys.  Doors often open immediately to stairwells, and such close proximity between the private home and the public street define the alleyway not as a separate entity, but an integral part of a community’s residential life.</p>
                <figure>
                    <AudioPlayer 
                        url="../assets/audio/alleyways/part1.m4a"
                    />
                    <figcaption>Introduction to Mui Ho + Jennie Lew</figcaption>
                </figure>
                <figure>
                    <AudioPlayer 
                        url="../assets/audio/alleyways/part2.m4a"
                    />
                    <figcaption>How ‘private’ is the alley space? When visitors enter the alleyways, how are they treated by local residents?</figcaption>
                </figure>
                <p>The ambiguous perception of the alleys as neither fully public nor fully private has contributed to their less-than-ideal conditions.  While locals actively repurpose the alleyways to serve the needs of their community, residents’ efforts to clean the streets with brooms and home appliances are insufficient in clearing all the tourist and commercial waste that accumulate in the alleys.<sup>7</sup> Meanwhile, the City does not see itself as being responsible for their upkeep. Despite the ongoing challenges of maintenance, the alleys continue to play an important role in the spatially-impacted Chinatown. The hope is that with continued beautification efforts and physical renovations, these alleyways will remain vital hubs for community gatherings and the social activities taking place there now will be further encouraged, even amplified.</p>
                <figure>
                    <AudioPlayer 
                        url="../assets/audio/alleyways/part3.m4a#t=0,300"
                    />
                    <figcaption>Mui and Jennie on layered mix-use purposes and how different user groups interacted with the alleyways, from children playing on the streets, to commercial vehicle unloading</figcaption>
                </figure>
                <h3>Potential for Recreational Growth</h3>
                <p>Open recreational space in Chinatown was deemed a “high-need” issue by the SF Department of Recreation and Parks in 1970,<sup>8</sup> and it remains a critical issue now. Overcrowded residential areas, large numbers of low-income families, and cross-generational populations living in close proximity are key factors that contribute to Chinatown’s growing density, which is 10 times that of the rest of San Francisco. This creates an incredible demand for open space.</p>
                <p>In most crowded cities, residents can often drive to a nearby park for recreational activities. However, for Chinatown residents, a number of impediments discourage their utilization of recreational resources outside their immediate neighborhood. For instance, many residents have to work long hours just to maintain an income that can support the rising cost of living in San Francisco. Language is also an issue, as most are non-English speakers. Few own private vehicles, while the sparse network of public transportation further limits their mobility. As a result, Chinatown residents rarely venture outside the neighborhood. With this understanding, the only viable solution to giving residents access to recreational areas is to create more open-spaces in Chinatown.</p>
                <p>Given the limited space in and surrounding Chinatown, it is simply not possible to consider purchasing land. Chinatown is unfortunately sandwiched between two of the most high-demand real estate areas in San Francisco. To the east lies San Francisco’s commercial and financial district, and to the west lies Nob Hill, which is known for its luxury high-rise apartments and hotels. High real estate costs and competing land uses make acquisition of any property in the area financially unviable.<sup>9</sup></p>
                <p>In-depth research points to alleyways as a possible alternative. Open space is almost non-existent in Chinatown and the little space that does exist is generally reserved for housing and commercial purposes. Alleyways, conveniently, are already widely dispersed, accessible to residents, and do not need to be purchased by the city because they are already owned by the city.<sup>10</sup> Moreover, because alleys are generally not traffic-heavy, their closure would not contribute to increased congestion and hazards in other crowded streets.<sup>11</sup> </p>
                <figure>
                    <AudioPlayer 
                        url="../assets/audio/alleyways/part4.m4a"
                    />
                    <figcaption>Mui and Jennie, on the conceptual planning phase, and why alleyways were studied so extensively</figcaption>
                </figure>
            </div>

            {/* TODO: Figure out cleaner way to do citations, maybe with a component? */}
            <details className="citations">
                <summary>References</summary>
                <ul>
                    <li>
                    <sup>1</sup>philip. 2020. “The Backstreets of San Francisco.” Modiv. May 20, 2020. <a href="https://modiv.design/san_francisco_chinatown_alleys/">https://modiv.design/san_francisco_chinatown_alleys/</a>.
                    </li>
                    <li>
                    <sup>2</sup> “Ross Alley.” 2019. Wikipedia. June 19, 2019. <a href="https://en.wikipedia.org/wiki/Ross_Alley">https://en.wikipedia.org/wiki/Ross_Alley</a>.
                    </li>
                    <li>
                    <sup>3</sup> “Observations of An Alley - Spofford St. Chinatown, San Francisco” n.d., box 1, folder 15, AAS ARC 2023/1, Jennie Lew Papers, Ethnic Studies Library University of California, Berkeley.
                    </li>
                    <li>
                    <sup>4</sup>“Observations of An Alley - Spofford St. Chinatown, San Francisco.”
                    </li>
                    <li>
                    <sup>5</sup>“Observations of St. Louis Alley” n.d., box 1, folder 15, AAS ARC 2023/1, Jennie Lew Papers, Ethnic Studies Library University of California, Berkeley.
                    </li>
                    <li>
                    <sup>6</sup>Mui Ho (Architect), in discussion with Allison Hong, Jennie Lew, and Caroline Lu, Berkeley, CA, March 2023.
                    </li>
                    <li>
                    <sup>7</sup>Mui Ho (Architect).
                    </li>
                    <li>
                    <sup>8</sup>“Chinatown Landscapes -  An Open Space Masterplan for the Chinatown Alleyways” 1978, box 1, folder 16, AAS ARC 2023/1, Jennie Lew Papers, Ethnic Studies Library University of California, Berkeley.
                    </li>
                    <li>
                    <sup>9</sup>“Chinatown Landscapes -  An Open Space Masterplan for the Chinatown Alleyways.”
                    </li>
                    <li>
                    <sup>10</sup>Organization Grant Application - National Endowment of the Arts” June 1978, box 1, folder 16, AAS ARC 2023/1, Jennie Lew Papers, Ethnic Studies Library University of California, Berkeley.
                    </li>
                    <li>
                    <sup>11</sup> “Chinatown Landscapes -  An Open Space Masterplan for the Chinatown Alleyways”.
                    </li>
                </ul>
            </details>
            <Footer />
        </div>
    )
}

export default Alleyways
