import React from 'react';
import Footer from '../../components/Footer';
import "./ModelMinority.css";
import "../PageStyle.css";

const ModelMinority = () => {
    return (
        <div className="model-minority-page">
            <div className="model-minority-intro">
                <br/>
                <h2>The Model Minority Myth</h2>
                <p>The model minority myth categorizes Asian Americans as a socioeconomically successful minority group that is able to achieve social mobility through a high work ethic.<sup>1</sup> The myth is not an innocent description of Asian Americans, but a narrative that does powerful ideological work.<sup>2</sup> The model minority myth weaponizes cases of Asian American success to promote meritocracy as a wedge against Black, Latine, and Indigenous communities. Moreover, it is a stereotype that distorts the realities of poverty and discrimination within Asian American communities, rendering invisible the unique institutional barriers that Asian Americans experience.</p>
                <p>While some Asian Americans are socioeconomically successful, this outcome is not shared across all Asian American communities. When Asian American students are seen as “model minorities,” their struggles are largely ignored in the education system. This is reflected in the lack of targeted and culturally competent resources for Asian American students with limited English proficiency (LEP) and first generation college status. The model minority myth masks the structural causes of education inequality. It erases the unique needs and positionalities of Asian American students, and redirects solutions for educational disparities to individuals rather than institutions. It is thus an important part of understanding how Asian Americans are perceived and treated, as well the role of Asian Americans in a broader U.S. racial context.</p>
                <p>The model minority myth was popularized in the 1960s, when the New York Times published an article called “Success Story, Japanese-American Style.”<sup>3</sup> The article argued that Japanese Americans were able to achieve socio-economic success due to cultural values, a strong work ethic, and emphasis on education. Since then, Chinese Americans have also been subsumed under the model minority label, primarily due to the influx of Chinese Americans in higher education and STEM fields. In education, Asian Americans are perceived as “academic achievers” with high levels of educational attainment. The media has sensationalized the representation of Chinese Americans in elite and predominantly white institutions, such as the Ivy Leagues. This perception reinforces the model minority myth, framing Asian American students as competing with white students for spots at highly selective universities. However, this does not accurately reflect the reality of many Asian American students who attend community college, either to transfer into four year programs or receive other forms of accreditation. More Asian American students are enrolled in the City College of San Francisco (CCSF) system alone than in all eight Ivy Leagues combined, with over 17,000 Asian American students representing 31.8% of total CCSF enrollment.<sup>4</sup> Elite institutions dominate the conversation about Asian American access to higher education, detracting attention and resources from addressing the educational needs of the many more Asian American students in community college systems.</p>
                <p>Located in San Francisco’s Chinatown, the CCSF Chinatown/North Beach campus represents an important site for addressing Chinese American educational disparities. Disaggregating ethnic data by language access, for example, reveals that 44.7% of Chinese Americans have limited English proficiency (LEP) compared to 8.5% of Americans as a whole.<sup>5</sup> Due to language barriers and the lack of in-language resources to support Chinese American students with LEP status, many struggle to navigate “monolingual” courses without adequate English as Secondary Language (ESL) programs. CCSF’s Chinatown/North Beach branch has worked to offer ESL classes, which are popular among Chinese immigrants and elderly people living in Chinatown.<sup>6</sup> Across community college systems and higher education institutions more broadly, however, LEP accommodations remain underfunded and underprovided.</p>
                <p>The model minority myth thus obscures the unique educational barriers faced by Chinese American students. It masks educational disparities as individual problems, comparing under-resourced Chinese American students to their high-performing counterparts. While Chinese Americans come from different backgrounds, the myth suggests that merit is needed to achieve socioeconomic status, rather than institutional support. The model minority myth hypervisibilizes Chinese and Asian Americans as successful minorities, yet invisibilizes the realities of their struggles at the same time. To understand how resource distribution affects Asian American experiences in education, the model minority myth is important to reevaluate and dismantle.</p>
            </div>
            {/* TODO: Figure out cleaner way to do citations, maybe with a component? */}
            <details className="citations">
                <summary>References</summary>
                <ul>
                    <li>
                        <sup>1</sup> City College of San Francisco. n.d. “Chinatown / North Beach Center 三藩市市立大學華埠北岸區分校.” CCSF.
                    </li> 
                    <li>
                        <sup>2</sup> Ng, Jennifer C., Sharon S. Lee, and Yoon K. Pak. 2007. “Contesting the Model Minority and Perpetual Foreigner Stereotypes: A Critical Review of Literature on Asian Americans in Education.” Review of Research in Education 31:95.
                    </li>
                    <li>
                        <sup>3</sup>Petersen, William. 1996. “Success Story, Japanese-American Style.” New York Times.
                    </li>
                    <li>
                        <sup>4</sup>City College of San Francisco. 2020. “CCSF Fact Sheet - Student Demographics.” CCSF.
                    </li>
                    <li>
                        <sup>5</sup>AAPI Data. n.d. “Community Facts.” AAPI Data.
                    </li>
                    <li>
                        <sup>6</sup>City College of San Francisco. n.d. “Chinatown / North Beach Center 三藩市市立大學華埠北岸區分校.” CCSF.
                    </li>
                </ul>
            </details>
            <Footer />
        </div>
    )
}

export default ModelMinority;