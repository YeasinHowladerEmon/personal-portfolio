import React from 'react';
import { Col, Row } from 'react-bootstrap';


const Project = ({project}) => {
    return (
        <Col lg={4} md={6} sm={12}>
                 <div className="card-flyer">
                    <div className="text-box">

                        <div className="image-box">
                            <img src={project.Image} alt="" />
                        </div>
                        <div className="text-container">
                            <h3>{project.Name}</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, cupiditate!</p>
                        </div>
                    </div>
                </div>
               
            </Col>
    );
};

export default Project;