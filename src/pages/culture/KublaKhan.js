import React from 'react';
import Footer from '../../components/Footer';
import "./KublaKhan.css";
import Tile from '../../components/Tile';

const KublaKhan = () => {
    return (
        <div className="kubla-khan-page">
            <div className="kubla-khan-intro">
                <h2>Kubla Khan</h2>
                <p>In 1944, the Kubla Khan Theater Restaurant opened its doors by the entrepreneur Eddie Pond, who emigrated from Hong Kong in 1923. After opening his first nightclub, the Dragon’s Lair, and witnessing a post WWI entertainment boom, Pond continued to grow his commercial interests by opening the Kubla Khan. The name of the nightclub and restaurant itself conveys fantasy, inspired by the 1816 poem by Samuel Taylor Coleridge “<i>Kubla Khan, or a Vision in a Dream. A Fragment</i>.<sup>1</sup>”</p>
                <p className="quote">In Xanadu did Kubla Khan,
                <br/>A stately pleasure-dome decree, 
                <br/>Where Alph, the sacred river ran, 
                <br/>Through caverns measureless to man, 
                <br/>And down to a sunless sea</p>
                <div className="imgText">
                    <figure>
                        <img src={require('../../assets/images/kublakhan/KK_1.jpg')} />
                        <figcaption>
                        Eddie Pond and Eight Women Performers
                        <br/>Courtesy of Chinese Historical Society of America (CHSA).
                        </figcaption>
                    </figure>
                    <p> Kubla Khan was distinct from other nightclubs of the time due to the unique character of Eddie Pond who, according to family, was musical, creative and bold. Pond was known to have danced and performed alongside his hired entertainers. The nightclub, widely advertised as San Francisco’s “most exciting” theater restaurant, attracted many aspiring Asian American artists who were raised on or influenced by American music and cinema.<sup>2</sup> Despite their aspirations to work as entertainers, Asian Americans artists faced work discrimination in the mainstream American entertainment industry due to negative racial perceptions. As a result, Asian American performers often found their way to San Francisco Chinatown, after finding little success in Hollywood. In Chinatown, they became the stars of the show: entertainers were dubbed “the Chinese Frank Sinatra” (Larry Ching) or “the Chinese Sophie Tucker” (Toy Yat Mar).<sup>3</sup><sup>4</sup>Through vaudeville and burlesque performance, the performers were able to find artistic expression at Kubla Khan, paving the way forward for the future of Asian American entertainment.</p>
                </div>
                <br/><br/>
                <figure>
                    <img src={require('../../assets/images/kublakhan/KK_2.jpg')} />
                    <figcaption>
                    Eddie Pond Pulls Jadin Wong in a Chinese-Style Cart
                    <br/>Courtesy of Chinese Historical Society of America (CHSA). 
                    </figcaption>
                </figure>
                <br/><br/>
                <figure>
                    <img src={require('../../assets/images/kublakhan/KK_3.jpg')} />
                    <figcaption>
                    Three women and four men in military uniform raise their glasses
                    <br/>Courtesy of Chinese Historical Society of America (CHSA). 
                    </figcaption>
                </figure>
                <br /><br />
                <p>Situated at 414 Grant Avenue, Kubla Khan was physically on the border of San Francisco’s Chinatown, edging towards the much “safer” Financial District. Consequently, the nightclub served as a middle ground between the “foreign land” of Chinatown and the predominantly white neighborhoods of San Francisco, and reflected its complex relationship with whiteness. At the nightclub, Chinese Americans were able to find employment that differed from the rest of the community, no longer forced into box-mold jobs like cooks or launderers. However, while Kubla Khan provided a sense of freedom with new opportunities for its entertainers and staff, the nightclub also profited off of harmful stereotypes of Asian Americans, playing up caricaturistic characterizations of the exotic Chinese to appeal to the white gaze. While Kubla Khan and other nightclubs of the time may have exploited these visions of exoticism, they were also extremely innovative, and revolutionized the way that mainstream America viewed Chinese Americans.</p>
                <p>A predominant example of this innovation was the emergence of an extremely popular dish—chop suey. This was a Cantonese inspired dish which consisted of “…boned chicken, white mushrooms, water chestnuts, bamboo shoots, vegetables, bean sprouts, with sesame and Chef's Special Sauce.”<sup>5</sup> While Kubla Khan sold both Chinese and American entrees, chop suey was extremely popular due to its novelty and palatability to Western tastes. The creation of chop suey accurately represents a new culture that was forming during the Golden Age of Chinese Nightclubs—a culture that was not Chinese and not American, but uniquely Chinese-American.</p>
                <p>Not much is known about the end of the Kubla Khan, except that it went bankrupt and abruptly closed its doors in 1950. Pond’s business partner, Gim Suey Chong, sold his share of the club that same year.<sup>6</sup> According to family accounts, Eddie Pond stayed involved in the Chinatown community by participating in parades and opening various businesses, including a jewelry store. Eventually, Pond worked in insurance until he passed away in 1985.</p>
            </div>
            <details className="citations">
                <summary>References</summary>
                <ul>
                    <li>
                        <sup>1</sup>Foundation, P. <i>Kubla Khan by Samuel Taylor Coleridge</i> (https://www.poetryfoundation.org/). Poetry Foundation; Poetry Foundation. <a href="https://www.poetryfoundation.org/poems/43991/kubla-khan">https://www.poetryfoundation.org/poems/43991/kubla-khan</a>
                    </li>
                    <li>
                        <sup>2</sup>Chong, Raymond Douglas. Kubla Khan: A chinatown gateway. <a href="http://www.flavorandfortune.com/ffdataaccess/article.php?ID=877">http://www.flavorandfortune.com/ffdataaccess/article.php?ID=877</a>.
                    </li>
                    <li>
                        <sup>3</sup>Tamanaha, A. The Kubla Khan At The Gateway of San Francisco Chinatown. <i>AsAmNews</i>. <a href="https://asamnews.com/2019/10/24/the-kubla-khan-at-the-gateway-of-san-francisco-chinatown/">https://asamnews.com/2019/10/24/the-kubla-khan-at-the-gateway-of-san-francisco-chinatown/</a> (2019, October 24).
                    </li>
                    <li>
                        <sup>4</sup>Dong, A. Forbidden City, USA
                    </li>
                    <li>
                        <sup>5</sup>Chong, Raymond Douglas. Kubla Khan: A chinatown gateway. <a href="http://www.flavorandfortune.com/ffdataaccess/article.php?ID=877">http://www.flavorandfortune.com/ffdataaccess/article.php?ID=877</a>.
                    </li>
                    <li>
                        <sup>6</sup>Chong, Raymond Douglas. Kubla Khan: A chinatown gateway. <a href="http://www.flavorandfortune.com/ffdataaccess/article.php?ID=877">http://www.flavorandfortune.com/ffdataaccess/article.php?ID=877</a>.
                    </li>
                </ul>
            </details>
            {/* TODO: Figure out cleaner way to do citations, maybe with a component? */}
            <Footer />
        </div>
    )
}

export default KublaKhan