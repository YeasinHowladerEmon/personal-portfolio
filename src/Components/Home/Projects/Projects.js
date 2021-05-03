import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Cm from '../../../Images/screenshot-cm-repiar.web.app-2021.05.02-08_11_37.png';
import books from '../../../Images/screenshot-hadith-foundetion.web.app-2021.05.02-08_08_01.png';
import portal from '../../../Images/screenshot-localhost_3001-2021.05.02-08_22_19.png';
import race from '../../../Images/screenshot-metro-race.web.app-2021.05.02-08_06_09.png';
import league from '../../../Images/screenshot-the-premier-league.netlify.app-2021.05.02-08_02_53.png';
import Project from '../Project/Project';
import './Projects.css'
import { Link } from 'react-router-dom';
const projectFakeData = [
    
    {
          Name:  'CM Repair',
          Image: Cm,
         
    },
    {
          Name:  'Islamic Hadith Books',
          Image: books,
         
    },
    {
          Name:  'Doctors Portal',
          Image: portal,
         
    },
    {
          Name:  'Metro Race',
          Image: race,
         
    },
    {
          Name:  'Premear League',
          Image: league,
          
    },
]
const Projects = () => {
    return (
        <div style={{height: 'auto', backgroundColor: '#f8f9fa'}} >
            <div>
                <h2 className="text-center mb-5 pt-5">My Project </h2>
            </div>
        <Container fluid  id="cards_landscape_wrap-2" className=" d-flex justify-content-center" >
            <Row  className="containers w-75">
                {
                    projectFakeData.map(project => <Project project={project} key={project.name}/>)
                }
            </Row>
        </Container>
        <br/><br/>
                 {/* <center><Link className=" mt-3" to="/work">See More</Link></center> */}
        </div>
    );
};

export default Projects;