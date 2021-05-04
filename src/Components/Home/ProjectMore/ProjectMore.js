import React from 'react';
import { Col, Row } from 'react-bootstrap';

const projectMore = ({ project }) => {
    const {Name, tools, Image, src}= project
    return (
        <Col lg={6} md={6} sm={12} >
            <div className="card mt-5 mb-5 " style={{width: '28rem'}}>
                <img src={Image} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h3 className="card-title">{Name}</h3>
                        <h5>details</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, harum?</p>
                    </div>
                    <h5 style={{marginLeft: '20px'}}>technolgies :</h5>
                    <Row className="">
                       {
                           tools.map(tools => <Col lg={4} ><p style={{backgroundColor: 'grey', color: 'white', margin: "7px" , textAlign: "center"}}>{tools}</p></Col> )
                       }
                    </Row>
                    <div className="card-body">
                        <a href={src} className="card-link">Live Site</a>
                       
                    </div>
            </div>
            </Col>
          
    );
};

export default projectMore;