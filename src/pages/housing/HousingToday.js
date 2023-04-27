import React from 'react';
import Footer from '../../components/Footer';
import "./HousingToday.css";
import "../PageStyle.css";

const HousingToday = () => {
    return (
        <div className="housing-today-page">
            <div className="housing-today-intro">
                <br/>
                <h2>Housing and Community Organizing in Chinatown Today</h2>
                <p>Today, Chinatown continues to grapple with housing affordability, especially for its low-income and elderly residents. The median household income in Chinatown is $21,000 compared to $88,000 in San Francisco as a whole, and 26% of its population is over 65 years old, compared to 14% in the city overall.<sup>1</sup> Ping Yuen, Mei Lun Yuen, and the I-Hotel remain cornerstones in the neighborhood’s affordable housing landscape. Notably, Chinatown’s housing market is defined by Single Room Occupancy (SRO) units; its 15,000 SROs constitute the majority of housing stock in the neighborhood. SROs serve as a crucial source of affordable housing, especially for elderly residents and new Chinese immigrants to the city. Increasingly, because of skyrocketing housing costs throughout the city, entire families would live in SROs that were meant for fewer occupants. An increasing number of SRO buildings have also been put on sale in recent years by descendants of families who owned SROs. While in some cases the buildings have been converted to nonprofit ownership by community organizations, private investors may buy the properties and subsequently raise rents, risking the elimination of one of the last affordable housing options in the city.<sup>2</sup></p>
                <p> However, the robust culture of community organizations and activists groups remains. Notably, the Chinatown Community Development Center (CCDC), which has its roots in the I-Hotel eviction struggle, has evolved into a leading community development organization with a portfolio of units accommodating over 4,500 low-income families and seniors.<sup>3</sup> The Chinese Progressive Association, founded in 1972, engages in extensive tenant and worker organizing, and continues Chinatown’s tradition of youth activism through its Youth MOJO (Movement for Justice and Organizing) leadership development program for low-income Chinese American youth.<sup>4</sup></p>
                <p> As for the I-Hotel, since its reopening in 2005, it has served as a crucial source of housing for low-income elderly people in Chinatown, and the Manilatown Heritage Foundation continues to serve the community by providing community space and holding cultural events like jazz and dance nights, Ilocano language classes, and art exhibits. The Manilatown Heritage Foundation’s space at the I-Hotel also houses art and photographs from the I-Hotel struggle, as well as pieces of the original I-Hotel walls obtained after demolition. Their goal is to support the Filipino community in San Francisco and preserve the history of Manilatown for future generations.</p>
                <div className="imgRow">
                    <div className="imgText">
                        <figure>
                            <img src={require('../../assets/images/housingtoday/image1.png')} className="vertical-img"/>
                        </figure>
                    </div>
                    <div className="imgText">
                        <figure>
                            <img src={require('../../assets/images/housingtoday/image2.png')} className="vertical-img"/>
                        </figure>
                    </div>
                </div>
                <br/>
                <p>The history of the I-Hotel struggle lives on in one original tenant who has since returned to live at the I-Hotel. Jeanette Lazam, 74, spoke with us during our visit to the I-Hotel. Jeanette Lazam was a community worker and organizer in Manilatown when she first became involved with the I-Hotel. She went on to join the KDP and later moved into the I-Hotel to work more closely with the tenants to resist the eviction. Reflecting on her experience during the anti-eviction struggle, she noted that it demonstrated the importance of unity in social movements, as well as how to engage people in social and political issues in an accessible, inclusive way. She explained that activists were most successful in mobilizing and educating tenants when they did so in an easy-to-understand, pragmatic manner that resonated with tenants’ day-to-day concerns. “You take people where they're at, not where you think they're at, [or] where you want them to be,” she said. “You cannot substitute your reality for theirs.”<sup>5</sup></p>
                <p>For instance, Lazam spoke of one tenant she was particularly close to: manong Wahat Tampao. At first, she described Tampao as someone who “could not be bothered” about the eviction. However, after gradually building their relationship and raising his political consciousness around  the class-based dimension of the eviction struggle, Lazam said, “he was the most outspoken proponent of stopping the eviction, [and] by the close of the struggle, he had a clear understanding of the situation as a struggle for “housing for low-income people.” Lazam and Tampao became extremely close, and they walked out of the I-Hotel together on eviction morning. “That's the kind of relationship you need if you're going to do community organizing,” Lazam said. “You have to know the people, and you have to work with them on a day to day level, and you take them where they're at. And then you slowly, consciously, methodically build their strength, build their political consciousness.”</p>
                <div className="imgRow">
                    <div className="imgText">
                        <figure>
                            <img src={require('../../assets/images/housingtoday/image3.png')} className="vertical-img"/>
                        </figure>
                    </div>
                    <div className="imgText">
                        <figure>
                            <img src={require('../../assets/images/housingtoday/image4.png')} className="vertical-img"/>
                        </figure>
                    </div>
                </div>
                <br/>
                <p>For many years after the eviction, Lazam stayed away from the I-Hotel. The emotions associated with the site were  too overwhelming. Eventually, however, after moving back to the Bay Area and overcoming health issues, Lazam was offered a spot in the new I-Hotel due to her status as a former tenant. Without other feasible affordable housing options, she moved back to the I-Hotel in 2018. Now, having become a community elder, a <i>manang</i>, and an artist, she continues to be involved with the Manilatown Heritage Foundation.</p>
                <p>For Lazem, returning to the hotel has not been without difficulties. When she stepped foot into the hotel for the first time in decades, she “thought [other former tenants]  were going to be there.” She explained, “And that's why it's been really hard for me to return, because they're not here. And I miss them … There’s not a day that [goes] by that I don't think about them, that I don't hear their voices, that I don't hear their laughter and [remember] how they treated me.”</p>
                <p>“It’s beautiful,” Lazam said of the modern-day I-Hotel. However, as the last living original tenant, she wished that it could have been rebuilt in time for other original tenants to return home. “They could’ve spent their last days back in their home. And it could have been another community again… Because that's the way they were … But by the time this building was built and people started to move in, [the original tenants] were already gone. And so, they're here [in] spirit.  I just wish their bodies would have been here.”</p>
                <p>Looking forward, Lazam expressed hope that the Filipino community in San Francisco would continue to grow, and that Manilatown would come to flourish again. “I hope that more Filipinos move in here. Because it is Manilatown. And it's important that this part of San Francisco maintain itself. And the only way it maintains itself is not by signs alone that say Maniltown. It's backed up by a community of people that live and even work here in this city. That's what I want. It's kind of like what Wahat said: ‘housing for low income people.’”</p>
            </div>
            {/* TODO: Figure out cleaner way to do citations, maybe with a component? */}
            <details className="citations">
                <summary>References</summary>
                <ul>
                    <li>
                        <sup>1</sup>Jason Xu. “San Francisco Chinatown Neighborhood Health Conditions and Status,” San Francisco Department of Public Health, August 20, 2019, <a href="https://www.sfdph.org/dph/hc/HCAgen/2019/August%2020/FINAL_Health%20Commission%20Chinatown.pdf">https://www.sfdph.org/dph/hc/HCAgen/2019/August%2020/FINAL_Health%20Commission%20Chinatown.pdf</a>.
                    </li> 
                    <li>
                        <sup>2</sup> J.K. Dineen. “A wave of SRO listings have set Chinatown on edge: ‘The next generation doesn’t want anything to do with these buildings,’” San Francisco Chronicle, March 22, 2022, <a href="https://www.sfchronicle.com/sf/article/A-wave-of-SRO-listings-have-set-Chinatown-on-17019228.php">ttps://www.sfchronicle.com/sf/article/A-wave-of-SRO-listings-have-set-Chinatown-on-17019228.php</a>.
                    </li> 
                    <li>
                        <sup>3</sup> “Our Portfolio,” Chinatown Community Development Center, <a href="https://www.chinatowncdc.org/our-housing/our-portfolio">https://www.chinatowncdc.org/our-housing/our-portfolio</a>.
                    </li> 
                    <li>
                        <sup>4</sup> Chinese Progressive Association, <a href="https://cpasf.org/">https://cpasf.org/</a>.
                    </li> 
                    <li>
                        <sup>5</sup> Jeanette Gandioco Lazam (original and current I-Hotel tenant) in discussion with Emily Ho and Vivian Kuang, San Francisco, March 2023.
                    </li>
                </ul>
            </details>
            <Footer />
        </div>
    )
}

export default HousingToday;