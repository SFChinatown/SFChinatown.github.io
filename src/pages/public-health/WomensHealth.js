import React from 'react';
import Footer from '../../components/Footer';
import "./WomensHealth.css";
import "../PageStyle.css";

const WomensHealth = () => {
    return (
        <div className="womens-health-page">
            <div className="womens-health-intro">
                <h2>Women's Health</h2>
                <p>Throughout the nineteenth century, Chinese women were frequently stereotyped as either “harbingers of venereal diseases” like syphilis, or as “unenlightened spouses” of merchants who were incapable of furthering their family's prosperity.<sup>1</sup> In stark contrast to white middle-class women, who symbolized a healthy home life, Chinese immigrant women were objects of hypersexualization and exoticism in the popular imagination.</p>
                <div className="imgText">
                    <figure>
                        <img src={require('../../assets/images/womenshealth/image1.png')} className="horizontal-img"/>
                        <figcaption>
                            <sup>2</sup>Tien Fuh Wu (standing in the back, on the left) and Donaldina Cameron (seated, center), with a group of women who may have been Mission Home staffers. Photo by Louis B. Stellman, California State Library.
                        </figcaption>
                    </figure>
                </div>
                <br/>
                <p>Because white physicians and missionaries believed that proper femininity was crucial to fostering a healthy middle-class family, Chinese women became particular targets of reform. Driven by Protestant missionary goals, white women sought to “civilize” other cultures by teaching domestic skills both in the United States and abroad.<sup>3</sup> In San Francisco, this effort focused on Chinese immigrant women, who faced criticism from city leaders for threatening the “white race” by lowering wages, defying authority, and spreading diseases in the 1870s and 1880s.<sup>4</sup> Through initiatives like the Chinese Mission Home, white women aimed to turn Chinese women into domestic servants, teachers, and middle-class housewives. These missionaries hoped that promoting Christian values and "civilized" domesticity would transform Chinatown and establish a more acceptable family structure among the Chinese community.</p>
                <p>As healthcare providers and Chinatown organizations continue to improve health equity and accessibility for the community members, there is an observable change in ways people seek health treatment. Many hospitals that serve Chinese residents have integrated TCM into a specialized department, offering acupuncture and traditional medicine prescriptions. This institutional recognition of TCM’s benefits offers a bridge between Chinese and western integrative treatments.</p>
                <p>Even though missionaries focused on introducing Christian values, this approach largely ignored the root causes behind health disparities in Chinatown. Missionary concerns over Chinatown’s cleanliness failed to address the discriminatory laws and social norms that restricted Chinese immigrants to living in cramped quarters. The inadequate facilities for sanitation and hygiene in these neighborhoods were exacerbated by neglect and underinvestment in public services. The lack of political representation for Chinese Americans also meant that they had little ability to shape decisions related to urban planning and infrastructure. Addressing these systemic issues was necessary to improve the living conditions of the Chinese American community.</p>
                <p>In the 1920s and 1930s, Chinese American social workers used ideas of hygiene and domesticity to argue for better access to social services and housing. They highlighted educated Chinese American housewives as examples of American middle-class culture, challenging stereotypes and claiming their right to civic participation and resources. A prominent figure during this period was Dr. Margaret Chung, the first American-born Chinese woman to become a physician. Known as “Mom Chung,” she became famous during World War II for her patriotism, sending care packages to troops and hosting weekly Sunday suppers for regular soldiers and prominent figures. Despite her wartime celebrity status, she was never given public credit due to her age, race, disruption of gender norms, and suspected relationships with other women.<sup>5</sup></p>
                <div className="imgText">
                    <figure>
                        <img src={require('../../assets/images/womenshealth/image2.png')} className="vertical-img"/>
                    </figure>
                </div>
                <br/>
                <p>“Women of every nation, every country, should learn medicine, so that they can teach the women of their countries and their races how to care for themselves and their children—how to improve the coming generation.” Margaret Chung, Los Angeles Herald profile, 1914<sup>6</sup></p>
                <p>Today, Chinese immigrant women in the United States continue to face unique health challenges and disparities, including limited access to culturally sensitive reproductive healthcare, prenatal care, and breast and cervical cancer screenings. Mental health concerns such as anxiety, depression, and PTSD also arise from the stress of immigration, acculturation, and discrimination, but often go untreated due to cultural stigma and lack of appropriate services. Additionally, these women may be at a higher risk for chronic illnesses, experience barriers to healthcare access, and face domestic violence or abuse, with limited resources for support. Many work in low-wage, labor-intensive jobs, increasing their risk of work-related injuries or illnesses. Addressing these health issues necessitates culturally sensitive and linguistically appropriate health care services, as well as targeted health education and outreach programs for Chinese immigrant women.</p>
                <p>
                Fortunately, efforts have been made to improve health care access and services for Chinese immigrant women. Community-based organizations such as the Chinatown Public Health Center offer a full array of services, including community health education and specific programs like the Women, Infants, and Children (WIC) Special Supplemental Nutrition Program.<sup>7</sup> Collaboration between healthcare providers, policymakers, and community organizations is necessary to develop targeted solutions that address the contemporary healthcare concerns of Chinese immigrant women. By advocating for more equitable access to healthcare services, resources, and education, we can work towards a more inclusive healthcare system that caters to the diverse needs of all communities in the United States.
                </p>
            </div>

            {/* TODO: Figure out cleaner way to do citations, maybe with a component? */}
            <details className="citations">
                <summary>References</summary>
                <ul>
                    <li>
                    <sup>1</sup>Shah. (2001). <i>Contagious divides : epidemics and race in San Francisco’s Chinatown</i>. University of California Press.
                    </li>
                    <li>
                    <sup>2</sup>Louis B. Stellman, "Tien Fuh Wu (standing in the back, on the left) and Donaldina Cameron (seated, center), with a group of women who may have been Mission Home staffers," photograph, California State Library
                    </li>
                    <li>
                    <sup>3</sup>Shah. (2001). <i>Contagious divides : epidemics and race in San Francisco’s Chinatown</i>. University of California Press.
                    </li>
                    <li>
                    <sup>5</sup>The Legacy Project. "Dr. Margaret Chung - Inductee." The Legacy Project Chicago. Accessed April 20, 2023. <a href="https://legacyprojectchicago.org/person/margaret-chung">https://legacyprojectchicago.org/person/margaret-chung</a>.   
                    </li>
                    <li>
                    <sup>6</sup>"Chinese Girl Here Studying Medicine." Los Angeles Herald, October 14, 1914, Vol. XLI, No. 350, p. 2. California Digital Newspaper Collection. <a href="https://cdnc.ucr.edu/cgi-bin/cdnc?a=d&d=LAH19141014-02.2.296">https://cdnc.ucr.edu/cgi-bin/cdnc?a=d&d=LAH19141014-02.2.296</a>.
                    </li>
                    <li>
                        <sup>7</sup>SF.GOV, “Chinatown Public Health Center”, SF.GOV, 1 April 2023, <a href="https://sf.gov/location/chinatown-public-health-center">https://sf.gov/location/chinatown-public-health-center</a>
                    </li>
                </ul>
            </details>
            <Footer />
        </div>
    )
}

export default WomensHealth