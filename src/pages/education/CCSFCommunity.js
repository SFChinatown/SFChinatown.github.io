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
                    body= "A premiere documentary about the fight for and establishment of CCSF Chinatown."
                />
              </div>
          
            </div>
            <Footer />
        </div>
    )
}

export default CCSFCommunity
