import React from 'react';
import { Col,  } from 'react-bootstrap';


const Project = ({ project }) => {
    return (
        <Col  lg={4} md={6} sm={12}>
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
             {/* <div class="card">
                <div class="image">
                    <img style={{height: '100%'}} src={project.Image} alt='' />
                </div>
                <div class="details">
                    <div class="center">
                        <h1>Someone famousteam leader</h1>
                            <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
                            <ul>
                                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            </ul>
                        
                        </div>
                    </div>
                    </div> 
                 */}
            </Col>
    );
};

export default Project;