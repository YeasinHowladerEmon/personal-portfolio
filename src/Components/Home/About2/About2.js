import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools, faTv } from '@fortawesome/free-solid-svg-icons'
import { faMobile } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from 'react-bootstrap';
const About2 = () => {
    return (
             <Container fluid  style={{ height: "500px" }} className="response mt-5 pt-5  align-items-center ">
            <Row className="row--45 d-flex justify-content-center">
                    <Col lg={3} md={6} sm={12}>
                       <div style={{display: "flex"}}>
                            <div className="mr-3">
                            <FontAwesomeIcon style={{fontSize: '50px'}} icon={faTv} />
                            </div>
                            <div>
                            <h5>Web Development</h5>
                            <br/>
                            <h6>Skill:
                              <ul>
                               <li>JavaScript</li>
                               <li>ReactJs</li>
                               <li>HTML&Css</li>
                               <li>Bootstrap</li>
                               <li>Firebase&github</li>
                               </ul>
                              </h6>
                            </div>
                       </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="mt">
                       <div style={{display: "flex"}}>
                            <div className="mr-3">
                            <FontAwesomeIcon style={{fontSize: '50px'}} icon={faMobile} />
                            </div>
                            <div>
                            <h5>App Development</h5>
                            <br/>
                            <h6>Skill:
                              <ul>
                               <li>JavaScript</li>
                               <li>ReactNative</li>
                               <li>HTML&Css</li>
                               <li>Bootstrap</li>
                               <li>Firebase&github</li>
                               </ul>
                              </h6>
                        </div>
                       </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="mt">
                       <div style={{display: "flex"}}>
                            <div className="mr-3">
                            <FontAwesomeIcon style={{fontSize: '50px'}} icon={faTools} />
                            </div>
                            <div>
                            <h5>Bakend Devlopment</h5>
                            <br/>
                            <h6>Skill:
                              <ul>
                               <li>MongoDB</li>
                               <li>NodeJs</li>
                               <li>ExpressJs</li>
                               <li>other tool</li>
                               <li>Firebase&github</li>
                               </ul>
                              </h6>
                        </div>
                       </div>
                    </Col>
                </Row>
            </Container>
    );
};

export default About2;