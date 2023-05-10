import React from 'react';
import Footer from '../../components/Footer';
import "./Food.css";
import "../PageStyle.css";

const Food = () => {
    return (
        <div className="food-page">
            <div className="food-intro">
                <br/>
                <h2>Moon Gate Lounge / Mr. Jiu’s: Nightlife & Food in Chinatown</h2>
                <p>San Francisco’s Chinatown has been a rich source of history, it has changed through the decades and created certain historical markers—including the bloom of nightlife thanks to Kubla Khan. It has influenced the perception of what the culture of Chinatown is through the new attention they are getting because of the new surgance of nightlife. Nightlife changed the way community members could keep in touch with each other, changing the ideas of what it means to eat and exist in Chinatown.</p>
                <p>The population of Chinatown was practically exiled by most of San Francisco, and especially the food. Only 5 restaurants were listed on the businesses directory in 1856 out of the 88 Chinese businesses in San Francisco. Most of the food that was made within the restaurants were catered towards the traditional taste of Chinese cuisine, but with struggles came almost a compromise. Chop Suey first came up as the idea of putting all their sides together and mixing them up during the Gold Rush, but later on becomes capitalized during the era of Nightlife in San Francisco. The following years Chop Suey rises as one of the first mainstream transnational dishes that comes out the United States(Liu)<sup>1</sup>. The idea of chop Suey, was purely an American idea while there were ideas that were inspired by Chinese cuisine. It became a popular food throughout the US that there were different styles of chop Suey by the city that they were advertising in(Liu)<sup>2</sup>. However, the idea of what it meant to be Chinese was still struggling to be understood in San Francisco. "In 1905, San Francisco had only forty‐six Chinese restaurants. Twenty years later, the number grew to seventy‐ eight, which was still far behind that of New York.", but that did not mean that would not change through the years.</p>
                <p>After the 1906 earthquake that devastated San Francisco, a new vision of Chinatown emerged. The idea of who the  restaurants should be marketed towards rapidly changed with the urgent need of money. They targeted their design and taste of their food to appease the western side of San Francisco. During the 1940s, transliteration and western names were popular within the new scene of restaurants to gain the attention of the outside clientele of Chinatown(Chao)<sup>3</sup>. This still shows in the restaurants today. The era of Night Clubs gave way to this idea in some way, another way to make an economic boom(Chao)<sup>4</sup>.</p>
                <p>Chinatown’s cuisine was initially seen as foreign and unusual to the Americanized gaze—the boom of chop suey and other dishes, nightclubs like Kubla Khan helped redefine the experience of eating in Chinatown<sup>5</sup>. It changed the ideas of what it meant to be in Chinatown, and the perception of the people who resided in Chinatown. It gave the new generation of Chinatown a chance to discover themselves in different ways while exploring the expanse of what it means to be Chinese American, especially with the idea of what it means to eat Chinese. Chinese food evolved from being a comfort food just for the Chinese people who lived in the States, to a normalized eating option for the American public.</p>
                <div className="imgText">
                    <figure>
                        <img src={require('../../assets/images/culturefood/image1.png')} className="horizontal-img"/>
                        <figcaption>
                            People eating at Kubla Khan enjoying the entertainment in front of them
                            <br/>
                            <a href="https://asamnews.com/2019/10/24/the-kubla-khan-at-the-gateway-of-san-francisco-chinatown/">BY AKEMI TAMANAHA OCTOBER 24, 2019</a>
                        </figcaption>
                    </figure>
                </div>
                <p>Dining and entertainment became two sides of the same coin as the years progressed. Kubla Khan surely showed this change by creating a new means of entertainment, this was the cause of how it was deemed the second coming of the Forbidden City.<sup>6</sup> The idea of having a place to eat while still having the wants of entertainment to be at your grasp, was something that helped create the boom of the cuisine of Chinatown. Chinatown has continued to be a way of collecting tourism to gain their financial standing. That continued to create a bridge between the years to help continue a new growth of Chinatown. The new boom creates an opportunity for what it means to be in Chinatown. A renewal is happening whether we can stop it or not, but with the pandemic many shops closed down and the growth they gained through the century flipped on its head. With the closed shops, new shops took their place that brought in new clientele to step foot in the neighborhood. With the neighborhood being highly affected by the multiple stops that derailed their advances, people say it as a chance to build new ideas that replaced many of the ones that Chinatown used to follow.</p>
                <p>As a gathering place, Kubla Khan gave a new source of income to Chinatown and breathed new life into the neighborhood.The price of a meal in Kubla Khan in the mid 1940s to the late 1950s was around $2.50, which amounts to around $53.42 now. The nightlife of Kubla Khan was not the only thing bridging the gap from Chinatown residents to white San Franciscans, but food also played a role in this process. Chop suey is the first known Chinese American dish that helped introduce the taste of Chinese food to Americans without it being “othered”.<sup>7</sup></p>
                <div className="imgText">
                    <figure>
                        <img src={require('../../assets/images/culturefood/image2.jpg')} className="horizontal-img"/>
                        <figcaption>
                        Empress of China before it got shut down
                        <br/>
                        <a href="https://www.google.com/url?q=https://sf.eater.com/2021/6/16/22533426/empress-by-boon-opening-menu-san-francisco&sa=D&source=editors&ust=1683521914566161&usg=AOvVaw0rGUWaptm7C3gJfpK11Jx1">Patricia Chang</a>
                        </figcaption>
                    </figure>
                </div>
                <br/>
                <p>Food continues to change the face of Chinatown and what social life looks like for the community. After the <a href="#/culture/golden-dragon">Golden Dragon Massacre</a> in 1977, the idea of gathering in eateries became almost obsolete. Restaurants lost business and the energy of Chinatown changed for what felt like the worst. The fear surrounding the massacre shoved Chinatown back into being “othered”. Almost 43 years after the massacre, Covid-19 engrossed the world and changed the meaning of socialization in Chinatown. Socializing in Chinatown became even more difficult, causing significant damage to the economy of Chinatown. Chinatown once again became ostracized to be seen as a tourist site and not a place to go for one’s own pleasure. Then came the bursts of new restaurants that have come to Chinatown within the recent years. Empress by Boon has been a new attraction that has occupied the vacant Empress of China, bringing in non-Chinatown residents to the area. The dishes include Chinese food that still maintains the original ideas but adds a new twist, such as their ‘Winter Perigord Truffle Puff’. They have nothing that strives away from the idea of Chinese food, but the upscale setting of the restaurant as well as the plating signals a new direction for food in Chinatown.</p>
                <p>Like Kubla Khan, entertainment in Chinatown is being revived in a way that shows how far Chinese Americans have come from the past. Before, ingredients to make authentic Chinese food were practically inaccessible with how niche the marketplace kept culturally significant foods,  the Americanization of Chinese food. However, Chinese ingredients have become increasingly accessible, and are not considered “othered” as they were back then. Kubla Khan broke the ground for what it means to eat in Chinatown, and with new restaurants coming in, the idea of entertainment in Chinatown is changing right before us. Kubla Khan was not the stop of how Chinatown was starting to change in a newer direction. New restaurants and cultural institutions around had the effect of changing the outside perceptions and the internal dynamics of Chinatown.</p>
            </div>
            {/* TODO: Figure out cleaner way to do citations, maybe with a component? */}
            <details className="citations">
                <summary>References</summary>
                <ul>
                    <li>
                        <sup>1</sup>Liu, H. (2015). "Chinamen Live on Rice". In From Canton restaurant to Panda Express: A history of Chinese food in the United States. essay, Rutgers University Press.
                    </li> 
                    <li>
                        <sup>2</sup>Liu, H. (2015). "Chinamen Live on Rice". In From Canton restaurant to Panda Express: A history of Chinese food in the United States. essay, Rutgers University Press.
                    </li> 
                    <li>
                        <sup>3</sup>Chao, T. (1988). “The Americanization of Chinese Restaurants: 1906-1965. In Communicating through architecture: San Francisco Chinese restaurants as cutural intersections: 1849-1984. essay, University Microfilms International.
                    </li> 
                    <li>
                        <sup>4</sup> Chao, T. (1988). “The Americanization of Chinese Restaurants: 1906-1965. In Communicating through architecture: San Francisco Chinese restaurants as cutural intersections: 1849-1984. essay, University Microfilms International.
                    </li> 
                    <li>
                        <sup>5</sup>Peters, E. J. (2013). San Francisco: A food biography. Rowman &amp; Littlefield.
                    </li>
                    <li>
                        <sup>6</sup>Peters, E. J. (2013). San Francisco: A food biography. Rowman &amp; Littlefield.
                    </li>
                    <li>
                        <sup>7</sup>Peters, E. J. (2013). San Francisco: A food biography. Rowman &amp; Littlefield.
                    </li>
                </ul>
            </details>
            <Footer />
        </div>
    )
}

export default Food;