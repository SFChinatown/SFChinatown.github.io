import React from 'react';
import Footer from '../../components/Footer';
import "./MentalHealth.css";
import "../PageStyle.css";

const MentalHealth = () => {
    return (
        <div className="mental-health-page">
            <div className="mental-health-intro">
                <h2>Asian Mental Health</h2>
                <p>Our modern understanding of mental health in the United States originated in the early 1900s, when activists and reformers helped establish the concept of “mental hygiene,” espousing psychotherapy as a viable cure for certain mental health conditions.<sup>1</sup> Throughout American history, the evolution of psychotherapy has led to the medicalization of emotions and mental wellness – the application of diagnostic labels to human emotions or behaviors that are deemed unpleasant, abnormal, or undesirable.<sup>2</sup> Despite developments in the discourse and awareness of mental health in the United States, similar developments were not present in the Chinese American community in the early 20th century. American concepts of mental health focused on individualistic notions of self-improvement, which conflicted with more collectivist values in Chinese culture.</p>
                <p>Mental health continues to be a misunderstood and stigmatized topic within the Chinese American community. In more traditional Chinese communities, mental illness may be viewed as a weakness or a personal flaw rather than a medical condition. Rather than seeking external assistance or treatment, Chinese culture emphasizes strategies like avoiding morbid and negative thoughts as a solution to mental health issues.<sup>3</sup> This stigma can prevent individuals from seeking help, and can contribute to a sense of shame and isolation. Additionally, collectivist values and more traditional family roles can make it difficult for individuals to acknowledge and address their own mental health needs, as they may feel pressure to prioritize the needs of their family or community above their own. Psychological distress among Chinese American children is often magnified as their roles and values at home may contradict their roles and values in school. The model minority myth creates particularly damaging expectations, as people struggle to live up to the portrayals of Asians as obedient, smart, and financially successful. This stereotype places additional pressure on Chinese and Asian American communities, while also undermining the experiences of those who fall outside of the model of white capitalist success.<sup>4</sup></p>
                <p>Historically, San Francisco Chinatown has consisted of low-income migrants who face additional stressors. According to a 2015 article in the San Francisco Chronicle, the median household income is $91,938 in San Francisco, compared to Chinatown’s median household income of $25,909.<sup>5</sup> With around 50% of residents having limited English proficiency, language barriers continue to pose a challenge for socioeconomic integration, playing a large role in Chinatown residents’ struggle with high poverty and unemployment rates.<sup>6</sup> Several additional factors mean that resources are spread thinly in Chinatown households, including the presence of larger households and larger populations of elderly and youth, further contributing to psychological distress within the Chinatown community.<sup>7</sup></p>
                <p>Despite these challenges, San Francisco’s Chinese American community has developed measures to address mental health in the Chinatown community. The Chinatown Public Health Center provides a range of mental health services, including therapy, medication management, and case management. Community-based organizations like Chinese for Affirmative Action and the Asian Women's Resource Center offer mental health resources and support. The Chinatown Child Development Center (CCDC) recently celebrated its 50 year anniversary in 2022, and since then, has been advocating to reduce stigma and misunderstanding surrounding mental health among parents and caregivers. In an interview with local media, CCDC Director Linda Wu said the COVID-19 pandemic has increased the severity of mental health issues in children and youth, requiring more comprehensive long-term treatment. The pandemic has intensified young people’s fears for their own and family’s safety, along with discrimination and bullying in schools.<sup>8</sup> </p>
                <div className="imgText">
                    <figure>
                        <img src={require('../../assets/images/mentalhealth/image1.jpg')} className="horizontal-img"/>
                    </figure>
                </div>
                <p>While there are community-based organizations and mental health providers offering services, there is still a significant need for increased funding and resources to expand the reach and availability of mental health services in the community. Joyce Cheng, Executive Director of the Chinese Community Health Resource Center, emphasized the role that the Chinese Hospital will play in this effort. Its goals include improving access and provision of mental health support and services over the next few years, along with more linguistically appropriate services.  Language barriers remain a significant challenge, as many individuals in the Chinatown community primarily speak Cantonese or Mandarin. While there are some mental health providers who offer services in these languages, there may be limited availability, and individuals may face challenges navigating the healthcare system.</p>
                <p>Therefore, culturally relevant, linguistically appropriate, and adaptive care is a crucial pathway to increasing mental health services and supporting the diverse needs of the San Francisco Chinatown community. Despite efforts to increase mental health awareness, stigma is still a significant barrier to accessing care for many individuals. Additionally, there may be a lack of trust in Western-style mental health treatments among community members, who may prefer alternative therapies including traditional Chinese medicine (TCM) and mind-body practices such as meditation, qigong, and taichi. Efforts to reduce stigma, increase accessibility, and provide culturally competent care can help to improve mental health outcomes in the Chinatown community and support overall wellbeing.</p>
            </div>

            {/* TODO: Figure out cleaner way to do citations, maybe with a component? */}
            <details className="citations">
                <summary>References</summary>
                <ul>
                    <li>
                    <sup>1</sup> Bertolote J. The roots of the concept of mental health. <i>World Psychiatry</i>. 2008;7(2):113-6.
                    </li>
                    <li>
                    <sup>2</sup>Chadoff P. The Medicalization of the Human Condition. <i>Psychiatric Services</i>. May, 2008. Vol 53, Issue 5.
                    </li>
                    <li>
                    <sup>3</sup>Frontiers, “Beyond ‘somatization’ and ‘psychologization’: symptom-level variation in depressed Han Chinese and Euro-Canadian outpatients”,Frontiers, 1 April 2023, <a href="https://www.frontiersin.org/articles/10.3389/fpsyg.2013.00377/full">https://www.frontiersin.org/articles/10.3389/fpsyg.2013.00377/full</a>; NPR, “6 Charts That Dismantle The Trope Of Asian Americans As A Model Minority”, NPR, 1 April 2023, <a href="https://www.npr.org/2021/05/25/999874296/6-charts-that-dismantle-the-trope-of-asian-americans-as-a-model-minority">https://www.npr.org/2021/05/25/999874296/6-charts-that-dismantle-the-trope-of-asian-americans-as-a-model-minority</a>
                    </li>
                    <li>
                    <sup>4</sup> Ibid.
                    </li>
                    <li>
                    <sup>5</sup> Katherine Kam, "Families Live Jammed into Chinatown Rooms with No Space for Social Distancing." San Francisco Chronicle, November 30, 2015. <a href="https://www.sfchronicle.com/bayarea/article/Families-live-jammed-into-Chinatown-rooms-with-6663902.php">https://www.sfchronicle.com/bayarea/article/Families-live-jammed-into-Chinatown-rooms-with-6663902.php</a>.
                    </li>
                    <li>
                    <sup>6</sup>Wang, L. Ling-chi. “Chinatown in Transition.” <i>Amerasia journal</i> 33, no. 1 (2007): 31–48.
                    </li>
                    <li>
                    <sup>7</sup> Chow, Edward A, Bernard Lau, L. Eric Leung, Richard Loos, and Brenda Yee. “The Development of a Community-Based Integrated Health Care System for the San Francisco Chinese Community.” <i>Chinese America, history and perspectives</i> (2007): 71–.
                    </li>
                    <li>
                    <sup>8</sup> Li, Han. "50 Years After Its Founding, Chinatown Center Still Fights Stigma That Keeps Asian Americans From Accessing Mental Health Help." The San Francisco Standard, October 18, 2022. <a href="https://sfstandard.com/community/chinatown-center-fights-stigma-mental-health/">https://sfstandard.com/community/chinatown-center-fights-stigma-mental-health/</a>.
                    </li>
                </ul>
            </details>
            <Footer />
        </div>
    )
}

export default MentalHealth
