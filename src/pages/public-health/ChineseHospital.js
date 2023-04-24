import React from 'react';
import Footer from '../../components/Footer';
import "./ChineseHospital.css";
import "../PageStyle.css";

const ChineseHospital = () => {
    return (
        <div className="chinese-hospital-page">
            <div className="chinese-hospital-intro">
                <h2>Overview Narrative of the Chinese Hospital</h2>
                <p>The San Francisco Chinese Hospital has a rich and captivating history that reveals the Chinese American community's responses to its healthcare needs. The hospital serves a diverse patient population, including speakers of Cantonese, Mandarin, and other dialects. In addition to general medical care, the hospital also offers specialized services such as acupuncture, traditional Chinese medicine (TCM), and geriatric care. These services are particularly important to the Chinese community due to its larger aging population, and limited English proficiency among community members.<sup>1</sup> It was founded in 1925 in response to the needs of the Chinese community in San Francisco.</p>
                <p>Despite the relatively well-known history of Chinese immigration and settlement in California, the issue of their access to healthcare is often overlooked.The Chinese community was historically villainized as a public health threat. Chinatown was portrayed as a place filled with “opium fumes, tobacco smoke, and putrefying waste <sup>pervading</sup> the atmosphere.”<sup>2</sup> Not immune to racist ideas of that time, public health investigations supported the notion that Chinese people, because of their distinct culture and biology, posed a threat to white America. The bubonic plague and smallpox epidemics intensified the racialization of disease, and Chinese immigrants were blamed as the culprits of these diseases.<sup>3</sup></p>
                <p>At the same time, Chinese immigrants faced exclusion from social and political institutions, which limited their access to public services such as education and healthcare. Chinese immigrants were required to pay a hospital tax, but were denied access to San Francisco City and County Hospitals, even with severe medical conditions.<sup>4</sup> Distance, violence, and linguistic barriers further hindered Chinese immigrants’ access to healthcare. Thus, Chinese physicians were often the preferred sources of care for Chinese immigrants, as they provided familiar methods of diagnosis and treatment in a more trusted setting. Due to the historic exclusion of Chinese people from Western healthcare institutions, Chinese physicians and TCM are still the preferred sources of care for many families, and San Francisco’s Chinese Hospital remains an important healthcare provider today.</p>
                <br />

                <h2>Chinese Hospital</h2>
                <img src={require('../../assets/images/chinesehosp/image1.jpg')} />
                <sup>5</sup>
                <br />
                <p>The Chinese Hospital stands as a testament to the determination and resilience of the Chinese community in San Francisco, having been established in 1925 to provide much-needed medical care to a population that was historically excluded from Western medical institutions. The hospital was the brainchild of the Chinese Six Companies, a prominent Chinese-American community organization that was founded in 1882. The notion of establishing a hospital specifically for the Chinese community was first introduced in the 1890s, when the Chinese community submitted a petition to the Board of Health requesting permission to do so. Unfortunately, their proposal was met with rejection, as the Board deemed the idea to be both a nuisance and a hazard to the surrounding neighborhood.<sup>6</sup></p>
                <p>Nevertheless, the Chinese community continued to push for a medical facility that would provide comprehensive care to its people. In 1900, the Board of Supervisors finally granted permission for a Chinese dispensary to be opened in Chinatown, which served as a basic medical center for the Chinese community. The drive to establish a comprehensive medical facility persisted over the following two decades, and in 1924, the Chinese Six Companies acquired a building on Jackson Street, which was transformed into a hospital. The hospital officially opened its doors in 1925, consisting of 50 beds and a team of Chinese physicians, nurses, and support staff.</p>
                <p>The Chinese Hospital quickly established itself as an indispensable institution in the Chinese community, offering a range of medical specialties, including surgery, obstetrics, and pediatrics.  Despite the struggles of securing consistent funding during the early years of its establishment, influential figures in the Chinese physician community continued to support the Chinese Hospital.</p>
                <p>The vision of providing a cost effective health care option that serves the needs of the SF Chinatown community has remained the same throughout the years.Today, the hospital has expanded its services and continues to provide high-quality care to the Chinatown community. After receiving the Hill Burton grant in the 1970s, the hospital went beyond offering healthcare facilities and began advocating for education resources through the founding of the Chinese Community Health Care Association (CCHCA). Today, the Chinese Hospital collaborates with its organization partners to better healthcare services, as well as to advocate for greater access of healthcare for underprivileged residents. In doing so, it has expanded community health on a broader scale and built stronger bonds of trust with its patients.<sup>7</sup></p>
                <img src={require('../../assets/images/chinesehosp/image2.png')} />
                <br /><br />
                <img src={require('../../assets/images/chinesehosp/image3.jpg')} />
                <br /><br />
                <img src={require('../../assets/images/chinesehosp/image4.jpg')} />
                <br /><br />
                <p>Its rich and illustrious history spans over a century, and the hospital serves as an emblem of the city's cultural and medical heritage. It is a testament to the resilience and strength of the Chinese community and a symbol of hope and healing for all who walk through its doors. The Chinese Hospital continues to be a vital resource for the San Francisco community, and its legacy of excellence in healthcare will endure for generations to come.</p>
            </div>

            {/* TODO: Figure out cleaner way to do citations, maybe with a component? */}
            <details className="citations">
                <summary>References</summary>
                <ul>
                    <li>
                        <sup>1</sup> Chow, Edward A, Bernard Lau, L. Eric Leung, Richard Loos, and Brenda Yee. “The Development of a Community-Based Integrated Health Care System for the San Francisco Chinese Community.” Chinese America, history and perspectives (2007): 71–.
                    </li>
                    <li>
                        <sup>2</sup> Shah, Nayan. Contagious Divides: Epidemics and Race in San Francisco’s Chinatown. 1st ed. Vol. 7. Berkeley: University of California Press, 2001.
                    </li>
                    <li>
                        <sup>3</sup> Shah, Nayan. Contagious Divides: Epidemics and Race in San Francisco’s Chinatown. 1st ed. Vol. 7. Berkeley: University of California Press, 2001.
                    </li>
                    <li>
                        <sup>4</sup> Chow, Edward A, Bernard Lau, L. Eric Leung, Richard Loos, and Brenda Yee. “The Development of a Community-Based Integrated Health Care System for the San Francisco Chinese Community.” Chinese America, history and perspectives (2007): 71–.
                    </li>
                    <li>
                        <sup>5</sup> “Chinese Hospital: History”, Chinese Hospital, accessed March 31, 2023, <a href="https://chinesehospital-sf.org/history/">https://chinesehospital-sf.org/history/</a>
                    </li>
                    <li>
                        <sup>6</sup> Ibid.
                    </li>
                    <li>
                        <sup>7</sup> Hom, Laureen D. “Early Chinese Immigrants Organizing for Healthcare: The Establishment of the Chinese Hospital in San Francisco.” In Handbook of Asian American Health, 353–362. New York, NY: Springer New York, 2012.
                    </li>
                </ul>
            </details>
            <Footer />
        </div>
    )
}

export default ChineseHospital