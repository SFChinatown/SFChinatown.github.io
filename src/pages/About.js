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
                        <h2>Who we are</h2>
                        <div className='overview-img'>
                            <img src={require('../assets/images/Spring2023.jpg')}/>
                        </div>
                        <p>The <i>Radical Histories of San Francisco Chinatown Project</i> is created through the collaborative efforts of twenty-two undergraduate students, led by Professor Lok Siu and GSI Jessica Jiang. Funded by the Future Histories Lab, a project of the UC Berkeley’s Global Urban Humanities Initiative, the course was cross-listed in three units, including the Asian American & Asian Diaspora Studies Program, the Art and Humanities, and the Environmental Design department.</p>
                        <p>Students began the course by reading existing scholarship on SF Chinatown, accompanied with guest lectures and a guided tour of Chinatown. The class brainstormed ideas for how we wanted to organize our project, identifying five broad themes we felt were important to cover in a survey of Chinatown’s history: Housing, public space, public health, education, and cultural enterprise. We identified five locations as “anchoring sites” for the project based on existing community connections and availability of archives, with each site corresponding to one of the broad themes. In the following weeks, students broke into small groups according to these themes and dove into independent research in archives and with community members.</p>
                        <p>The format of our platform was an important question as we wanted readers to maintain an awareness of time and space in Chinatown, while also communicating complex webs of relationships between people, places, and politics. After exploring several existing digital humanities platforms, we ultimately settled on the form that you see now, a website and interactive map coded from scratch by students. A small group of students focused on building the website, working closely with the other small groups to develop unique designs for each research theme.</p>
                        <p>This first iteration of the project only represents the tip of the iceberg that is SF Chinatown’s vibrant history. While future classes will continue working on the site, the design and content of the website you see now is the product of our students’ hard work and diverse skills in research, multimedia journalism, web development, and design. Moreover, this project would not have been possible without the generosity of our community partners, who were eager to encourage our research. Thank you to the many community members across the Bay Area who fielded our emails, hopped on Zoom calls to answer questions, invited us to community events, gave us building tours, and shared their archives and memories with us</p>
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