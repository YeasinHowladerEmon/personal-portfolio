import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import './About.css'
import image2 from '../../../Images/IMG_20200928_134428.jpg'
const About = () => {
    return (
        <>
            <Container id="About" fluid style={{ height: "1100px" }}>
                <h1 style={{ fontSize: '60px', textAlign: 'center', marginTop: '100px' }}>About</h1>
                <Row className=" align-items-center justify-content-center ">
                    <Col lg={4} className="mt-5">
                        <Zoom left>
                            <Flippy
                                flipOnHover={true} // default false
                                flipDirection="horizontal" // horizontal or vertical
                                // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                                // // if you pass isFlipped prop component will be controlled component.
                                // // and other props, which will go to div
                                style={{ width: '100%', height: '100%' }} /// these are optional style, it is not necessary
                            >
                                <FrontSide
                                    // style={{
                                    //     backgroundColor: '#41669d',
                                    // }}
                                >
                                   <Image className="mt-5" style={{ height: '70vh' }} src={image2} fluid />
                                  
                                </FrontSide>
                                <BackSide
                                    >
                                        <h2 className="text-center">hey I am here!</h2>
                                        <h2  className="text-center">Contact me?</h2>
                                   <h5>Name: Yeasin Howlader Emon</h5>
                                   <h5>Email: <a href="http://emonibnsalim@gmail.com" target="_blank">emonibnsalim@gmail.com</a></h5>
                                   <h5>GitHub: <a href="https://github.com/YeasinHowladerEmon" target="_blank">https://github.com/YeasinHowladerEmon</a></h5>
                                   <h5>LinkDin: <a href="https://www.linkedin.com/in/ariyanemon/" target="_blank">https://www.linkedin.com/in/ariyanemon/</a></h5>
                                   <h5>Phone: 01903245299</h5>
                                </BackSide>
                            </Flippy>
                           
                        </Zoom>
                    </Col>
                    <Col lg={6} className="p-md-5 ">
                        <Slide right>

                            <h5 className="">My name is Yeasin Howlader Emon. I am a Web Developer, and I'm very passionate and dedicated to my work.
                            With 6 months dedicated work a junior Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</h5>
                            <br />
                            <a  href="https://drive.google.com/file/d/1KoQbLWEVPYsJtj6XKjmkcO46lU9sSvZl/view"><button className="grow_skew_forward">Download CV</button></a>
                        </Slide>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default About;