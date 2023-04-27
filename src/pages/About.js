import React from 'react';
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
                        gsi = "Professor Lok Siu & Jessica Jiang"
                        groups = {[
                            {
                                name: "Chinese Hospital",
                                people: [
                                    "Annie Pan",
                                    "Kelly Ma",
                                    "Sherry Zhang",
                                    "Yaming Zhuang"
                                ]
                            },
                            {
                                name: "CCSF",
                                people: [
                                    "Diane Chao",
                                    "Maddi Wong",
                                    "Sophia Jacobs"
                                ]
                            },
                            {
                                name: "I-Hotel",
                                people: [
                                    "Ava Olson",
                                    "Emily Ho",
                                    "Shanti Knutzen",
                                    "Vivian Kuang"
                                ]
                            },
                            {
                                name: "Portsmouth Square",
                                people: [
                                    "Allison Hong",
                                    "Caroline Lu",
                                    "Fiona Yim",
                                    "Kenny Li"
                                ]
                            },
                            {
                                name: "Kubla Khan Nightclub",
                                people: [
                                    "Chae Kim",
                                    "Harrington Fan",
                                    "Kelly Lam",
                                    "Tawny Hoang"
                                ]
                            },
                            {
                                name: "Platform/Mapping",
                                people: [
                                    "Joanne Ng",
                                    "Lily Yang",
                                    "Michelle R Chen"
                                ]
                            }
                        ]}
                    />
                </div>
            </div>
            <div className="colophon">
                <h2>Colophon</h2>
                <p>This website was coded with React.js, Bootstrap, and plain HTML. 
                <br/>Typeset with Google Fonts Rowdies and Quicksand.
                <br/>Hosted on Github Pages.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default About