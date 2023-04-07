import React from 'react';
// import CarouselHeader from '../components/CarouselHeader';
import TextBlock from '../components/TextBlock';
import SemesterClass from '../components/SemesterClass';
import Footer from '../components/Footer';
import "./About.css";

const About = () => {
    return (
        <div>
            <div className='information'>
                <div className='overview'>
                    <div className='description'>
                        <TextBlock 
                            header="Who we are"
                            body="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
                        />
                    </div>
                    <div className='overview-img'>
                        <img src={require('../assets/images/test.png')}/>
                    </div>
                </div>
                <div className="semester-info">
                    <SemesterClass
                        current = {true}
                        semester = "Spring 2023"
                        gsi = "Jessica Jiang"
                        groups = {[
                            {
                                name: "group 1",
                                people: [
                                    "person a",
                                    "person b"
                                ]
                            },
                            {
                                name: "group 2",
                                people: [
                                    "person a",
                                    "person b"
                                ]
                            },
                            {
                                name: "group 3",
                                people: [
                                    "person a",
                                    "person b"
                                ]
                            },
                            {
                                name: "group 4",
                                people: [
                                    "person a",
                                    "person b"
                                ]
                            },
                            {
                                name: "group 5",
                                people: [
                                    "person a",
                                    "person b"
                                ]
                            }
                        ]}
                    />
                </div>
            </div>
            <div className="colophon">
                <h2>Colophon</h2>
                <p>This site was made using Github Pages, Bootstrap, React.js, with accompanying use of FontAwesome. Typset with [font names]. And any extra other bits about making the website.
But it’s sort of important that this paragraph has
a sort of reverse triangle shape.
very important.</p>
            </div>
            <Footer />
        </div>
    )
}

export default About