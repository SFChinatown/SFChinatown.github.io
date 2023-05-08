import React from 'react';
import Footer from '../../components/Footer';
import "./GoldenDragon.css";
import "../PageStyle.css";

const GoldenDragon = () => {
    return (
        <div className="housing-today-page">
            <div className="housing-today-intro">
                <br/>
                <h2>Golden Dragon Massacre and Organized Crime in 70s Chinatown</h2>
                <div className="imgRow">
                    <div className="imgText">
                        <figure>
                            <img src={require('../../assets/images/goldendragon/image3.jpg')} className="horizontal-img"/>
                            <figcaption><sup>1</sup></figcaption>
                        </figure>
                    </div>
                    <div className="imgText">
                        <figure>
                            <img src={require('../../assets/images/goldendragon/image1.jpg')} className="horizontal-img"/>
                        </figure>
                    </div>
                </div>
                <p>The Golden Dragon Restaurant, today’s Imperial Palace Restaurant, was located at 822 Washington Street, in the heart of Chinatown. Retaining Chinese architectural elegance, the restaurant has been a must-see landmark for tourists. Moreover, the name “金龍” denotes a blessing for the prosperity of the community. However, the massacre that occurred at the restaurant on September 4, 1977 not only shocked the Chinatown community, but also represented one of the most notorious incidents of gang violence citywide. The massacre left five innocent bystanders dead, most of whom were young students. The Golden Dragon Restaurant closed down in January 2006 and reopened a few months later with a new name, Imperial Palace Restaurant, under a different ownership. The Imperial Palace Restaurant is still running today.<sup>2</sup></p>
                <p>The Golden Dragon Massacre was largely the consequence of long-standing conflicts between two groups of youth: American-born Chinese and foreign-born immigrants predominantly from Hong Kong.<sup>3</sup> The two rival gangs involved in the Golden Dragon case were the Joe Fong Boys and the Wah Chings. The Joe Boys, representing predominantly Hong Kong-born immigrants, were founded in the 1960s and called themselves Chung Ching Yee after “Water Margin,” one of the Four Great Classical Novels of Chinese literature. The gang was based in the Richmond and Sunset District in western San Francisco after splintering off from the Wah Ching. The Wah Ching, meanwhile, was initially established by Chinese Americans during the mid-1960s, and operated illegal gambling houses, brothels, extortion rackets, and loan-sharking operations in Southern California. Multiple factors, such as ideologies and personal affairs, complicated the motives behind the conflicts. According to Mimi Chin, the root cause leading to the prevalence of gangs in the Chinatown community during the 60s and 70s was new young immigrants’ struggle with identity and belonging, along with widespread unemployment.<sup>4</sup></p>
                <p>The trigger for the mass shooting at the Golden Dragon was a shootout that occurred a few months earlier in July. Due to a dispute over fireworks sales, Wah Ching members shot and killed a Joe Boy member called Felix Huey in Chinatown's Ping Yuen housing project. As retaliation, Joe Boy members planned a shooting in the Golden Dragon Restaurant, which was allegedly frequented by Wah Ching folks. Despite the fact that Wah Ching members were not harmed at all in the massacre, two suspected Wah Ching gunmen killed two members of the Joe Boys in the wake of the massacre on September 11th.</p>
                <div className="imgText">
                    <figure>
                        <img src={require('../../assets/images/goldendragon/image4.jpg')} className="vertical-img"/>
                        <figcaption><sup>5</sup></figcaption>
                    </figure>
                </div>
                <br/>
                <p>In the wake of the incident, the SF Police formed the Chinatown Gang Task Force that resulted in many arrests and convictions of gang members. It was also uncovered that many of the gang members were an integral part of the Hop Sing Tong, a family association. The FBI got involved and infiltrated the Tongs focusing on Raymond “Shrimp Boy” Chow, who had connections with international crime syndicates called triads (Fong). However, the police faced difficulty in their investigation because Chinatown locals were afraid of gang reprisals for their release of information, which Police Chief Charles Gain criticized as the “subculture of fear" that haunted the community.</p>
                <div className="imgText">
                    <figure>
                        <img src={require('../../assets/images/goldendragon/image2.jpg')} className="vertical-img"/>
                        <figcaption><sup>6</sup></figcaption>
                    </figure>
                </div>
                <br/>
                <p>According to Paul Fong, the leaders of the Chinatown community responded to the massacre by working with community organizations to help stem the conditions that promote gang affiliation and gang violence. Organizations included the Chinatown Youth Center (CYC), Chinatown Community Development Center (CCDC), and Cameron House programs. Later, CYC morphed into a citywide program focusing on violence prevention in and  beyond the Chinatown borders. Given the broad scope of organized crime, local police and the FBI were beyond the resources of local agencies, instead requiring involvement from local police and the FBI.</p>
                <p>In the era of the Golden Dragon Massacre, from 1969 to 1977, 44 people were murdered in gang violence in SF Chinatown alone. Today, gang activities in Chinatown have been dormant for four decades, and the era of organized crime has passed, though white-collar crimes and drug dealing still occur. Nevertheless, the long-lasting aftermath of gang violence is still an unhealed scar for Chinatown.</p>
                <p>For more images from ESL archives: <a href="https://drive.google.com/drive/folders/1KTHvcXi4jBVSSq0IEjgh--trkoczPhwv">Golden Dragon from ESL</a></p>
            </div>
            {/* TODO: Figure out cleaner way to do citations, maybe with a component? */}
            <details className="citations">
                <summary>References</summary>
                <ul>
                    <li>
                        <sup>1</sup>East-West Newspaper, Box 23-3, 1977, Business- Denny’s - Phai, Ethnic Studies Library, University of California, Berkeley
                    </li> 
                    <li>
                        <sup>2</sup>“Juvenile Delinquency in Chinatown,” CTN 57-37 HML AAC ARC 2000-80 1971-1995, Sept. 1-17, 1974, Ethnic Studies Library, University of California, Berkeley
                    </li> 
                    <li>
                        <sup>3</sup>Paul Fong is a retired, Chinatown-born attorney and former parole officer, serving on the CYC Board of Directors for many years.
                    </li> 
                    <li>
                        <sup>4</sup> Mimi Chin is currently a member of Grant Ave. Follies. She is also the widow of the owner of Drag'on A' Go-Go, a famous nightclub located in 49 Wentworth Alley around 1960s. Today, it is Lion’s Den Lounge and Bar running on this address.
                    </li> 
                    <li>
                        <sup>5</sup>Kem Lee Restaurants-Golden Dragon 1965-1967, Box 42:43 , Ethnic Studies Library, University of California, Berkeley
                    </li>
                    <li>
                        <sup>6</sup>“On the Necessity for Collective Action,” CTN 57:37 HML AAC ARC S.F., Ethnic Studies Library, University of Calfornia, Berkeley
                    </li>
                </ul>
            </details>
            <Footer />
        </div>
    )
}

export default GoldenDragon;