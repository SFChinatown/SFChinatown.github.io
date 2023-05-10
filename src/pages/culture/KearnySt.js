import React from 'react';
import Footer from '../../components/Footer';
import "./KearnySt.css";
import "../PageStyle.css";
import { Carousel } from 'react-bootstrap';

const KearnySt = () => {
    return (
        <div className="kearny-st-page">
            <div className="kearny-st-intro">
                <br/>
                <h2>Kearny Street Workshop: Supporting Arts in Chinatown for 50 years</h2>
                <p>Kearny Street Workshop (KSW) is the oldest Asian Pacific American multidisciplinary arts organization in the county. The mission of KSW is to produce and promote art that empowers Asian Pacific American artists and communities.[1] The nonprofit organization was founded in 1972, during the peak of the Asian American cultural movement, as a grassroots arts collective located on the edge of San Francisco Chinatown.</p>
                <p>KSW is deeply tied to the history of Asian American social and political movements in the 20th century. In fact, its origins are inextricably linked with the fight to save the International Hotel, which fought for the rights of elderly Asian tenants. KSW started something not seen by Asian American artists before: community organizing through art. The organization was founded by artists Jim Dong, Lora Jo Foo, and Michael Chin, all of whom were involved in local community organizing efforts at the time.[2] Their grassroots activities, such as creating silk screened posters for the I-Hotel protests, attracted new artists including Nancy Hom, a multimedia artist originally from New York City, who would eventually become KSW’s Executive Director from 1995 to 2003.</p>
                <p className='callout'>“Everything was forming then so it was really exciting to be part of that movement… the I-Hotel was part of wanting to connect with Asian Americans… -I knew about fighting for homes for seniors who looked like my grandparents and we were all sort of part of the same struggle… we visited the I-Hotel and, lo and behold, there was a workshop on the ground floor, and it was Kearny Street Workshop…and I kind of wanted to be part of that.” <br/> - Nancy Hom, interview on March 23, 2023 </p>
                <p>Since its origin, KSW has supported artists whose work has been influenced by the challenges and celebrations of their communities. KSW operated on the ground floor of the I-Hotel alongside other community organizations, and worked closely with organizations such as the nearby Chinese Cultural Center. Their members were often at the center of Chinatown organizing, including protests for affordable housing and labor rights. KSW artists documented their experiences and helped disseminate information about protests via posters and newsletters. They also taught classes to individuals who were brought together under the common purpose to use their art to serve their community. As Nancy Hom recalls, <i>“There was something offered by Kearny Street Workshop on a daily basis.”</i></p>
                <p>1974 was a turning point for Kearny Street Workshop. Acquiring the space formerly known as the Jackson Street Gallery gave the organization enough space for performances and two floors of exhibits, which enabled them to explore different artistic outlets such as curated exhibitions, music and dance performances, and theater.</p>
                <p>KSW was initially founded as the only space where Chinatown and Manilatown youth could gather and explore arts programming, but eventually opened their resources to artists of all ages as more platforms emerged for young artists. KSW was part of a movement that pushed the boundaries of Asian American art and culture through mediums including (though not limited to) jazz, small press publications, silkscreen posters, and public murals.</p>
                <p>Today, KSW provides a platform for Asian and Pacific Islander artists to show their work and foster a network through classes, workshops, exhibitions, performances, screenings, and other programming. In its 50 years of operation, it has helped to launch thousands of API artists including Ali Wong, Hasan Minhaj, and Hellen Jo.[3][4] As pioneers in showcasing API arts, they were the first to present an exhibition on the Angel Island detention barracks, to publish Filipino American poetry, and to organize an Asian American jazz festival.[5]</p>
                <p>Their organizing principles include: Solidarity, Renewal, Futurity, and Autonomy. Through these principles they hope to amplify APA voices, whether related to contemporary issues or lesser known histories.</p>
                <p>KSW’s programming has evolved alongside its community. What has remained consistent is the organization’s resolve to increase Asian American representation, not only in the arts sector but also in the broader sociopolitical landscape of the United States.</p>
                <Carousel className="kearny-carousel">
                    <Carousel.Item>
                        <img className="d-block w-100" src={require("../../assets/images/kearnyst/img1.png")} />
                        <Carousel.Caption>
                            <p>Source: <a href="https://www.kearnystreet.org/events-blog/2022/5/17/around-the-community-the-paths-weve-blazed-how-the-i-hotel-ignited-the-apa-arts-scene">https://www.kearnystreet.org/events-blog/2022/5/17/around-the-community-the-paths-weve-blazed-how-the-i-hotel-ignited-the-apa-arts-scene.</a>.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require("../../assets/images/kearnyst/img2.png")} />
                        <Carousel.Caption>
                            <p>Source: <a href="https://kaya.com/2012/06/ksw-hiring/">https://kaya.com/2012/06/ksw-hiring/</a>.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require("../../assets/images/kearnyst/img3.png")} />
                        <Carousel.Caption>
                            <p>Source: <a href="https://www.aasc.ucla.edu/aascpress/mm/images/gallery/Kearny%20St_1%20Views%20-%2011.jpg">https://www.aasc.ucla.edu/aascpress/mm/images/gallery/Kearny%20St_1%20Views%20-%2011.jpg</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require("../../assets/images/kearnyst/img4.png")} />
                        <Carousel.Caption>
                            <p>Source: <a href="https://calisphere.org/item/ark:/13030/kt300032r0/">https://calisphere.org/item/ark:/13030/kt300032r0/</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require("../../assets/images/kearnyst/img5.png")} />
                        <Carousel.Caption>
                            <p>Source: <a href="https://bampfa.org/event/kearny-street-workshop-evolving-legacy">https://bampfa.org/event/kearny-street-workshop-evolving-legacy</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require("../../assets/images/kearnyst/img6.png")} />
                        <Carousel.Caption>
                            <p>Source: <a href="https://bampfa.org/event/kearny-street-workshop-evolving-legacy">https://bampfa.org/event/kearny-street-workshop-evolving-legacy</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require("../../assets/images/kearnyst/img7.png")} />
                        <Carousel.Caption>
                            <p>Source: <a href="https://www.library.ucsb.edu/special-collections/cema/kearny">https://www.library.ucsb.edu/special-collections/cema/kearny</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require("../../assets/images/kearnyst/img8.png")} />
                        <Carousel.Caption>
                            <p>Source: <a href="https://somawestcbd.org/go/kearny-street-workshop">https://https://somawestcbd.org/go/kearny-street-workshop</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require("../../assets/images/kearnyst/img9.png")} />
                        <Carousel.Caption>
                            <p>Source: <a href="https://datebook.sfchronicle.com/entertainment/how-kearny-street-workshop-created-a-platform-for-asian-american-artists-in-the-bay-area">https://datebook.sfchronicle.com/entertainment/how-kearny-street-workshop-created-a-platform-for-asian-american-artists-in-the-bay-area</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require("../../assets/images/kearnyst/img10.png")} />
                        <Carousel.Caption>
                            <p>Source: <a href="https://datebook.sfchronicle.com/entertainment/how-kearny-street-workshop-created-a-platform-for-asian-american-artists-in-the-bay-area">https://datebook.sfchronicle.com/entertainment/how-kearny-street-workshop-created-a-platform-for-asian-american-artists-in-the-bay-area</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* TODO: Figure out cleaner way to do citations, maybe with a component? */}
            <details className="citations">
                <summary>References</summary>
                <ul>
                    <li>
                        <sup>1</sup>“Kearny Street Workshop.” 2023. Kearny Street Workshop. April 16, 2023. <a href="https://www.kearnystreet.org">https://www.kearnystreet.org</a>.
                    </li> 
                    <li>
                        <sup>2</sup>“NANCY HOM ARTS.” n.d. Nancyhomarts.Com. Accessed April 6, 2023.  <a href="http://www.nancyhomarts.com/nancyhomarts.com/Talks/Entries/2009/3/24_Kearny_Street_Workshop_Eras.html">http://www.nancyhomarts.com/nancyhomarts.com/Talks/Entries/2009/3/24_Kearny_Street_Workshop_Eras.html</a>.
                    </li> 
                    <li>
                        <sup>3</sup>Clark, Nicole. 2019. “How Kearny Street Workshop Created a Platform for Asian American Artists in the Bay Area.” <i>SF Chronicle</i>, October 22, 2019. <a href="https://datebook.sfchronicle.com/entertainment/how-kearny-street-workshop-created-a-platform-for-asian-american-artists-in-the-bay-area">https://datebook.sfchronicle.com/entertainment/how-kearny-street-workshop-created-a-platform-for-asian-american-artists-in-the-bay-area</a>.
                    </li> 
                    <li>
                        <sup>4</sup>“PapaLoDown Agency— ‘To Imagine Is to Exist:’ Kearny Street Workshop Celebrates 50 Years as a Vital Arts Organization in California for Asian Americans.” n.d. Accessed April 6, 2023. <a href="https://www.papalodown.com/lodown/to-imagine-is-to-exist-kearny-street-workshop-celebrates-50-years">https://www.papalodown.com/lodown/to-imagine-is-to-exist-kearny-street-workshop-celebrates-50-years</a>.
                    </li> 
                    <li>
                        <sup>5</sup><i>CBS News</i>. 2021. “San Francisco’s Kearny Street Workshop Provides Voice To Asian-American Artists - CBS San Francisco,” May 30, 2021. <a href="https://www.cbsnews.com/sanfrancisco/news/san-franciscos-kearny-street-workshop-provides-voice-to-asian-american-artists/">https://www.cbsnews.com/sanfrancisco/news/san-franciscos-kearny-street-workshop-provides-voice-to-asian-american-artists/</a>.
                    </li>
                </ul>
            </details>
            <Footer />
        </div>
    )
}

export default KearnySt;
