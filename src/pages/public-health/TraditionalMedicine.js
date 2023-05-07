import React from 'react';
import Footer from '../../components/Footer';
import "./TraditionalMedicine.css";
import "../PageStyle.css";

const TraditionalMedicine = () => {
    return (
        <div className="traditional-medicine-page">
            <div className="traditional-medicine-intro">
                <h2>Traditional Medicine</h2>
                <div className="imgInText">
                    <div className="text">
                        <p>
                        Chinese herbal medicine, also known as traditional Chinese medicine (TCM), has been an integral part of Asian healthcare for thousands of years. It is a form of traditional medicine that uses natural herbs, roots, and plants to treat a wide range of ailments and illnesses. In San Francisco Chinatown, as well as other Asian American communities throughout the United States, Chinese herbal medicine has remained an important aspect of healthcare, despite the growing popularity of modern medicine.
                        </p>
                        <p>
                        San Francisco Chinatown is a vibrant community that is rich in culture and tradition. This strong connection to the past makes Chinese herbal medicine not only a form of healthcare, but a way of life. Because of its deep roots in Chinese cultural and spiritual beliefs, many Chinese Americans believe that TCM can help to restore balance and harmony within the body.
                        </p>
                        <p>
                        Barriers to accessing western medicine play a role in the popularity of herbal medicine among Chinese immigrants in the United States. Many Chinese immigrants in the United States are uninsured or underinsured, making it difficult to access Western medical care.[2] In addition, language barriers and cultural differences can make it challenging for Chinese immigrants to navigate the western healthcare system, further limiting their access to treatment. For these reasons, many Chinese immigrants turn to traditional Chinese medicine as a more accessible and familiar form of healthcare. In addition to its therapeutic benefits, Chinese herbal medicine plays an important role in the cultural and social fabric of the Asian American community. It is often used as a way to bring people together, whether it be through the sharing of remedies and recipes or through its use in traditional ceremonies and rituals.[3]
                        </p>
                    </div>
                    <div className="imgText">
                    <figure>
                        <img src={require('../../assets/images/traditionalmedicine/image1.png')} className="vertical-img"/>
                        <figcaption>
                            <sup>1</sup>
                        </figcaption>
                    </figure>
                </div>
                </div>
                <br/>
                <br/>
                <p>Community health worker Marilyn Wong noted that many Chinese patients were incredibly knowledgeable about staying healthy and preventing illnesses based on Chinese traditional medical principles, such as the concept of “balance,” which determines which foods can be eaten to treat different conditions. However, this knowledge is often different from a western framework, which is based on a seemingly scientific but actually rather dogmatic approach of believing only what is published and ignoring what is yet unknown, says Wong.</p>
                <p>As healthcare providers and Chinatown organizations continue to improve health equity and accessibility for the community members, there is an observable change in ways people seek health treatment. Many hospitals that serve Chinese residents have integrated TCM into a specialized department, offering acupuncture and traditional medicine prescriptions. This institutional recognition of TCM’s benefits offers a bridge between Chinese and western integrative treatments.</p>
                <p>Wong noted that many Chinese people found Western medicine “too strong” in reference to the side effects of prescribed treatments, while they didn’t feel these issues with TCM. Given these tensions, Wong emphasized the importance of physicians and healthcare workers keeping the conversation open, even if they didn’t agree with patients’ opinions. “You have to make the relationship open enough so they are willing to tell you about the Chinese medicine they are taking or what treatments they are going through.”</p>
                <p>By offering multilingual communication support and personalized health check-ins, healthcare institutions begin to build relationships of trust and reliance with Chinatown residents. A 76-year-old resident told us about her usual healthcare routine during an interview, saying “Usually I go to the hospital, make appointments, it’s pretty convenient. The nurses there speak Cantonese.” Through conversations with acupuncture clinics in Chinatown, we observed that the audience for TCM ranges broadly, from young adults to senior residents. As community members have fought for more equitable healthcare over the past decades, TCM has also become a more commonly accepted alternative treatment for members of the Chinatown community.</p>
            </div>

            {/* TODO: Figure out cleaner way to do citations, maybe with a component? */}
            <details className="citations">
                <summary>References</summary>
                <ul>
                    <li>
                    <sup>1</sup> “San Francisco Chinatown Traditional Medicine,” Kelly Ma, 2023, digital photograph, personal collection, April 12 , 2023.
                    </li>
                    <li>
                    <sup>2</sup>Ng, D. M., & Chan, K. W. (2012). Patterns of complementary and alternative medical therapy use among Chinese-American immigrants with breast cancer. <i>Journal of Alternative and Complementary Medicin</i>, 18(3), 294-300.
                    </li>
                    <li>
                    <sup>3</sup>actors associated with the use of traditional Chinese medicine among Chinese immigrants in the United States. <i>Journal of Immigrant and Minority Health</i>, 22(6), 1231-1240.
                    </li>
                </ul>
            </details>
            <Footer />
        </div>
    )
}

export default TraditionalMedicine