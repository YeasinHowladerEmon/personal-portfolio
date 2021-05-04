import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import '../Header/Header.css';
import './Banner.css'
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import image from "../../../Images/image 11.png"
// import image from "../../../Images/IMG_20201212_162303 (1).png"
import Typical from 'react-typical'
const Banner = () => {
    return (

        <Container fluid>
            <Row className="align-items-center justify-content-center banner">
                <Col md={4} className="p-md-5 order-2 order-md-1">
                    <Slide left>
                        <h1 className="font">Yeasin <span className="color-primary"> Emon</span></h1>
                        <Typical
                            steps={['Creative a Frontend Developer', 1000, 'Full Stack Developer', 500, 'React Developer', 500]}
                            loop={Infinity}
                            wrapper="h4"
                        />
                        {/* <h4 className="line-1 anim-typewriter">Creative a Frontend Developer</h4> */}</Slide>
                    <br />
                    <a  href="https://drive.google.com/u/0/uc?id=15dF8HhBlmNer18nwDbGCvhgi0klNVNUU&export=download"><button className="grow_skew_forward">Download Resume</button></a>
                   
                    
                </Col>
                <Col md={6} className="order-1 order-md-2 mt-5">
                    <Zoom right><Image className="mt-5" src={image} fluid /></Zoom>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;