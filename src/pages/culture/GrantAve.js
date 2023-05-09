import React from 'react';
import Footer from '../../components/Footer';
import "./GrantAve.css";
import "../PageStyle.css";

const GrantAve = () => {
    return (
        <div className="grant-ave-page">
            <div className="grant-ave-intro">
                <br/>
                <h2>Grant Avenue Follies</h2>
                <div className="imgText">
                    <figure>
                        <img src={require('../../assets/images/grantave/img1.jpg')} className="horizontal-img"/>
                        <figcaption>Courtesy of Grant Ave. Follies</figcaption>
                    </figure>
                </div>
                <br/>
                <p>The Grant Avenue Follies, based in San Francisco Chinatown, reignite the magic of San Francisco’s Golden Age of Chinese nightclubs. Originally composed of four professional dancers from the 1950s and 60s following doctors’ orders of exercise and physical activity, the Follies are now a robust group of glamorous women who perform all over the world, from Cuba to Shanghai to their hometown of San Francisco. Since their inception in 2003, the Follies have performed at a multitude of venues in San Francisco, such as the Gray Cabaret, On Lok Senior Health Services, Self Help for the Elderly, the VA Hospital, Laguna Honda Hospital, Asian Women Resource Center, and Cowell Theater, amongst others. In addition to their performances, the Grant Ave. Follies perform substantial community work in San Francisco Chinatown, with much of their earnings going back into the Chinatown community.[1]</p>
                <div className="imgText">
                    <figure>
                        <img src={require('../../assets/images/grantave/img2.jpg')} className="horizontal-img"/>
                        <figcaption>Grant Ave. Follies at their rehearsal at the Clarion Performing Arts Center, April 7, 2023</figcaption>
                    </figure>
                </div>
                <br/>
                <div className="imgRow">
                    <div className="imgText">
                        <figure>
                            <img src={require('../../assets/images/grantave/img3.jpg')} className="horizontal-img"/>
                            <figcaption>Left: Coby Yee’s corner, with some of her handmade costumes</figcaption>
                        </figure>
                    </div>
                    <div className="imgText">
                        <figure>
                            <img src={require('../../assets/images/grantave/img4.jpg')} className="horizontal-img"/>
                            <figcaption>Right: Assorted memorabilia</figcaption>
                        </figure>
                    </div>
                </div>
                <p>With their home base at the Clarion Performing Arts Center in San Francisco Chinatown, the Grant Ave. Follies are an integral part of the Chinatown community. Cynthia Yee, founder of the Grant Ave. Follies, and Clara Hsu, a core member of the Follies, lead the Clarion Performing Arts Center as Board President and Executive Director respectively. In 2016, Hsu bought back Clarion after an eleven-year hiatus, and rebranded the long-standing Clarion Music Center as the Clarion Performing Arts Center in 2019. Clarion provided musical resources for the San Francisco Chinatown community for almost 35 years, and now continues to empower the Asian American community in the Bay Area with its arts and cultural programs.[2] The Clarion Performing Arts Center also houses the Showgirl Magic Museum, paying homage to the nightlife performers of the Golden Age.</p>
                <div className="imgText">
                    <figure>
                        <img src={require('../../assets/images/grantave/img5.jpg')} className="horizontal-img"/>
                        <figcaption>Grant Ave. Follies centerpiece at the Showgirl Magic Museum</figcaption>
                    </figure>
                </div>
                <br/>
                <p>Costumes, headdresses, and other memorabilia live at the museum, including beautiful dresses, worn and handmade by Coby Yee, who was known as “China’s Most Daring Dancing Doll,” and even a pair of tap shoes worn by Tony Wing.[3][4] </p>
                <div className="imgText">
                    <figure>
                        <img src={require('../../assets/images/grantave/img6.jpg')} className="horizontal-img"/>
                        <figcaption>Community art wall at Clarion Performing Arts Center</figcaption>
                    </figure>
                </div>
                <br/>
                <p>The Grant Ave. Follies are redefining what it means to bring joy into their community, and their own lives, with every performance they do — that’s the Follies’ mission. And they are anything but quiet meek old ladies: in the words of Cynthia Yee, “I think everywhere that we go, whether it’s to a restaurant or anything, we do attract a lot of attention. And not only because we make a lot of noise, but because, you know, we would normally get our hair done, and we normally put on makeup. And people want to know who we are. And because we’re not the average 75, 80, 85 year old person, everybody, young people come up to us and say, “Wow, you look fantastic.” I wish my grandma could join you.” They bring this energy to their <a href="http://grantavenuefollies.com/gai-mou-sou-rap/">Gai Mou Sou Rap</a>, speaking up against anti-Asian hate crimes towards the elderly, and to their <a href="http://grantavenuefollies.com/glammas-wrap/">Glammas Wrap</a>, celebrating the richness of the Chinese American experience.[5][6] They also want to inspire the younger generation to chase their dreams.</p>
                <p>Mimi Chin, one of the Follies, holds the sentiment that there’s so much in the world to see — don’t just sit there and think about it, go out and experience it.</p>
                <p>Marlene Luke, another Follie: “Build on it. Stick on it. Come out of your skin."</p>
                <p>Emily Wong: “Oh, go for it. But it’s not easy. You have to be persistent. And help each other out.”</p>
                <p>Finally, from Avis See-tho: “Be open-minded. And you know, not one is better than the other. Everything has its meaning, so don’t just say, oh, I hate that. Be open-minded to it.”</p>
                <p>These are the values that the Grant Avenue Follies embody: joy, hope, and pure glamour. If you’d like to see the Follies in action, they perform monthly at the Lion’s Den in San Francisco Chinatown. Or maybe you’ll catch them having siu-yeh in San Francisco’s Chinatown after one of their rehearsals.</p>
            </div>
            {/* TODO: Figure out cleaner way to do citations, maybe with a component? */}
            <details className="citations">
                <summary>References</summary>
                <ul>
                    <li>
                        <sup>1</sup><a href="http://grantavenuefollies.com/">http://grantavenuefollies.com/</a>
                    </li> 
                    <li>
                        <sup>2</sup><a href="https://www.theclarionsf.org/about-us">https://www.theclarionsf.org/about-us</a>
                    </li> 
                    <li>
                        <sup>3</sup><a href="http://grantavenuefollies.com/coby-yee/">http://grantavenuefollies.com/coby-yee/</a>
                    </li> 
                    <li>
                        <sup>4</sup><a href="http://grantavenuefollies.com/showgirl-magic-museum/">http://grantavenuefollies.com/showgirl-magic-museum/</a>
                    </li> 
                    <li>
                        <sup>5</sup><a href=" http://grantavenuefollies.com/gai-mou-sou-rap/"> http://grantavenuefollies.com/gai-mou-sou-rap/</a>
                    </li>
                    <li>
                        <sup>6</sup><a href="http://grantavenuefollies.com/glammas-wrap/">http://grantavenuefollies.com/glammas-wrap/</a>
                    </li>
                </ul>
            </details>
            <Footer />
        </div>
    )
}

export default GrantAve;
