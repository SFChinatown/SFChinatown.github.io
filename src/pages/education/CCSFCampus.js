import React from 'react';
import Footer from '../../components/Footer';
import "./CCSFCampus.css";
import Tile from '../../components/Tile';
import "../PageStyle.css";
import { Carousel } from 'react-bootstrap';
import ListBlock from '../../components/ListBlock';

const CCSFCampus = () => {
    return (
        <div className="ccsf-campus-page">
            <div className="ccsf-campus-intro">
                <h2>CCSF Chinatown/North Beach Campus Tour</h2>
                <div className="imgInText">
                    <div className="text">
                        <p>
                        The City College of San Francisco (CCSF) has always been a place of growth, exploration, and wonder. The facilities never used to reflect that. However, the Chinatown community banded together to push for adequate facilities and technology that allowed for specialized programs and expanded the reach of CCSF. Check out the lovely, modern, and intentional facilities below on this tour.
                        </p>
                    </div>
                    <div className="imgText">
                    <figure>
                        <img src={require('../../assets/images/ccsf/campus/image1.jpg')} className="horizontal-img"/>
                    </figure>
                    </div>
                </div>
            </div>
            <div className="main-building">
                <h2>Main Building</h2>
                <div className='ccsf-campus-description'>
                    <Carousel className="description-carousel">
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel1/CCSF_Main_F1_01.jpeg')}
                          alt="First slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel1/CCSF_Main_F1_01.jpeg')}
                          alt="Second slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel1/CCSF_Main_F1_03.jpeg')}
                          alt="Third slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel1/CCSF_Main_F1_04.jpeg')}
                          alt="Fourth slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel1/CCSF_Main_F1_05.jpeg')}
                          alt="Fifth slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel1/CCSF_Main_F1_06.jpeg')}
                          alt="Sixth slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel1/CCSF_Main_F1_07.jpeg')}
                          alt="Seventh slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel1/CCSF_Main_F1_08.jpeg')}
                          alt="Eighth slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel1/CCSF_Main_F1_09.jpeg')}
                          alt="Ninth slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel1/CCSF_Main_F1_10.jpeg')}
                          alt="Tenth slide"
                        />
                        </Carousel.Item>
                    </Carousel>
                    <ListBlock
                        header="Floor 1 – Lobby / Counseling"
                        body={[
                            "The academic counseling office on the first floor helps students with a wide range of services such as academic services, career counseling, disabled aid, personal concerns (mental health), workshops, and transferring from non-credit to credit.",
                            "The diversity of administrative staff makes the space more approachable for community members looking for ESL classes or other services, especially seeing that many of the staff members are multilingual.",
                            "Kit says that they hope to have the same administrative services offered at the Chinatown campus as the main Ocean campus so that students can more easily access these services or pieces of information."
                        ]}
                    />
                </div>
                <div className='ccsf-campus-description'>
                    <Carousel className="description-carousel">
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel2/CCSF_Main_F2_1.jpeg')}
                          alt="First slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel2/CCSF_Main_F2_2.jpeg')}
                          alt="Second slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel2/CCSF_Main_F2_3.jpeg')}
                          alt="Third slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel2/CCSF_Main_F2_4.jpeg')}
                          alt="Fourth slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel2/CCSF_Main_F2_5.jpeg')}
                          alt="Fifth slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel2/CCSF_Main_F2_6.jpeg')}
                          alt="Sixth slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel2/CCSF_Main_F2_7.jpeg')}
                          alt="Seventh slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel2/CCSF_Main_F2_8.jpeg')}
                          alt="Eighth slide"
                        />
                        </Carousel.Item>
                    </Carousel>
                    <ListBlock
                        header="Floor 2 – Library"
                        body={[
                            "The library is two floors. The first level has a collection of ESL level books that librarians can refer ESL students to based on their level of reading. They also have books, newspapers, and magazines to read.",
                            "The library’s goal is to provide equitable access to the marginalized student population by providing textbooks that they might need and offering computers to borrow for students as well. In addition to laptops, students can get hot spots to borrow as well.",
                            "The library also hopes to serve as a safe and relaxing space for folks who do not have that space at home."
                        ]}
                    />
                </div>
                <div className='ccsf-campus-description'>
                    <Carousel className="description-carousel">
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel3/CCSF_Main_F4_1.jpeg')}
                          alt="First slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel3/CCSF_Main_F4_2.jpeg')}
                          alt="Second slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel3/CCSF_Main_F4_3.jpeg')}
                          alt="Third slide"
                        />
                        </Carousel.Item>
                    </Carousel>
                    <ListBlock
                        header="Floor (4) – Multi-purpose room (events, etc.)"
                        body={[
                            "This space is used for events, such as the showing of the documentary film “Block by Block”, and the views of the city from its balcony are truly breathtaking.",
                            "The quality of this building, as exemplified by the design, greenery, and amenities, makes it a place where students feel that they are important, and that their education is important."
                        ]}
                    />
                </div>
                <div className='ccsf-campus-description'>
                    <Carousel className="description-carousel">
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel4/CCSF_Main_F9_1.jpeg')}
                          alt="First slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel4/CCSF_Main_F9_2.jpeg')}
                          alt="Second slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel4/CCSF_Main_F9_3.jpeg')}
                          alt="Third slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel4/CCSF_Main_F9_4.jpeg')}
                          alt="Fourth slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel4/CCSF_Main_F9_5.jpeg')}
                          alt="Fifth slide"
                        />
                        </Carousel.Item>
                    </Carousel>
                    <ListBlock
                        header="Floor (9-10) – Admin Offices / Faculty Prep Room"
                        body={[
                            "The admin offices are surrounded by broad windows that let in lots of light and provide stunning views of the city.",
                            "ESL teacher and coordinator Jeanne Kirsley says that she could spend the whole day in the office, and still feel good by the end of it because of how open and bright the space is."
                        ]}
                    />
                </div>
                <div className='ccsf-campus-description'>
                    <Carousel className="description-carousel">
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel5/CCSF_Main_F11_01.jpeg')}
                          alt="First slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel5/CCSF_Main_F11_02.jpeg')}
                          alt="Second slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel5/CCSF_Main_F11_03.jpeg')}
                          alt="Third slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel5/CCSF_Main_F11_04.jpeg')}
                          alt="Fourth slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel5/CCSF_Main_F11_05.jpeg')}
                          alt="Fifth slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel5/CCSF_Main_F11_06.jpeg')}
                          alt="Sixth slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel5/CCSF_Main_F11_07.jpeg')}
                          alt="Seventh slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel5/CCSF_Main_F11_08.jpeg')}
                          alt="Eigth slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel5/CCSF_Main_F11_09.jpeg')}
                          alt="Ninth slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel5/CCSF_Main_F11_10.jpeg')}
                          alt="Tenth slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel5/CCSF_Main_F11_11.jpeg')}
                          alt="Eleventh slide"
                        />
                        </Carousel.Item>
                    </Carousel>
                    <ListBlock
                        header="Floor (11-12) – ESL Classrooms / Computer Lab"
                        body={[
                            "CCSF Chinatown / North Beach offers free ESL and Citizenship classes for non-credit, as well as free drop-in ESL assessment every Wednesday for folks who are looking into these classes but not sure where to start."
                        ]}
                    />
                </div>
                <div className='ccsf-campus-description'>
                    <Carousel className="description-carousel">
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel6/CCSF_Main_F13_1.jpeg')}
                          alt="First slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel6/CCSF_Main_F13_2.jpeg')}
                          alt="Second slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel6/CCSF_Main_F13_3.jpeg')}
                          alt="Third slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel6/CCSF_Main_F13_4.jpeg')}
                          alt="Fourth slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel6/CCSF_Main_F13_5.jpeg')}
                          alt="Fifth slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel6/CCSF_Main_F13_6.jpeg')}
                          alt="Sixth slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={require('../../assets/images/ccsf/campus/carousel6/CCSF_Main_F13_7.jpeg')}
                          alt="Seventh slide"
                        />
                        </Carousel.Item>
                    </Carousel>
                    <ListBlock
                        header="Floor (13) – Child Ed"
                        body={[
                            "CCSF offers Child Development study programs as well as Child Observation Classes. These observation classes are free and allow for community members to have a space to come with their children or grandchildren to play and learn tips about child care.",
                            "The extra stimulation of the toys and environment for kids is proven to be good for their nervous systems and allows students to better focus"
                        ]}
                    />
                </div>
                </div>
                <div className="annex-section">
                    <h2>Annex</h2>
                    <div className='ccsf-campus-description'>
                        <Carousel className="description-carousel">
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel7/CCSF_Annex_F1_1.jpeg')}
                            alt="First slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel7/CCSF_Annex_F1_2.jpeg')}
                            alt="Second slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel7/CCSF_Annex_F1_3.jpeg')}
                            alt="Third slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel7/CCSF_Annex_F1_4.jpeg')}
                            alt="Fourth slide"
                            />
                            </Carousel.Item>
                        </Carousel>
                        <ListBlock
                            header="Floor 1 – Amphitheater"
                            body={[
                                "This amphitheater or auditorium has been used to host community events and shows as a space for art and coming together for the Chinatown community.",
                                "The building is under renovations now, but they hope to be able to begin hosting events once more when renovations have been completed."
                            ]}
                        />
                    </div>
                    <div className='ccsf-campus-description'>
                        <Carousel className="description-carousel">
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel8/CCSF_Annex_F2_01.jpeg')}
                            alt="First slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel8/CCSF_Annex_F2_02.jpeg')}
                            alt="Second slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel8/CCSF_Annex_F2_03.jpeg')}
                            alt="Third slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel8/CCSF_Annex_F2_04.jpeg')}
                            alt="Fourth slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel8/CCSF_Annex_F2_05.jpeg')}
                            alt="Fifth slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel8/CCSF_Annex_F2_06.jpeg')}
                            alt="Sixth slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel8/CCSF_Annex_F2_07.jpeg')}
                            alt="Seventh slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel8/CCSF_Annex_F2_08.jpeg')}
                            alt="Eighth slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel8/CCSF_Annex_F2_09.jpeg')}
                            alt="Ninth slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel8/CCSF_Annex_F2_10.jpeg')}
                            alt="Tenth slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel8/CCSF_Annex_F2_11.jpeg')}
                            alt="Eleventh slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel8/CCSF_Annex_F2_12.jpeg')}
                            alt="Twelfth slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel8/CCSF_Annex_F2_13.jpeg')}
                            alt="Thirteenth slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel8/CCSF_Annex_F2_14.jpeg')}
                            alt="Fourteenth slide"
                            />
                            </Carousel.Item>
                        </Carousel>
                        <ListBlock
                            header="Floor 2 – Culinary"
                            body={[
                                "The second floor is a beautiful and novel collection of cooking stations and cookware!",
                                "This cooking program is renowned, and the students who come out of it are often hired quickly by restaurants looking for chefs.",
                                "There are stoves, sinks, prep tables, a culinary lab, and more!",
                                "CCSF offers a 9-week non-credit course to students looking to improve their culinary skills and get hands-on experience with food handling."
                            ]}
                        />
                    </div>
                    <div className='ccsf-campus-description'>
                        <Carousel className="description-carousel">
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel9/CCSF_Annex_F3_1.jpeg')}
                            alt="First slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel9/CCSF_Annex_F3_2.jpeg')}
                            alt="Second slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel9/CCSF_Annex_F3_3.jpeg')}
                            alt="Third slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel9/CCSF_Annex_F3_4.jpeg')}
                            alt="Fourth slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel9/CCSF_Annex_F3_5.jpeg')}
                            alt="Fifth slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel9/CCSF_Annex_F3_6.jpeg')}
                            alt="Sixth slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel9/CCSF_Annex_F3_7.jpeg')}
                            alt="Seventh slide"
                            />
                            </Carousel.Item>
                        </Carousel>
                        <ListBlock
                            header="Floor 3 – Home Ed / Ec"
                            body={[
                                "The home health aid training programs taught here are taught with the Self Help for the Elderly organization that is based in Chinatown. They train students to become aids in the home to the elderly or disabled. They also learn housekeeping skills through the home education programs on this floor.",
                                "There is a bed, bath, washing machine, sinks, and custodial equipment."
                            ]}
                        />
                    </div>
                    <div className='ccsf-campus-description'>
                        <Carousel className="description-carousel">
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel10/CCSF_Annex_F4_1.jpeg')}
                            alt="First slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel10/CCSF_Annex_F4_2.jpeg')}
                            alt="Second slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel10/CCSF_Annex_F4_3.jpeg')}
                            alt="Third slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel10/CCSF_Annex_F4_4.jpeg')}
                            alt="Fourth slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('../../assets/images/ccsf/campus/carousel10/CCSF_Annex_F4_5.jpeg')}
                            alt="Fifth slide"
                            />
                            </Carousel.Item>
                        </Carousel>
                        <ListBlock
                            header="Floor 4 – Fashion"
                            body={[
                                "This newly put-together fashion floor is for a fashion studies program that is being transferred to the CCSF Chinatown campus.",
                                "There are sewing machines, mannequins, and all sorts of tools for students to learn more about the fashion and design industries, and gain hands-on experience."
                            ]}
                        />
                    </div>
            </div>
            <br/>
            <br/>

            <Footer />
        </div>
    )
}

export default CCSFCampus