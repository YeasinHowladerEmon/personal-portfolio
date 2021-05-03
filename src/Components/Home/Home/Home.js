import React from 'react';
import About from '../About/About';
import About2 from '../About2/About2';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Header/>
            <About/>
            <About2/>
            <ProjectDetails/>
            <Blogs/>
            <Contact/>
        </div>
    );
};

export default Home;