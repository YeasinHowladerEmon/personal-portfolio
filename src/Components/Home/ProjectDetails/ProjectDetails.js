import React from 'react';
import Cm from '../../../Images/screenshot-cm-repiar.web.app-2021.05.02-08_11_37.png';
import books from '../../../Images/screenshot-hadith-foundetion.web.app-2021.05.02-08_08_01.png';
import portal from '../../../Images/screenshot-localhost_3001-2021.05.02-08_22_19.png';
import race from '../../../Images/screenshot-metro-race.web.app-2021.05.02-08_06_09.png';
import league from '../../../Images/screenshot-the-premier-league.netlify.app-2021.05.02-08_02_53.png'
import NavBar from '../NavBar/NavBar';
import ProjectMore from '../../Home/ProjectMore/ProjectMore'
import { Container, Row } from 'react-bootstrap';

const projectDetails = [

    {
        Name: 'CM Repair',
        Image: Cm,
        src: 'https://cm-repiar.web.app/',
        tools: ['reactjs', 'nodeJs', 'JavaScript', 'HTML&Css', 'Bootstrap', 'Firebase', 'mongoDB'
        ],
       
    },
    {
        Name: 'Islamic Hadith Books',
        Image: books,
        src: 'https://hadith-foundetion.web.app/',
        tools: [
            'reactjs', 'nodeJs', 'JavaScript', 'HTML&Css', 'Bootstrap', 'Firebase', 'mongoDB'
        ],
      
    },
    {
        Name: 'Doctors Portal',
        Image: portal,
        src: 'https://metro-race.web.app/',
        tools: [
            'reactjs', 'nodeJs', 'JavaScript', 'HTML&Css', 'Bootstrap', 'Firebase', 'mongoDB'
        ],
  
    },
    {
        Name: 'Metro Race',
        Image: race,
        src: 'https://metro-race.web.app/',
        tools: [
            'reactjs', 'JavaScript', 'HTML&Css', 'Bootstrap', 'Firebase'
        ],
        
    },
    {
        Name: 'Premear League',
        Image: league,
        src: 'https://the-premier-league.netlify.app/',
        tools: [
            'reactjs', 'nodeJs', 'JavaScript', 'HTML&Css', 'Bootstrap', 'netlify'
        ],
        
    },
]
const ProjectDetails = () => {
    return (
    <div style={{height: 'auto', backgroundColor: '#f8f9fa'}} >
        <div>
            <h2 className="text-center mb-5 pt-5">My Project </h2>
        </div>
            <Container fluid  id="cards_landscape_wrap-2" className=" d-flex justify-content-center" >
                <Row  className="containers w-75 align-items-center">
                    {
                        projectDetails.map(project => <ProjectMore project={project}></ProjectMore>)
                    }
                </Row>
            </Container>
        {/* <div>
            <div className="mx-auto row " >
                {
                    projectDetails.map(project => <ProjectMore project={project}></ProjectMore>)
                }
            </div>
            <div className="">
                {/* <Footer></Footer> */}
           

        </div>
    );
};

export default ProjectDetails;