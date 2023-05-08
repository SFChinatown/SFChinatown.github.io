import React from 'react';
import Footer from '../../components/Footer';
import "./CCSFCommunity.css";
import "../PageStyle.css";
import { Carousel } from 'react-bootstrap';
import ListBlock from '../../components/ListBlock';
import TextBlock from '../../components/TextBlock';

const CCSFCommunity = () => {
    return (
        <div className="ccsf-community-page">
            <div className="ccsf-community-intro">
                <h2>CCSF and the Community</h2>
            </div>
            <div className="ccsf-community-body">
              <div className='ccsf-community-description'>
                <video
                    className="description-carousel"
                    src={require('../../assets/images/ccsf/community/interview.mp4')}
                    controls
                  />
                <TextBlock
                    header="Interview with ESL Coordinator Jeanne Kearsley"
                    body="Jeanne Kearsley has been teaching at CCSF for over two decades. Throughout that time, she’s witnessed classes of students come and go, the battle for adequate facilities, and perfected a variety of teaching techniques. Take a peak into her classroom to witness how she approaches teaching English as Second Language (ESL) classes."
                />
              </div>
              <div className='ccsf-community-description'>
                <Carousel className="description-carousel">
                    <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('../../assets/images/ccsf/community/carousel1/CCSF_BlockbyBlock_01.jpeg')}
                      alt="First slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('../../assets/images/ccsf/community/carousel1/CCSF_BlockbyBlock_02.jpeg')}
                      alt="Second slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('../../assets/images/ccsf/community/carousel1/CCSF_BlockbyBlock_03.jpeg')}
                      alt="Third slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('../../assets/images/ccsf/community/carousel1/CCSF_BlockbyBlock_04.jpeg')}
                      alt="Fourth slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('../../assets/images/ccsf/community/carousel1/CCSF_BlockbyBlock_05.jpeg')}
                      alt="Fifth slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('../../assets/images/ccsf/community/carousel1/CCSF_BlockbyBlock_06.jpeg')}
                      alt="Sixth slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('../../assets/images/ccsf/community/carousel1/CCSF_BlockbyBlock_07.jpeg')}
                      alt="Seventh slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('../../assets/images/ccsf/community/carousel1/CCSF_BlockbyBlock_08.jpeg')}
                      alt="Eighth slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('../../assets/images/ccsf/community/carousel1/CCSF_BlockbyBlock_09.jpeg')}
                      alt="Ninth slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('../../assets/images/ccsf/community/carousel1/CCSF_BlockbyBlock_11.jpeg')}
                      alt="Tenth slide"
                    />
                    </Carousel.Item>
                </Carousel>
                <ListBlock
                    header="Block by Block Screening"
                    body={["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]}
                />
              </div>
              <div className='ccsf-community-description'>
                <Carousel className="description-carousel">
                    <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('../../assets/images/test.png')}
                      alt="First slide"
                    />
                    </Carousel.Item>
                </Carousel>
                <ListBlock
                    header="CCSF Engagement with Community Organizations"
                    body={[
                      "Constantly asking themselves “How do we create partnerships with community organizations?”",
                      "The community helped us to get this building, so we want to support them in return",
                      "“We are so attached to the community. This is not just a school. We work with our community partners.” - Kit",
                      "Tabling from community organizations (such as CAA offering free employment services and free immigration services) & bulletin board that advertises community events",
                      "Community members coming into CCSF to use the library or lobby space to rest, read the newspaper, use the wifi",
                      "Understanding that when you have local residents living in SROs, finding space outside your living space to do little things is important"
                    ]}
                />
              </div>
            </div>
            <Footer />
        </div>
    )
}

export default CCSFCommunity