import React from 'react';
import { Col } from 'react-bootstrap';

const projectMore = ({ project }) => {
    const {Name, tools, Image, src}= project
    return (
        <Col lg={4} md={6} sm={12} >
            <div class="card mt-5 mb-5 " style={{width: '28rem'}}>
                <img src={Image} class="card-img-top" alt=""/>
                    <div class="card-body">
                        <h3 class="card-title">{Name}</h3>
                        <h5>details</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, harum?</p>
                    </div>
                    <h5 style={{marginLeft: '20px'}}>tools :</h5>
                    <ul class="">
                       {
                           tools.map(tools => <p>{tools}</p> )
                       }
                    </ul>
                    <div class="card-body">
                        <a href={src} class="card-link">Live Site</a>
                       
                    </div>
            </div>
            </Col>
          
    );
};

export default projectMore;